<template>
  <div id="myPartcipation">
    <div class="mahorTitle">
      <div>
        <div>
          <span style="display:block;">我的参与</span>
          <span style="font-size:16px;">
            记录我在联想班学习的问答 反馈以及对相关系统功能等的评价
            积极参与 主动贡献 养成习惯 成长为未来社会的栋梁
          </span>
        </div>
      </div>
    </div>
    <el-tabs class="z_p_tab" type="border-card" v-model="z_p_testName" @tab-click="handleClick">
      <el-tab-pane label="我的问答" name="first">
        <el-collapse v-model="activeNames">
          <p class="major" style="height:50px;line-height:50px;overflow:hidden">
            <span class="redSquare"></span>
            <span style="margin-top:20px;">我的提问</span>
          </p>
          <el-table :data="listAll" stripe style="width: 100%">
            <el-table-column prop="subject" label="问题" width="260" show-overflow-tooltip></el-table-column>
            <el-table-column prop="question" label="问题描述" width="300" show-overflow-tooltip></el-table-column>
            <el-table-column prop="typeName" label="提问类型" width="150" show-overflow-tooltip></el-table-column>
            <el-table-column prop="proposeTime" width="200" label="发起时间"></el-table-column>
            <el-table-column label="状态">
              <template slot-scope="{row}">
                 <span v-if="!row.explanation" style="color:red">未解答</span>
                 <span v-else>已解答</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="{row}">
                <el-link type="primary" :underline="false" @click="getQuestionDetail(row.id)">
                  <i class="el-icon-tickets"></i>详情
                </el-link>
              </template>
            </el-table-column>
          </el-table>
          <div style="overflow:hidden;margin-top:30px;">
            <button style="float:left;" class="abutton" @click="shang">上一页</button>
            <button style="float:right" class="abutton" @click="xia($event)">下一页</button>
          </div>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane v-if="isShow" label="我的反馈" name="second">
        <el-collapse v-model="activeNames">
          <p class="major" style="height:50px;line-height:50px;overflow:hidden">
            <span class="redSquare"></span>
            <span style="margin-top:20px;">我的意见反馈</span>
            <span
              v-on:click="tabFeed"
              style="display:inline-block; float: right;background:#49C0E0;width:130px;height:40px;text-align:center;margin-top:5px;line-height:40px;font-size:16px;color:#fff;"
            >
              新建反馈
              <i class="el-icon-edit-outline"></i>
            </span>
          </p>
          <el-table :data="feedbackAll" stripe style="width: 100%">
            <el-table-column prop="subject" label="意见" width="260"></el-table-column>
            <el-table-column prop="typeName" label="反馈类别" width="140"></el-table-column>
            <el-table-column width="300" prop="content" label="意见说明"></el-table-column>
            <el-table-column prop="commitTime" label="发起时间" width="200"></el-table-column>
            <el-table-column label="状态">
              <template slot-scope="scope">
                    <span v-if="scope.row.isHandle == 'N'" style="color:red">未处理</span>
                    <span v-else style="color:black">已处理</span>
                  </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="{row}">
                <el-link type="primary" :underline="false" @click="getOptionsDetail(row.id)">
                  <i class="el-icon-tickets"></i>详情
                </el-link>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页效果 -->
          <el-pagination
            :current-page="page"
            style="margin-top:30px;"
            :page-size="pageSize"
            background
            layout="prev, pager, next"
            :total="nums"
            @current-change="pageClick"
            @prev-click="prevClick"
            @next-click="nextClick"
          ></el-pagination>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane v-else label="提交反馈" name="second">
        <el-collapse v-model="activeNames">
          <p class="major" style="height:50px;line-height:50px;overflow:hidden">
            <span class="redSquare"></span>
            <span style="margin-top:20px;">意见反馈</span>
            <span
              v-on:click="tabFeed"
              style="display:inline-block; float: right;background:#49C0E0;width:130px;height:40px;text-align:center;margin-top:5px;line-height:40px;font-size:16px;color:#fff;"
            >
              我的意见
              <i class="el-icon-user-solid"></i>
            </span>
          </p>
          <div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="问题分类">
                <el-select v-model="form.region">
                  <el-option label="用户体验" value="用户体验"></el-option>
                  <el-option label="产品BUG" value="产品BUG"></el-option>
                  <el-option label="功能建议" value="功能建议"></el-option>
                  <el-option label="问卷建议" value="问卷建议"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="意见">
                <el-input placeholder="请在这输入你的问题建议，60个字符之内" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="问题说明">
                <el-input
                  class="z_min_textarea"
                  placeholder="问题北京条件等详细信息"
                  type="textarea"
                  v-model="form.desc"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="subComments" type="primary">立即提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>

    <!-- 回复对话框 -->
    <el-dialog
      class="dialog"
      title="解答详情"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <h4 style="background:#e7f2f4">
        <span class="span1">问题：</span>
        <span style="color:#4fc1dc">{{questionDetail.subject}}</span>
      </h4>
      <h4 style="background:#f5f5f5">
        <span class="span1">问题说明：</span>
        <span>{{questionDetail.question}}</span>
      </h4>
      <h4>
        <span class="span1">解答老师：</span>
        <span>{{questionDetail.sendTeacherId}}</span>

        <span class="span1" style="margin-left:100px">解答时间：</span>
        <span>{{questionDetail.explanationTime}}</span>
      </h4>
      <h4>
        <span class="span1">问题标签：</span>
        <span>
          <el-badge :value="questionDetail.typeName" class="item" style="opacity:0.5"></el-badge>
        </span>
      </h4>
      <h4>
        <span class="span1" style="float:left">答案详情：</span>
        <template>
          <span
            style="width:89%;height:120px;border:1px solid #EBEEF5;border-radius:4px;text-indent:2em "
          >{{questionDetail.explanation}}</span>
        </template>
      </h4>
      <span slot="footer" class="dialog-footer">
        <template>
          <el-button type="primary" @click="dialogVisible=false">确定</el-button>
        </template>
      </span>
    </el-dialog>
<!-- 意见处理结果查看 -->
    <el-dialog
      class="dialog"
      title="意见反馈处理:"
      :visible.sync="drawer"
      width="60%"
      :before-close="handleClose"
    >
      <h4 style="background:#e7f2f4">
        <span class="span1">意见：</span>
        <span style="color:#4fc1dc">{{optionsResult.subject}}</span>
      </h4>
      <h4 style="background:#f5f5f5">
        <span class="span1">意见说明：</span>
        <span>{{optionsResult.content}}</span>
      </h4>
      <h4>
        <span class="span1">处理人：</span>
        <span style="font-weight:300">{{optionsResult.handleUserName}}</span>

        <span class="span1" style="margin-left:100px">处理时间：</span>
        <span style="font-weight:300">{{optionsResult.handleTime}}</span>
      </h4>
      <h4>
        <span class="span1">意见类型：</span>
        <span>
          <el-badge :value="optionsResult.typeName" class="item" style="opacity:0.5"></el-badge>
        </span>
      </h4>
      <h4>
        <span class="span1" style="float:left">处理结果：</span>
        <template>
          <span
            style="width:89%;height:120px;border:1px solid #EBEEF5;border-radius:4px;text-indent:2em "
          >{{optionsResult.handleResult}}</span>
        </template>
      </h4>
      <span slot="footer" class="dialog-footer">
        <el-button @click="drawer = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "myPartcipation",
  data() {
    return {
      //反馈的数据
      page: 1, //当前第几页
      pageSize: 10, //反馈每页的数据条数
      nums: null, //反馈总消息数
      pages: null, //反馈总页数
      //问答的数据
      apage: 1, //当前第几页
      apageSize: 5, //反馈每页的数据条数
      anums: null, //反馈总消息数
      apages: null, //反馈总页数
      isShow: true,
      activeNames: ["1", "2", "3", "4", "5"],
      z_p_testName: "first",
      listAll: [], //我的问答相关数据
      feedbackAll: [], //我的反馈建议相关数据
      form: {
        name: "",
        region: "用户体验",
        desc: ""
      },
      dialogVisible: false,
      questionDetail: [],      //问题详情
      textarea: "",         
      optionsResult:[],   //处理结果
      drawer:false
    };
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    tabFeed(e) {
      var userId = window.localStorage.getItem("userId");
      // console.log(userId);
      if (this.isShow) {
        e.target.innerHTML =
          "我的意见<i data-v-294cbca4='' class='el-icon-user-solid'></i>";
        this.isShow = false;
      } else {
        e.target.innerHTML =
          "新建反馈<i data-v-294cbca4='' class='el-icon-edit-outline'></i>";
        this.isShow = true;
      }
      //我的反馈相关数据
      this.page = this.pages;
      this.getOpinions();
    },
    subComments() {
      if (
        this.form.desc !== "" &&
        this.form.name !== "" &&
        this.form.region !== ""
      ) {
        this.$http
          .post(`/business/opinionsSuggestions/submitComments`, {
            content: this.form.desc,
            subject: this.form.name,
            typeName: this.form.region
          })
          .then(res => {
            alert("反馈提交成功");
            (this.form.desc = ""),
              (this.form.name = ""),
              (this.form.region = "用户体验");
          });
      } else {
        alert("输入内容不能为空");
      }
    },

    //获取反馈建议
    getOpinions() {
      var userId = window.localStorage.getItem("userId");
      //我的反馈相关数据
      this.$http
        .post(`/business/opinionsSuggestions/page`, {
          page: this.page,
          pageSize: this.pageSize,
          params: {}
        })
        .then(res => {
          // console.log(res);
          // debugger
          this.feedbackAll = res.data.data;
          this.nums = res.data.recordsTotal;
          this.pages = Math.ceil(this.nums / this.pageSize);
        });
    },
    //获取问答数据
    getAsk() {
      var userId = window.localStorage.getItem("userId");
      //我的反馈相关数据
      this.$http
        .post(`/business/studentQuestion/page`, {
          page: this.apage,
          pageSize: this.apageSize,
          params: {}
        })
        .then(res => {
          console.log(res);
          // debugger
          this.listAll = res.data.data;
          this.anums = res.data.recordsTotal;
          this.apages = Math.ceil(this.anums / this.apageSize);
        });
    },

    // 反馈建议分页效果
    pageClick(event) {
      this.page = event;
      this.getOpinions();
    },
    //查看意见详情处理结果
    getOptionsDetail(id){
      this.drawer=true;
      var app = this;
      this.$http.get(`/business/opinionsSuggestions/detail/${id}`).then(res => {
        console.log(res.data);
        app.optionsResult=res.data;
      });
    },
    //点击上一页
    prevClick() {
      this.page--;
      this.getOpinions();
    },
    //点击下一页
    nextClick() {
      this.page++;
      this.getOpinions();
    },

    //我的问答分页效果
    //点击上一页
    shang() {
      if (this.apage == 1) {
        alert("已经到了第一页");
      }
      if (this.apage > 1) {
        this.apage--;
        this.getAsk();
      }
    },
    //点击下一页
    xia() {
      if (this.apage == this.apages) {
        alert("已经到了最后一页");
      }
      if (this.apage < this.apages) {
        this.apage++;
        this.getAsk();
      }
    },
    //问题详情-查看解答详情
    getQuestionDetail(id) {
      this.dialogVisible = true;
      var app = this;
      this.$http.get(`/business/studentQuestion/detail/${id}`).then(res => {
        app.questionDetail = res.data;
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  created() {
    this.getOpinions();
    this.getAsk();
  }
};
</script>

<style scoped>
.abutton {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
ul li {
  list-style: none;
}
#myPartcipation .el-collapse-item .el-collapse-item__header {
  background: skyblue;
  padding-left: 50px;
  color: white;
  font-size: 23px;
}

#myPartcipation a:hover {
  color: skyblue;
}

#myPartcipation .el-main {
  text-align: left;
  /*line-height: 30px;*/
}
#myPartcipation .el-collapse {
  width: 1100px;
  margin: auto;
}
#myPartcipation .el-collapse-item__content {
  padding-left: 50px;
  padding-top: 20px;
}
#myPartcipation .mahorTitle {
  text-align: center;
  width: 100%;
  height: 144px;
  background: #f16179;
}
#myPartcipation .mahorTitle > div {
  width: 1100px;
  height: 144px;
  margin: auto;
  background: url(../../images/download.png) no-repeat right -20px;
  padding: 45px 50px 0px 110px;
}
#myPartcipation .mahorTitle div div {
  min-width: 400px;
  color: #fff;
  font-size: 25px;
}
#myPartcipation .mahorTitle div ul {
  overflow: hidden;
  /*margin-top: 10px;*/
}
#myPartcipation .mahorTitle ul li {
  float: left;
  padding-right: 10px;
  color: #fff;
  font-size: 14px;
}
#myPartcipation .major {
  overflow: hidden;
  /*height:16px;*/
  font-family: HiraginoSansGB-W6;
  color: rgba(64, 64, 64, 1);
  margin-bottom: 10px;
}
.top {
  margin: 30px 0;
}
.major span {
  float: left;
  height: 18px;
  line-height: 1;
}
.redSquare {
  margin-top: 20px;
  width: 6px;
  /*height:16px;*/
  background: skyblue;
  margin-right: 10px;
}

/* ------------------------------- */
.z_p_title {
  background: #e4e9ec;
  height: 24px;
  color: #303030;
  font-size: 16px;
  line-height: 24px;
  padding-left: 122px;
}
.z_p_test {
  margin-right: 20px;
}
.el-tabs /deep/ .el-tabs__nav {
  margin-left: 140px;
}

.mydiv {
  height: 40px;
  margin-bottom: 20px;
}
.mydiv div {
  width: 20%;
  height: 40px;
  float: left;
  line-height: 40px;
}
.mydiv .div1 {
  margin-left: 24%;
}
.mydiv span {
  font-size: 26px;
  font-style: oblique;
}

.el-form /deep/ .el-textarea__inner {
  height: 300px;
}

.dialog span {
  display: inline-block;
}
.dialog h4 {
  padding: 10px 0;
  margin: 5px 0;
}
.span1 {
  width: 80px;
  text-align: right;
}
</style>