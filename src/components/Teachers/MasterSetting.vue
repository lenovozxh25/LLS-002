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
          default-active="2"
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
              >{{itemChild.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="master_right">
        <ul class="sourceTabs">
          <li
            :class="{tabItem:true, active:item.id==cur}"
            v-for="item in sourceTabs"
            :key="item.id"
            @click="tabsClick(item.id)"
          >{{item.name}}</li>
        </ul>
        <el-button type="info" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="序号" width="80"></el-table-column>
            <el-table-column prop="name" label="资源名称" width="230"></el-table-column>
            <el-table-column prop="address" label="作者" width="80"></el-table-column>
            <el-table-column prop="address" label="上传时间" width="230"></el-table-column>
            <el-table-column prop="address" label="操作"></el-table-column>
          </el-table>
        </template>
      </div>
    </div>
    <!-- 新增内容框 -->
    <el-dialog title="新增课程资源" :visible.sync="dialogVisible" width="36%" :before-close="handleClose" style="margin:0">
      <div>
        上传文件：
        <input type="file" id="file" name="file" required @change="onChangeFile($event)"/>
      </div>
      <div style="margin:15px 0">
        上传图片：
        <input type="file" id="showImageFile" name="showImageFile" required />
      </div>
      <div>
        资源名称：
        <el-input type="text" :value="fileName" placeholder="资源名称" v-model="fileName" ></el-input>
      </div>
      <div style="margin:15px 0">
        作者：
        <el-input type="text" placeholder="作者" v-model="fileAuthor" ></el-input>
      </div>
      <div>
        简短描述：
        <el-input type="textarea" :rows="4"  v-model="shortDescVal"></el-input>
      </div>
      <div style="margin:15px 0">
        <span>资源内容:</span>
        <el-input type="textarea" :rows="4"  v-model="content"></el-input>
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
export default {
  name: "masterSetting",
  data() {
    return {
      dialogVisible: false,
      cur: 1,
      masterTree: [],
      sourceTabs: [],
      file:"",
      fileName:"",
      fileAuthor:"",
      shortDescVal:"",
      content:"",
      tableData: [
        {
          date: "2016",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
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
    onChangeFile(e){
        debugger
        let file=e.target.files[0];
        this.file=file;
        let index=file.name.lastIndexOf(".");
        this.fileName=file.name.substring(0,index);
    },
    //新增课程资源
    submitCourse(){
        var app=this;
        debugger
        this.dialogVisible = false;
        var formData = new window.FormData();
        let config = {headers: {"Content-Type": "multipart/form-data"}}
        formData.append("file", this.file)
        this.$http.post(`/product/customMaterial/save?customItemId=${this.itemID}&typeId=${this.selectValue}&name=${this.fileName}&shortDescribe=${this.shortDescVal}&fileAuthor=${this.fileAuthor}&content=${this.content}`, formData, config).then((res) => {
            if(res.data==""){
                app.$message.success("新增成功！")
            }else{
                app.$message.error("新增失败！")
            }
        }) // 发送请求
    },
    //tabs切换
    tabsClick(index) {
      this.cur = index;
    },
    //获取资源类型接口
    getMasterSourceTabList() {
      var app = this;
      this.$http.get("/product/materialType/listForAble").then(function(res) {
        console.log(res.data);
        app.sourceTabs = res.data;
      });
    },
    //获取学期列表
    getMasterTree(customId) {
      var app = this;
      this.$http
        .get(`/product/majorCustomItem/listByCustomIdForAble/${customId}`)
        .then(function(res) {
          console.log(res.data);
          app.masterTree = res.data;
        });
    },

    //新增窗口关闭
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
  created() {
    this.getMasterTree(this.$route.params.customId);
    this.getMasterSourceTabList();
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
  padding: 10px 20px;
  height: 1000px;
}
.master_left {
  width: 256px;
}
.master_right {
  width: 750px;
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
  background-color: #909399;
  color: white;
}
</style>
