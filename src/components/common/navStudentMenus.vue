<template>

  <div id="navStuMenus">
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
            <el-menu-item index="1">我的专业</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的课程</template>
               <el-submenu :index="'2-'+xiabiao" v-for='(item,xiabiao) in MajorCustomData.majorCustomItemTreeAdapterList' :key='xiabiao'>
                  <template slot="title">{{item.name}}</template>                  
                  <el-menu-item @click="toMyCourseList(itemMajor.id,itemMajor.name)" :data-a="itemMajor.id" index="2-1-1" v-for='(itemMajor,index) in item.childList' :key='index'>
                    {{itemMajor.name}}
                  </el-menu-item>
              </el-submenu>
              
            </el-submenu>
            <el-menu-item index="3">我的成长</el-menu-item>
            <el-menu-item index="4">我的参与</el-menu-item>
            <el-menu-item index="5">我的考试</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <ul>
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
      MajorCustomData:'',
      count:0
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(keyPath);
      //debugger
      switch (key) {
        case "1":
          this.$router.push("/student/myStudentMajor");
          break;
        // case "2":
        //   this.$router.push("/student/myStudentCourse");
        //   break;
        case "3":
          this.$router.push("/student/Mygrowup");
          break;
        case "4":
          this.$router.push("/student/Myparticipation");
          break;
        case "5":
          this.$router.push("/student/Mytest");
          break;
      }
    },
    mymessage() {
      this.$router.push("/student/Mymessage");
    },
    myNews() {
      this.$router.push("/student/Mynews");
    },
    onlineAsk() {
      this.$router.push("/student/onlineAsk");
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
    //获取该学生的专业
			getMajorCustom(userId){
				var app = this;
				this.$http
					.get(`/product/majorCustom/getMajorCustomByUser/${userId}`)
					.then(function(res) {
						app.MajorCustomData=res.data[0];
						// console.log(app.MajorCustomData.majorCustomItemTreeAdapterList)
					});
			},
    //未读消息
    noReadMsg() {
      var app = this;
      this.$http
        .get("/message/sysMessageReading/noHaveReadDataCount")
        .then(res => {
          app.count = res.data;
        });
    },
    
      toMyCourseList(itemId,name){    
				 this.$router.push({  
					 name:'myStudentCourseList',
					//  path:'/teacher/MyCourseList',
					 params:{
							 itemId:itemId,
							 name:name
					 }
         })
        //  console.log(itemId)
      }
  },
  created() {
    this.userName = window.localStorage.getItem("userName");
    this.userId = window.localStorage.getItem("userId");
    this.getMajorCustom(this.userId);
    this.noReadMsg();
  }


};
</script>

<style>
a{
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
  height: 100%;
  display: block;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.ask_title {
  background: #49c0e0;
  font-size: 14px;
  color: white;
  padding: 15px 10px;
  margin: 0px 5px 0px 10px;
}
.ask_title:hover {
  cursor: pointer;
}

#navStuMenus .el-badge__content.is-fixed {
  top: 11px;
  line-height: 13px;
  padding: 0px 3px;
  height: 13px;
}
</style>