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
        <el-menu default-active="0-0" :unique-opened="true" class="el-menu-vertical-demo">
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
          <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="序号" width="60" type="index" :index="indexMethod"></el-table-column>
            <el-table-column prop="name" label="课程名称" width="270" type="index">
              <template slot-scope="{$index,row}">
                <div style="display:inline-block;width:90%">
                  <span v-if="showEdit[$index]">
                    <el-input
                      required
                      v-model="row.name"
                      placeholder="输入课程名称"
                      @keyup.enter.native="saveCustomCourse(row.name,row.id)"
                    ></el-input>
                  </span>
                  <span v-if="!showEdit[$index]">{{row.name}}</span>
                </div>
                <div style="display:inline-block">
                  <i
                    id="edit"
                    class="el-icon-edit"
                    @click="handleEdit($index,row)"
                    v-if="!showBtn[row.id]"
                  ></i>
                  <i
                    id="check"
                    class="el-icon-check"
                    @click="handelCancel($index,row)"
                    v-if="showBtn[row.id]"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="140" :formatter="dateFormat"></el-table-column>
            <el-table-column prop="updateTime" label="最后更新时间" width="140" :formatter="dateFormat"></el-table-column>
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
        <el-table :data="customCourseList" style="width: 100%" height="350">
          <el-table-column label="序号" width="60" type="index" :index="indexMethod"></el-table-column>
          <el-table-column prop="typeId" label="文件类型" width="120"></el-table-column>
          <el-table-column prop="fileName" label="文件名称" width="220">
            <!-- <template slot-scope="scope">
              <div>{{scope.row.fileUrl.substr(scope.row.fileUrl.lastIndexOf("\\")+1)}}</div>
            </template> -->
          </el-table-column>
          <el-table-column prop="fileAuthor" label="作者" width="120"></el-table-column>
          <el-table-column prop="updateTime" label="最后更新时间" :formatter="dateFormat" width="150"></el-table-column>
          <el-table-column prop="userName" label="上传人姓名" width="100"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link type="primary" @click="editSourseDetail(scope.row.id)">属性</el-link>
              <span class="bar">|</span>
              <el-link type="primary" @click="deleteDetail(scope.row.id)">删除</el-link>
              <span class="bar">|</span>
              <el-link type="primary" @click="downloadFile(scope.row.id)">下载</el-link>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div style="margin-bottom:20px;margin-top:20px">
        <template>
          资源类型：
          <el-radio-group v-model="typeId" @change="radioChange">
            <el-radio :label="item.id" v-for="item in options" :key="item.id">{{item.name}}</el-radio>
          </el-radio-group>
        </template>
      </div>
      <div style="overflow:hidden">
        <span style="float:left">上传文件：</span>
        <input type="file" id="file" name="file" required @change="onChangeFile($event)" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="submitCourse" type="primary">确定</el-button>
      </span>
    </el-dialog>
    <!-- 属性下得详情 -->
    <el-dialog title="编辑属性" :visible.sync="detailVisible" width="35%" :before-close="handleCloses">
      <div>
        <div style="margin-bottom:20px">
          文件名称：
          <el-input placeholder="文件名称" v-model="fileName" :value="fileName"></el-input>
        </div>
        <div>
          作者：
          <el-input placeholder="请输入内容" v-model="fileAuthor" :value="fileAuthor"></el-input>
        </div>
        <div style="margin:20px 0px">
          描述：
          <el-input
            type="textarea"
            rows="4"
            placeholder="请输入内容"
            v-model="shortDescVal"
            :value="shortDescVal"
          ></el-input>
        </div>
        <div>
          内容：
          <el-input type="textarea" rows="4" placeholder="请输入内容" :value="content" v-model="content"></el-input>
        </div>
        <div style="margin-top:20px">
          上传图片：
          <input
            type="file"
            id="showImageFile"
            name="showImageFile"
            required
            @change="onChangeImgFile($event)"
          />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="detailVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateDetail">更新</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "masterSetting",
  data() {
    return {
      pres: false,
      showEdit: [], //显示编辑框
      showBtn: [],  //编辑/保存图标切换
      row: "",      //时间格式
      index:"",      //存放编辑/保存下标
      dialogVisible: false,   //弹窗
      detailVisible: false, //属性弹窗
      masterTree: [],    //学期列表数据
      itemChildId: 1,    //课程id
      file: "",         //上传文件
      imgFile: "",      //上传图片文件
      fileName: "",       //文件名称
      fileAuthor: "",     //作者
      shortDescVal: "",   //简短描述
      content: "",        //内容
      tableData: [],      //课程资源数据
      selectionData: [],
      newDelArr: [],
      options: [], //获取资源类型
      typeId: 1, //类型选项
      customCourseId: 1,
      customCourseList: [],
      imageUrl: "",
      detailId: "" //属性详情id
    };
  },
  methods: {
    //文件上传
    onChangeFile(e) {
      let file = e.target.files[0];
      this.file = file;
      let index = file.name.lastIndexOf(".");
      this.fileName = file.name.substring(0, index);
    },
    //新增课程资源--上传文件
    submitCourse() {
      var app = this;
      var formData = new window.FormData();
      let config = { headers: { "Content-Type": "multipart/form-data" } };
      formData.append("file", this.file);
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
            app.dialogVisible = false;
          } else {
            app.$message.error("新增失败！");
          }
        }); // 发送请求
    },
    //课程分类
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
          app.itemChildId=res.data[0].childList[0].id;
          app.masterTree = res.data;
          app.getCustom(app.itemChildId)
        });
    },
    //保存课程资源
    saveCustomCourse(name, id) {
      var itemId = this.itemChildId;
      var app = this;
      if (name == null) {
        this.$message.error("请填写课程名称！");
        return;
      } else {
        this.$http
          .post("/product/majorCustomCourse/save", { itemId, name, id })
          .then(function(res) {
            if (res.data == "") {
              app.$message.success("保存成功！");
              app.showEdit[app.index] = false;
              app.showBtn[app.row.id] = false;
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
      if (confirm("您确定要删除所选课程资源吗？")) {
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
    //选择表格中行数据
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
    //点击编辑
    handleEdit(index,row) {
      this.row = row;
      this.index=index;
      this.showEdit[index] = true;
      this.$set(this.showEdit, index, true);
      this.showBtn[row.id] = true;
      this.$set(this.showBtn, row.id, true);
    },
    //保存编辑
    handelCancel(index,row) {
      this.showEdit[index] = false;
      this.showBtn[row.id] = false;
      this.saveCustomCourse(row.name, row.id);
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
          app.customCourseList = res.data;
        });
    },
    //属性详情
    editSourseDetail(id) {
     // debugger
      this.detailId = id;
      this.detailVisible = true;
      var app = this;
      this.$http.get(`/product/customMaterial/detail/${id}`).then(res => {
        app.fileName=res.data.fileName;
        app.fileAuthor = res.data.fileAuthor;
        app.shortDescVal = res.data.shortDescribe;
        app.content = res.data.content;
      });
    },
    onChangeImgFile(e) {
      let imgFile = e.target.files[0];
      this.imgFile = imgFile;
    },
    //修改属性详情
    updateDetail() {
      
      var app = this;
      var formData = new window.FormData();
      let config = { headers: { "Content-Type": "multipart/form-data" } };
      formData.append("showImageFile", this.imgFile);
      this.$http
        .post(
          `/product/customMaterial/update?id=${this.detailId}&fileName=${this.fileName}&fileAuthor=${this.fileAuthor}&shortDescribe=${this.shortDescVal}&content=${this.content}`,
          formData,
          config
        )
        .then(res => {
          if (res.data == "") {
            app.$message.success("更新成功！");
            app.detailVisible = false;
            app.handleOpens(this.customCourseId); //重新加载数据列表
            app.fileName=""
            app.fileAuthor= ""     //作者
            app.shortDescVal= "" //简短描述
            app.content= ""  
          } else {
            app.$message.error("更新失败，请重试！");
          }
        });
    },
    //删除课时资源
    deleteDetail(id) {
      var app = this;
      if (confirm("此操作将永久删除该文件, 是否继续?")) {
        this.$http.get(`/product/customMaterial/delete/${id}`).then(res => {
          app.$message.success("删除成功！");
          app.handleOpens(this.customCourseId);
        });
      } else {
        this.$message.info("已取消删除操作！");
      }
    },
    //下载课时资料
    downloadFile(id) {
      window.location.href = `http://10.119.167.182:9090/zuul/v2.0/lls/product/customMaterial/downLoadFile/${id}`;
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
.bar {
  color: #cccccc;
  margin-left: 15px;
  margin-right: 10px;
}
.hide {
  display: none;
}

.el-icon-edit,
.el-icon-check {
  margin-top: 10px;
}
.el-icon-edit:hover {
  color: #409eff;
  cursor: pointer;
}
.el-icon-check:hover {
  color: #409eff;
  cursor: pointer;
}
</style>
