<template>
  <div id="navMenus">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <img src="../../images/lenovo.png" />
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">我教的专业</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我教的课程</template>
              <el-submenu
                :index="'2-'+xiabiao"
                v-for="(item,xiabiao) in MajorCustomData.majorCustomItemTreeAdapterList"
                :key="xiabiao"
              >
                <template slot="title">{{item.name}}</template>
                <el-menu-item
                  index="2-1-1"
                  v-for="(itemMajor,index) in item.childList"
                  :key="index"
                >
                  <a
                    href
                    @click.prevent="toMyCourseList(itemMajor.id,itemMajor.name)"
                  >{{itemMajor.name}}</a>
                </el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3">考试管理</el-menu-item>
            <el-menu-item index="4">学员管理</el-menu-item>
            <el-menu-item index="6">课程管理</el-menu-item>
            <el-menu-item index="5">我的贡献</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <ul class="loginUser">
            <li>
              <el-badge :value="count" :max="10" class="item">
                <i
                  class="el-icon-message-solid"
                  style="cursor:pointer;font-size:20px;"
                  @click="myNews"
                ></i>
              </el-badge>
              <span
                v-if="userName"
                v-on:click="mymessage"
                style="cursor:pointer;color:#A3A3A4;font-size:14px;"
              >{{userName}}</span>
              <span @click="onlineAsk" class="ask_title">
                <i class="el-icon-question"></i>在线解答
              </span>
              <span
                style="cursor:pointer;color:#A3A3A4;font-size:14px;margin-left:15px"
                @click="logOut"
              >退出</span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "navMenus",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      userName: "",
      MajorCustomData: "",
      count: 0
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      //debugger
      switch (key) {
        case "1":
          this.$router.push("/teacher/myMajor");
          break;
        case "2":
          this.$router.push("/teacher/myCourse");
          break;
        case "3":
          this.$router.push("/teacher/exam");
          break;
        case "4":
          this.$router.push("/teacher/students");
          break;
        case "5":
          this.$router.push("/teacher/myContribute");
          break;
        case "6":
          this.$router.push("/teacher/courseManagement");
          break;
      }
    },
    mymessage() {
      this.$router.push("/teacher/mymeage");
    },
    myNews() {
      this.$router.push("/teacher/myNews");
    },
    onlineAsk() {
      this.$router.push("/teacher/onlineAnswer");
    },
    //退出
    logOut() {
      var app = this;
      if (confirm("确定要退出吗？")) {
        this.$http.get("/permit/logout").then(res => {
          console.log(res)
          if(res.data === "" && res.status === 200){
            app.$message.success("退出成功！")
          }else{
            app.$message.success("退出异常，用户可能已经退出。。。")
          }
          window.localStorage.clear(); //清除缓存
          app.$router.push(`/logined`);
        });
      }
    },
    //获取该教师的专业
    getMajorCustom(userId) {
      var app = this;
      this.$http
        .get(`/product/majorCustom/getMajorCustomByUser/${userId}`)
        .then(function(res) {
          app.MajorCustomData = res.data[0];
          // console.log(app.MajorCustomData.majorCustomItemTreeAdapterList)
        });
    },
    //未读消息
    noReadMsg() {
      var app = this;
      this.$http
        .get("/business/sysMessageReading/noHaveReadDataCount")
        .then(res => {
          if(!isNaN(res.data)){
            app.count = res.data;
          }else{
            return app.count;
          }
        });
    },
    toMyCourseList(itemId, name) {
      this.$router.push({
        name: "myCourseList",
        //  path:'/teacher/MyCourseList',
        params: {
          itemId: itemId,
          name: name
        }
      });
    }
  },
  // watch:{
  //     $route: function(to, from) {
  //     // from表示上一个动态路由信息对象
  //     // to表示当前转向到的动态路由信息对象

  //     }
  // },
  created() {
    this.userName = window.localStorage.getItem("userName");
    this.userId = window.localStorage.getItem("userId");
    this.getMajorCustom(this.userId);
    this.noReadMsg();
  }
};
</script>

<style>
a {
  color: #6c6868;
  font-size: 12px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
  padding-left: 0 !important;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.grid-content img {
  height: 46px;
  display: block;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.loginUser {
  overflow: hidden;
}
.loginUser li {
  float: left;
  margin-left: 20px;
}
.logoutSvg {
  opacity: 0.1;
}
.ask_title {
  background: #49c0e0;
  font-size: 14px;
  color: white;
  padding: 15px 5px;
}
.ask_title:hover {
  cursor: pointer;
}
#navMenus .el-badge__content.is-fixed {
  top: 11px;
  line-height: 13px;
  padding: 0px 3px;
  height: 13px;
}
</style>