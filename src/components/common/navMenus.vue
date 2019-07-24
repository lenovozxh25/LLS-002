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
              <el-submenu index="2-1">
                <template slot="title">第一学期</template>
                <el-menu-item index="2-1-1">web前端基础</el-menu-item>
                <el-menu-item index="2-1-2">web前端高级</el-menu-item>
                <el-menu-item index="2-1-3">脚本语言基础</el-menu-item>
              </el-submenu>
              <el-submenu index="2-2">
                <template slot="title">第二学期</template>
                <el-menu-item index="2-2-1">脚本语言高级</el-menu-item>
                <el-menu-item index="2-2-2">响应式设计</el-menu-item>
                <el-menu-item index="2-2-3">编程语言基础</el-menu-item>
              </el-submenu>
              <el-submenu index="2-3">
                <template slot="title">第三学期</template>
                <el-menu-item index="2-3-1">服务端应用开发</el-menu-item>
                <el-menu-item index="2-3-2">数据库基础</el-menu-item>
                <el-menu-item index="2-3-3">编程语言高级</el-menu-item>
              </el-submenu>
              <el-submenu index="2-4">
                <template slot="title">第四学期</template>
                <el-menu-item index="2-4-1">前端框架(Vue)</el-menu-item>
                <el-menu-item index="2-4-2">Vue项目实战</el-menu-item>
                <el-menu-item index="2-4-3">Node.js</el-menu-item>
              </el-submenu>
              <el-submenu index="2-5">
                <template slot="title">第五学期</template>
                <el-menu-item index="2-5-1">就业岗前冲刺</el-menu-item>
                <el-menu-item index="2-5-2">全真项目实训</el-menu-item>
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
                 <i class="el-icon-message-solid" style="cursor:pointer;font-size:20px;" @click="myNews"></i>
             
              </el-badge>
              <span
                v-if="userName"
                v-on:click="mymessage"
                style="cursor:pointer;color:#A3A3A4;font-size:14px;"
              >{{userName}}</span>
              <span @click="onlineAsk" class="ask_title">
                <i class="el-icon-question"></i>在线提问
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
      count:0
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
      this.$router.push("/teacher/onlineAsk");
    },
    //退出
    logOut() {
      var app = this;
      this.$http.get("/permit/logout").then(res => {
        if (!!res.data === false) {
          app.$router.push({
            path: "/logined",
            query: {
              r: true
            }
          });
        }
      });
    },
    //未读消息
    noReadMsg (){
      var app = this;
      this.$http
          .get("/message/sysMessageReading/noHaveReadDataCount")
          .then(res => {
            app.count = res.data;
          });
    }
  },
  created() {
    this.userName = window.localStorage.getItem("userName");
    this.noReadMsg()
  }
};
</script>

<style>
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
#navMenus .el-badge__content.is-fixed{
  top:11px;
  line-height: 13px;
  padding: 0px 3px;
  height: 13px;
}
</style>