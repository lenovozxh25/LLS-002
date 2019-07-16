<template>
  <div id="courseMage" style="background: #f5f5f7;padding-bottom: 20px;">
    <div class="courseMageTitle">
      <div>
        <div>课程管理</div>
        <ul>
          <li>贴合知识点</li>
          <li>课程执行力</li>
          <li>课程核心和主要内容</li>
        </ul>
      </div>
    </div>
    <div class="courseMageMain">
      <!-- <el-button @click="customTailor">专业定制</el-button> -->
      <el-tabs type="border-card" v-model="editableTabsValue">
        <el-tab-pane
          v-for="item in editableTabs"
          :label="item.name"
          :name="item.name"
          :key="item.id"
        >
          <ul>
            <li v-for="items in item.majorCustomAdapterList" :key="items.id" class="master">
              <div class="left_main">
                <div class="introduce_title">
                  <img src="https://img.alicdn.com/tfs/TB1vPp1rScqBKNjSZFgXXX_kXXa-560-240.png" alt />
                  <span class="edits">
                    <i class="el-icon-edit-outline"></i>
                  </span>
                  <span class="delete">
                    <i class="el-icon-delete"></i>
                  </span>
                </div>
                <div class="major_item">
                  <h4>{{items.name}}</h4>
                  <span>{{items.majorDescribe}}</span>
                  <div class="describe">
                    13门课，57个小时， 567在学
                    <p>所学校已定制</p>
                  </div>
                  <div>
                    <el-button
                      plain
                    >新增课程</el-button>
                    <el-button plain style="margin-left:23px">内容维护</el-button>
                  </div>
                </div>
              </div>
              <ul class="right_courses">
                <li
                  v-for="itemChildList in items.majorCustomItemTreeAdapterList"
                  :key="itemChildList.id"
                >
                  <ul class="course">
                    <li class="course_title">{{itemChildList.name}}</li>
                    <li
                      class="course_item"
                      v-for="(i ,index) in itemChildList.childList"
                      :key="index"
                    >{{i.name}}</li>
                    <template>
                      <li style="margin-top: 10px;">
                        <el-input placeholder="添加课程" v-model="input2"> 
                          <el-button slot="append"  @click="insertCourse(itemChildList.id,0,input2)">添加</el-button>
                        </el-input>
                      </li>
                      </template>
                  </ul>
                </li>
                  <template>
                    <li style="width:190px">
                      <el-input placeholder="添加学期" v-model="input3">
                        <el-button slot="append" >添加</el-button>
                      </el-input>
                    </li>
               </template>
              </ul>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "courseManagement",
  data() {
    return {
      input2:'',
      input3:'',
      editableTabsValue: "大前端",
      editableTabs: null, //专业分类
      majorTypeList: null //分类切换
    };
  },
  methods: {
    //新增课程
    insertCourse(customId, parentId, name) {
      // console.log(e);
      debugger;
      var app = this;
      this.$http
        .post("/product/majorCustomItem/insert", { customId, parentId, name })
        .then(function(res) {
          //debugger
          if (res) {
            alert("新增成功！");
          } else {
            alert("新增失败！");
          }
        });
    },
    //分类切换-按类型查询
    courseTabs: function(index) {
      var typeId = parseInt(index.index) + 1;
      var app = this;
      this.$http
        .get(`/product/majorCustom/listByTypeId/${typeId}`)
        .then(function(res) {
          // console.log(res.data)
          //debugger;
          app.majorTypeList = res.data;
        });
    }
  },
  mounted: function() {
    //获取专业列表
    var app = this;
    this.$http
      .get("/product/majorType/listContainCustomList")
      .then(function(res) {
        console.log(res.data);
        app.editableTabs = res.data;
      });

    this.$http.get("/product/majorCustom/listByTypeId/1").then(function(res) {
      //app.majorTypeList = res.data;
    });
  }
};
</script>

<style scoped>
.courseMageTitle {
  width: 100%;
  height: 144px;
  background: linear-gradient(60deg, rgb(247, 59, 184), rgb(224, 138, 198));
}

.courseMageTitle > div {
  width: 1100px;
  height: 144px;
  margin: 0 auto;
  background: url(../../images/back03.png) no-repeat right 0px;
  background-size: 235px 140px;
}

.courseMageTitle div div {
  min-width: 400px;
  color: #fff;
  font-size: 25px;
  margin-left: 40px;
  padding-top: 40px;
}

.courseMageTitle div ul {
  overflow: hidden;
  margin-left: 40px;
  margin-top: 10px;
}

.courseMageTitle ul li {
  float: left;
  padding-right: 10px;
  color: #fff;
  font-size: 14px;
}
.courseMageMain {
  width: 1100px;
  margin: 10px auto;
}
.master {
  overflow: hidden;
  margin-bottom: 35px;
  padding-bottom: 20px;
  padding-left: 10px;
}
.left_main,
.right_courses {
  float: left;
}
.left_main {
  width: 256px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  margin-right: 25px;
}
.introduce_title {
  position: relative;
}
.introduce_title img {
  width: 100%;
  height: 120px;
}
.edits,
.delete {
  position: absolute;
  top: 10px;
  color: white;
  font-size: 24px;
}
.edits {
  left: 10px;
}
.delete {
  right: 10px;
}
.major_item {
  padding: 20px 15px 0;
  height: 230px;
}
.describe {
  font-size: 14px;
  margin-top: 5px;
  height: 112px;
}
.right_courses {
  width: 760px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.right_courses > li {
  margin-bottom: 30px;
}
.course li {
  width: 178px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-right: 10px;
}
.course .course_title {
  background: #49c0e0;
  color: white;
  border: 1px solid #49c0e0;
}
.course .course_item {
  position: relative;
  margin-top: 7px;
  border: 1px solid #49c0e0;
}
</style>
