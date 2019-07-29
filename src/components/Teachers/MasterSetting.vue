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
        <div style="margin-bottom:20px">
          <el-row>
            <el-button type="info" size="medium" @click="addRowCourse">添加课程</el-button>
            <el-button size="medium" :disabled="selectionData.length==0" @click="deleteCourse">删除课程</el-button>
          </el-row>
        </div>
        <template>
          <el-table
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            @cell-mouse-enter="handleEdit"
            @cell-mouse-leave="handelCancel"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="序号" width="60" type="index" :index="indexMethod"></el-table-column>
            <el-table-column prop="name" label="课程名称" width="250" @focus="handleEdit">
              <template slot-scope="{row}">
                <span>
                  <el-input
                    v-model="row.name"
                    placeholder="输入课程名称"
                    @keyup.enter.native="saveCustomCourse(row.name,row.id)"
                  ></el-input>
                </span>
                <!-- <span v-else>{{row.name}}</span> -->
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="150" :formatter="dateFormat"></el-table-column>
            <el-table-column prop="updateTime" label="最后更新时间" width="150" :formatter="dateFormat"></el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button @click="handleOpens(scope.row.id)">上传资源</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
    <!-- 新增内容框 -->
    <el-dialog
      title="新增课程资源"
      :visible.sync="dialogVisible"
      width="76%"
      :before-close="handleCloses"
      style="margin:0"
    >
      <template>
        <el-table :data="customCourseList" style="width: 100%">
          <el-table-column label="序号" width="60" type="index" :index="indexMethod"></el-table-column>
          <el-table-column prop="typeId" label="文件类型" width="120"></el-table-column>
          <el-table-column prop="name" label="文件名称" width="180"></el-table-column>
          <el-table-column prop="fileAuthor" label="作者" width="120"></el-table-column>
          <el-table-column prop="updateTime" label="最后更新时间" :formatter="dateFormat" width="150"></el-table-column>
          <el-table-column prop="userName" label="上传人姓名" width="100"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link type="primary" :underline="false" @click="editSourseDetail(scope.row.id)">属性</el-link>|
              <el-link type="primary" :underline="false">删除</el-link>|
              <el-link type="primary" :underline="false">下载</el-link>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div style="margin-bottom:20px;margin-top:20px">
        <template>
          资源类型：
          <el-radio-group v-model="radioSel" @change="radioChange">
            <el-radio :label="item.id" v-for="item in options" :key="item.id">{{item.name}}</el-radio>
          </el-radio-group>
        </template>
      </div>
      <div style="overflow:hidden">
        <span style="float:left">上传文件：</span>
        <!-- <input type="file" id="file" name="file" required @change="onChangeFile($event)" /> -->

        <el-upload
          class="upload-demo"
          drag
          action="doUpload"
          :before-upload="submitCourse"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </el-upload>
      </div>
      <!-- <div style="margin:15px 0">
        上传图片：
        <input
          type="file"
          id="showImageFile"
          name="showImageFile"
          required
          @change="onChangeImgFile($event)"
        />
      </div>-->
      <!-- <div>
        资源名称：
        <el-input type="text" :value="fileName" placeholder="资源名称" v-model="fileName"></el-input>
      </div>
      <div style="margin:15px 0">
        作者：
        <el-input type="text" placeholder="作者" v-model="fileAuthor"></el-input>
      </div>
      -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 属性下得详情 -->
    <el-dialog title="编辑属性" :visible.sync="detailVisible" width="35%" :before-close="handleCloses">
      <div>
        <div>
          作者：
          <el-input placeholder="请输入内容" v-model="fileAuthor" :value="fileAuthor"></el-input>
        </div>
        <div style="margin:20px 0px">
          描述：
          <el-input type="textarea" rows="4" placeholder="请输入内容" v-model="shortDescVal"></el-input>
        </div>
        <div>
          内容：
          <el-input type="textarea" rows="4" placeholder="请输入内容"></el-input>
        </div>
        <div style="margin-top:20px">
          上传图片：
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="detailVisible = false">取 消</el-button>
        <el-button type="primary" @click="detailVisible = false">确 定</el-button>
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
      showEdit: [],
      dialogVisible: false,
      detailVisible: false, //属性弹窗
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
      newDelArr: [],
      options: [], //获取资源类型
      radioSel: 1, //类型选项
      customCourseId: 1,
      customCourseList: [],
      imageUrl: '',
      editDetail:[]
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
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
      // formData.append("showImageFile", this.imgFile);
      this.$http
        .post(
          `/product/customMaterial/uploadFile?customCourseId=${this.customCourseId}&typeId=${this.typeId}`,
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
          // console.log(res.data);
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
    saveCustomCourse(name, id) {
      var itemId = this.itemChildId;
      debugger;
      var app = this;
      if(name==null){
        this.$message.error("请填写课程名称！");
        return;
      }else{
      this.$http
        .post("/product/majorCustomCourse/save", { itemId, name, id })
        .then(function(res) {
          console.log(res);
          if (res.data == "") {
            app.$message.success("保存成功！");
            app.getCustom(itemId);
          } else {
            app.$message.error("保存失败！");
          }
        });
        }
    },
    //删除课程资源
    deleteCourse() {
      var itemId = this.itemChildId;
      var delArr = this.newDelArr;
      var app = this;
      if (confirm("您确定要删除此条课程资源吗？")) {
        this.$http
          .post("/product/majorCustomCourse/deletes", delArr)
          .then(res => {
            if (res.data == true) {
              app.$message.success("删除成功！");
              app.getCustom(itemId);
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
    //增加行
    addRowCourse() {
      var list = {
        name: this.name,
        createTime: this.createTime,
        updateTime: this.updateTime
      };
      this.tableData.push(list);
    },
    //鼠标移入编辑
    handleEdit(row, column, cell, event) {
      // debugger
      this.showEdit[row.id] = true;
      this.$set(this.showEdit, row, true);
    },
    //取消编辑
    handelCancel(row, column, cell, event) {
      //sdebugger;
      // this.showEdit[row.id] = false;
      this.$set(this.showEdit, row, false);
    },
    //获取上传资源得类型
    getMaterialType() {
      var app = this;
      this.$http.get("/product/materialType/listForAble").then(res => {
        console.log(res.data);
        app.options = res.data;
      });
    },
    //选中类型id
    radioChange(typeId) {
      this.typeId = typeId;
    },

    //新增窗口关闭
    handleCloses(done) {
      done();
    },
    //上传资源按钮
    handleOpens(customCourseId) {
      this.dialogVisible = true;
      this.customCourseId = customCourseId;
      var app = this;
      this.$http
        .get(`/product/customMaterial/getListByCourseId/${customCourseId}`)
        .then(res => {
          console.log(res);
          app.customCourseList = res.data;
        });
    },
    //属性详情
    editSourseDetail(id) {
      this.detailVisible = true;
      debugger;
      var app = this;
      this.$http.get(`/product/customMaterial/detail/${id}`).then(res => {
        console.log(res.data.fileAuthor);
          app.editDetail=res.data;
          app.fileAuthor=res.data.fileAuthor;
          app.shortDescVal= res.data.shortDescVal;
          app.content= res.data.content;
      });
    },
    //图片上传
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      //修改属性详情
      updateDetail(){
        var app=this;
        this.$http.post("/product/customMaterial/update",{detailId,fileAuthor,shortDescVal,content}).then(res=>{
          console.log(res);
        })
      },
    //课程资源排序
    indexMethod(index) {
      return index + 1;
    }
  },
  created() {
    this.getMasterTree(this.$route.params.customId);
    // this.getMasterSourceTabList();
  },
  mounted() {
    this.getMaterialType();
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
