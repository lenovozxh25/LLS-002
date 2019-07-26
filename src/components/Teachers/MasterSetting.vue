<template>
  <div id="masterSetting" style="background: #f5f5f7;padding-bottom: 20px;">
    <div class="masterSettingTitle">
      <div>
        <div>课程管理</div>
        <ul>
          <li>贴合知识点</li>
          <li>课程执行力</li>
          <li>课程核心和主要内容</li>
        </ul>
      </div>
    </div>
    <div class="masterMain">
      <div style="overflow:hidden;padding:10px 20px 0px;">
        <div style="float:left">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>
              <a href="/">课程定制</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>内容维护</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div style="float:right">
          <el-page-header @back="$router.go(-1)" content="上一级"></el-page-header>
        </div>
      </div>
      <div class="master_left">
        <el-menu
          default-active="0"
          :unique-opened="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu :index="`${indexs}`" v-for="(item,indexs) in masterTree" :key="item.id">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="`${indexs}-${index}`"
                v-for="(itemChild,index) in item.childList"
                :key="itemChild.id"
                :data-itemId="itemChild.id"
                @click="menuItem(itemChild.id)"
              >{{itemChild.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="master_right">
        <!-- <ul class="sourceTabs">
          <li
            :class="{tabItem:true, active:item.id==cur}"
            v-for="item in sourceTabs"
            :key="item.id"
            @click="tabsClick(item.id)"
          >{{item.name}}</li>
        </ul>-->
        <div style="margin-bottom:20px">
          <el-row>
            <el-button type="info" size="medium" @click="addRowCourse">添加课程</el-button>
            <el-button size="medium" :disabled="selectionData.length==0" @click="deleteCourse">删除课程</el-button>
          </el-row>
        </div>
        <template>
          <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="序号" width="80" type="index" :index="indexMethod"></el-table-column>
            <el-table-column prop="name" label="课程名称" width="230"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="150" :formatter="dateFormat"></el-table-column>
            <el-table-column prop="updateTime" label="最后更新时间" width="150" :formatter="dateFormat"></el-table-column>
            <el-table-column>
              <el-button @click="dialogVisible = true">上传资源</el-button>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
    <!-- 新增内容框 -->
    <el-dialog
      title="新增课程资源"
      :visible.sync="dialogVisible"
      width="36%"
      :before-close="handleCloses"
      style="margin:0"
    >
      <div>
        <el-select v-model="value" placeholder="选择资源类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        上传文件：
        <input type="file" id="file" name="file" required @change="onChangeFile($event)" />
      </div>
      <div style="margin:15px 0">
        上传图片：
        <input
          type="file"
          id="showImageFile"
          name="showImageFile"
          required
          @change="onChangeImgFile($event)"
        />
      </div>
      <div>
        资源名称：
        <el-input type="text" :value="fileName" placeholder="资源名称" v-model="fileName"></el-input>
      </div>
      <div style="margin:15px 0">
        作者：
        <el-input type="text" placeholder="作者" v-model="fileAuthor"></el-input>
      </div>
      <div>
        简短描述：
        <el-input type="textarea" :rows="4" v-model="shortDescVal"></el-input>
      </div>
      <div style="margin:15px 0">
        <span>资源内容:</span>
        <el-input type="textarea" :rows="4" v-model="content"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitCourse">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { Message } from "element-ui";
// import baseUrl from "../Teachers/components/ajax.js";
export default {
  name: "masterSetting",
  data() {
    return {
      dialogVisible: false,
      cur: 1,
      typeId: 1,
      masterTree: [],
      sourceTabs: [],
      itemChildId: 1,
      file: "",
      imgFile: "",
      fileName: "",
      fileAuthor: "",
      shortDescVal: "",
      content: "",
      tableData: [],
      selectionData: [],
      newDelArr: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //文件上传
    onChangeFile(e) {
      debugger;
      let file = e.target.files[0];
      this.file = file;
      let index = file.name.lastIndexOf(".");
      this.fileName = file.name.substring(0, index);
    },
    onChangeImgFile(e) {
      let imgFile = e.target.files[0];
      this.imgFile = imgFile;
    },
    //新增课程资源
    submitCourse() {
      var app = this;
      debugger;
      this.dialogVisible = false;
      var formData = new window.FormData();
      let config = { headers: { "Content-Type": "multipart/form-data" } };
      formData.append("file", this.file);
      formData.append("showImageFile", this.imgFile);
      this.$http
        .post(
          `/product/customMaterial/save?customItemId=${this.itemChildId}&typeId=${this.typeId}&name=${this.fileName}&shortDescribe=${this.shortDescVal}&fileAuthor=${this.fileAuthor}&content=${this.content}`,
          formData,
          config
        )
        .then(res => {
          if (res.data == "") {
            app.$message.success("新增成功！");
            app.fileName = "";
            app.fileAuthor = "";
            app.shortDescVal = "";
            app.content = "";
          } else {
            app.$message.error("新增失败！");
          }
        }); // 发送请求
    },
    //tabs切换
    tabsClick(index) {
      this.cur = index;
      this.typeId = index;
      this.getCustom(this.itemChildId);
    },
    menuItem(itemChildId) {
      this.itemChildId = itemChildId;
      this.getCustom(this.itemChildId);
    },
    //时间格式处理
    dateFormat: function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return this.$moment(date).format("YYYY-MM-DD");
    },
    //通过课程节点和类型获取资源
    getCustom(itemId) {
      // debugger;
      var app = this;
      this.$http
        .get(`/product/majorCustomCourse/getListByItemId/${itemId}`)
        .then(function(res) {
          console.log(res.data);
          app.tableData = res.data;
        });
    },
    //获取学期列表
    getMasterTree(customId) {
      var app = this;
      this.$http
        .get(`/product/majorCustomItem/listByCustomIdForAble/${customId}`)
        .then(function(res) {
          app.masterTree = res.data;
        });
    },
    //保存课程资源
    saveCustomCourse(itemId, name) {
      var app = this;
      this.$http
        .post("/product/majorCustomCourse/save", { itemId, name })
        .then(function(res) {});
    },
    addRowCourse() {},
    //删除课程资源
    deleteCourse() {
      var delArr = this.newDelArr;
      var app = this;
      if (confirm("您确定要删除此条课程资源吗？")) {
        this.$http
          .post("/product/majorCustomCourse/deletes", delArr)
          .then(res => {
            if (res.data == true) {
              app.$message.success("删除成功！");
            } else {
              app.$message.error("删除失败！");
            }
          });
      }
    },
    handleSelectionChange(val) {
      //数据选项
      //console.log(val)
      var delArr = [];
      this.selectionData = val;
      this.selectionData.map(item => {
        delArr.push(item.id);
      });
      this.newDelArr = delArr;
    },
    //新增窗口关闭
    handleCloses(done) {
      done();
    },
    //课程资源排序
    indexMethod(index) {
      return index + 1;
    }
  },
  created() {
    this.getMasterTree(this.$route.params.customId);
    // this.getMasterSourceTabList();
  }
};
</script>
<style scoped>
.masterSettingTitle {
  width: 100%;
  height: 144px;
  background: linear-gradient(60deg, rgb(247, 59, 184), rgb(224, 138, 198));
}

.masterSettingTitle > div {
  width: 1100px;
  height: 144px;
  margin: 0 auto;
  background: url(../../images/back03.png) no-repeat right 0px;
  background-size: 235px 140px;
}

.masterSettingTitle div div {
  min-width: 400px;
  color: #fff;
  font-size: 25px;
  margin-left: 40px;
  padding-top: 40px;
}

.masterSettingTitle div ul {
  overflow: hidden;
  margin-left: 40px;
  margin-top: 10px;
}

.masterSettingTitle ul li {
  float: left;
  padding-right: 10px;
  color: #fff;
  font-size: 14px;
}
.masterMain {
  background: white;
  width: 1100px;
  margin: 10px auto;
  overflow: hidden;
}
.master_left,
.master_right {
  float: left;
  height: 1000px;
}
.master_left {
  padding: 10px 5px 10px 20px;
}
.master_right {
  padding: 10px 5px;
}
.master_left {
  width: 256px;
}
.master_right {
  width: 800px;
}
.master_right > .el-button {
  float: right;
  margin-bottom: 10px;
}
.sourceTabs {
  display: flex;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.tabItem {
  width: 75px;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
.tabItem:hover {
  cursor: pointer;
}
.active {
  background-color: #49c0e0;
  color: white;
}
#masterSetting .el-submenu__title i {
  color: #49c0e0;
}
.el-button--info {
  background-color: #49c0e0;
  border-color: #49c0e0;
}
.el-button--info:hover {
  opacity: 0.6;
}
</style>
