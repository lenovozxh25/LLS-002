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
      <el-tabs type="border-card" v-model="editableTabsValue">
        <el-tab-pane
          v-for="item in editableTabs"
          :label="item.name"
          :name="item.name"
          :key="item.id"
          :disabled="item.id!=2"
        >
          <ul class="ul">
            <li v-for="items in item.majorCustomAdapterList" :key="items.id" class="master">
              <template v-if="items.id==3">
                <div class="left_main">
                  <div class="introduce_title">
                    <img
                      src="https://img.alicdn.com/tfs/TB1vPp1rScqBKNjSZFgXXX_kXXa-560-240.png"
                      alt
                    />
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
                      13门课，57个小时， 567在学<br>
                      <span>所学校已定制</span>
                    </div>
                    <div>
                      <el-button plain @click="insertBtn($event)">{{pres ? "课程定制" : "保存修改"}}</el-button>
                      <el-button plain style="margin-left:23px" @click="pushChange(items.id)">内容维护</el-button>
                      <!-- <p>{{items.id}}</p> -->
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
                        :class="{shake:!pres}"
                      >
                        <span class="course_content" :title="i.name">{{i.name}}</span>
                        <span :class="{hide:pres}">
                          <i class="el-icon-error" @click="deleteCourseItem(i.id)"></i>
                        </span>
                      </li>
                      <template>
                        <li style="margin-top: 10px;" id="aaa" :class="{hide:pres}">
                          <input
                            type="text"
                            class="inputVal"
                            placeholder="添加课程"
                            :value="input2"
                            :key="itemChildList.customId"
                            @change="changeEvent($event)"
                          />
                          <button
                            class="inputBtn"
                            @click="insertCourse(itemChildList.customId,itemChildList.id,input2)"
                          >添加</button>
                        </li>
                      </template>
                    </ul>
                  </li>
                  <template>
                    <li style="width:190px" :class="{hide:pres}">
                      <input
                        type="text"
                        class="inputVal"
                        placeholder="添加学期"
                        :value="input3"
                        :key="items.customId"
                        @change="changeEvent($event)"
                      />
                      <button class="inputBtn" @click="insertCourse(items.id,0,input3)">添加</button>
                    </li>
                  </template>
                </ul>
              </template>
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
      input2: "",
      input3: "",
      pres: true,
      editableTabsValue: "移动互联",
      editableTabs: null //专业分类
    };
  },
  methods: {
    //维护跳转
    pushChange(customId) {
      // debugger
      this.$router.push({
        //核心语句
        name: "masterSetting", //跳转的路径
        params: {
          customId: customId
        }
      });
    },
    changeEvent(e) {
      //获取输入框的值
      this.input2 = e.target.value;
      this.input3 = e.target.value;
    },
    //课程定制
    insertBtn(event) {
      if (this.pres) {
        (this.pres = !this.pres),
          (event.target.textContent = "保存修改");
      } else {
        this.pres = true;
        event.target.textContent = "课程定制";
      }
    },
    //获取专业列表
    getContainCustomList: function() {
      var app = this;
      this.$http
        .get("/product/majorType/listContainCustomList")
        .then(function(res) {
          console.log(res.data);
          app.editableTabs = res.data;
        });
    },
    //新增课程
    insertCourse: function(customId, parentId, name) {
      var app = this;
      this.$http
        .post("/product/majorCustomItem/insert", { customId, parentId, name })
        .then(function(res) {
         // console.log(res)
          if (res.data=="") {
            app.getContainCustomList();
            app.$message.success("新增成功！");
            app.input3 = "";
            app.input2 = "";
          } else {
            app.$message.error("新增失败！");
          }
        });
    },
    //删除课程
    deleteCourseItem(id) {
      var app = this;
      if(confirm("确定要删除此课程吗？")){
        this.$http
          .get(`/product/majorCustomItem/delete/${id}`)
          .then(function(res) {
            if (res.data==true) {
              app.$message.success("删除成功！");
              app.getContainCustomList();
            } else {
              app.$message.error("删除失败！");
            }
          });
      }
    }
  },
  created: function() {
    this.getContainCustomList();
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
  padding: 10px 15px 0;
  height: 230px;
}
.describe {
  font-size: 14px;
  height: 80px;
  margin-top: 5px;
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
.course .course_content{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 175px;
}
.course .course_item {
  position: relative;
  margin-top: 7px;
  border: 1px solid #49c0e0;
}
.el-icon-error {
  position: absolute;
  right: -8px;
  top: -8px;
  color: red;
}
.el-icon-error:hover {
  cursor: pointer;
}

.show {
  display: block;
}
.hide {
  display: none;
}
.inputVal,
.inputBtn {
  border: none;
  height: 35px;
  float: left;
  outline: none;
}
.inputVal {
  width: 106px;
  border: 1px solid #49c0e0;
  padding-left: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.inputBtn {
  width: 60px;
  height: 39px;
  background: #49c0e0;
  color: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.inputBtn:hover {
  cursor: pointer;
}

.shake {
  animation: shake 2.0s infinite;
}
@keyframes shake {
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-2deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(0px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 1px) rotate(-2deg);
  }
  60% {
    transform: translate(-2px, -2px) rotate(0deg);
  }
  70% {
    transform: translate(2px, 1px) rotate(-2deg);
  }
  80% {
    transform: translate(-1px, -2px) rotate(1deg);
  }
  90% {
    transform: translate(2px, -1px) rotate(0deg);
  }
  100% {
    transform: translate(1px, 0px) rotate(-2deg);
  }
}

</style>
