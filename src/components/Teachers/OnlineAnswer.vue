<template>
  <div id="onlineAnswer" style="background: #f5f5f7;padding-bottom: 20px;">
    <div class="onlineAsk_title">
      <div>
        <div>在线解答</div>
        <ul>
          <li>记录问题数据</li>
          <li>知识点问答</li>
          <li>在线提问答疑</li>
        </ul>
      </div>
    </div>
    <div class="onlineAsk_main">
      <!-- 问题库 -->
      <p class="ask top">
        <span class="redSquare"></span>
        <span>问题库</span>
      </p>
      <div class="ask_content">
        <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="已回复提问">
            <template>
              <el-table :data="filtersReplied" style="width: 100%">
                <el-table-column prop="subject" label="问题" width="540"></el-table-column>
                <el-table-column prop="proposeTime" label="发起时间" width="220"></el-table-column>
                <el-table-column prop="isSolution" label="状态" width="120">
                  <template slot-scope="scope">
                    <span v-if="scope.row.explanation != ''" style="color:black">已解答</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-link type="primary" @click="getStuQuestionDetail(scope.row.id)">
                      <i class="el-icon-document"></i>详情
                    </el-link>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-tab-pane>
          <el-tab-pane label="未回复提问">
            <template>
              <el-table :data="filtersNoReply" style="width: 100%">
                <el-table-column prop="subject" label="问题" width="540"></el-table-column>
                <el-table-column prop="proposeTime" label="发起时间" width="220"></el-table-column>
                <el-table-column prop="isSolution" label="状态" width="120">
                  <template slot-scope="scope">
                    <span v-if="!scope.row.explanation" style="color:red">未解答</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-link type="primary" @click="getStuQuestionDetail(scope.row.id)">
                      <i class="el-icon-s-comment"></i>回复
                    </el-link>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-tab-pane>
          <el-pagination
            style="float:right"
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
            :current-page="1"
            @current-change="current_change"
          ></el-pagination>
        </el-tabs>
      </div>
      <el-divider></el-divider>
      <!-- 意见反馈 -->
      <p class="ask top">
        <span class="redSquare"></span>
        <span>意见反馈</span>
      </p>
      <div class="ask_content">
        <el-tabs type="border-card">
          <el-tab-pane label="意见处理">
            <template>
              <el-table :data="opinionsList" style="width: 100%">
                <el-table-column prop="subject" label="意见" width="400"></el-table-column>
                <el-table-column prop="typeName" label="意见类型" width="200"></el-table-column>
                <el-table-column prop="commitTime" label="发起时间" width="200"></el-table-column>
                <el-table-column prop="isHandle" label="状态" width="120" >
                  <template slot-scope="scope">
                    <span v-if="scope.row.isHandle == 'N'" style="color:red">未处理</span>
                    <span v-else style="color:black">已处理</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <span v-if="scope.row.isHandle =='N'">
                      <el-link type="primary" @click="opinionProcessing(scope.row.id)">
                      <i class="el-icon-edit-outline"></i>处理
                      </el-link>
                    </span>
                    <span v-else>
                      <el-link type="primary" :underline="false" @click="opinionProcessing(scope.row.id)">
                      <i class="el-icon-view"></i>查看
                      </el-link>
                    </span>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-tab-pane>
          <el-pagination
            style="float:right"
            background
            layout="prev, pager, next"
            :total="totalLen"
            :page-size="pageSize"
            :current-page.sync="currentPage"
            @current-change="current_changeOpt"
          ></el-pagination>
        </el-tabs>
      </div>
    </div>
    <!-- 回复对话框 -->
    <el-dialog
      class="dialog"
      title="回复在线提问"
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
        <span class="span1">提问人：</span>
        <span>{{questionDetail.proposeStudentId}}</span>

        <span class="span1" style="margin-left:100px">提问时间：</span>
        <span>{{questionDetail.proposeTime}}</span>
      </h4>
      <h4>
        <span class="span1">问题标签：</span>
        <span>
          <el-badge :value="questionDetail.typeName" class="item" style="opacity:0.5"></el-badge>
        </span>
      </h4>
      <h4>
        <span class="span1" style="float:left">回复答案：</span>
        <template v-if="questionDetail.explanation">
          <span
            style="width:89%;height:120px;border:1px solid #EBEEF5;border-radius:4px;text-indent:2em "
          >{{questionDetail.explanation}}</span>
        </template>
        <template v-else>
          <span style="width:89%">
            <el-input type="textarea" :rows="6" placeholder="回复答案" v-model="textarea"></el-input>
          </span>
        </template>
      </h4>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <template v-if="questionDetail.explanation">
          <el-button type="primary" @click="dialogVisible=false">确定</el-button>
        </template>
        <template v-else>
          <el-button type="primary" @click="submitAnswer(questionDetail.id,textarea)">提交</el-button>
        </template>
      </span>
    </el-dialog>
    <!-- 意见处理 -->
    <el-dialog
      class="dialog"
      title="意见反馈处理:"
      :visible.sync="drawer"
      width="60%"
      :before-close="handleClose"
    >
      <h4 style="background:#e7f2f4">
        <span class="span1">意见：</span>
        <span style="color:#4fc1dc">{{optionsDetail.subject}}</span>
      </h4>
      <h4 style="background:#f5f5f5">
        <span class="span1">意见说明：</span>
        <span>{{optionsDetail.content}}</span>
      </h4>
      <h4>
        <span class="span1">反馈人：</span>
        <span>{{optionsDetail.commitUserName}}</span>

        <span class="span1" style="margin-left:100px">反馈时间：</span>
        <span>{{optionsDetail.commitTime}}</span>
      </h4>
      <h4>
        <span class="span1">意见类型：</span>
        <span>
          <el-badge :value="optionsDetail.typeName" class="item" style="opacity:0.5"></el-badge>
        </span>
      </h4>
      <h4>
        <span class="span1" style="float:left">反馈处理：</span>
        <template v-if="optionsDetail.handleResult">
          <span
            style="width:89%;height:120px;border:1px solid #EBEEF5;border-radius:4px;text-indent:2em "
          >{{optionsDetail.handleResult}}</span>
        </template>
        <template v-else>
          <span style="width:89%">
            <el-input type="textarea" :rows="6" placeholder="提交反馈" v-model="textareaOpt"></el-input>
          </span>
        </template>
      </h4>
      <span slot="footer" class="dialog-footer">
        <template>
            <el-button  v-if="optionsDetail.isHandle=='Y'" @click="drawer = false">确 定</el-button>
            <span v-else>
              <el-button @click="drawer = false">取 消</el-button>
               <el-button type="primary" @click="submitOptions(optionsDetail.id,textareaOpt)">提交</el-button>
            </span>
           
        </template>
        
          
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "onlineAnswer",
  data() {
    return {
      activeName: "1", //
      textarea: "",
      tableData: [], //表格数据
      dialogVisible: false,
      questionDetail: {}, //问题详情
      total: 0,
      currentPage: 1,
      pageSize: 10,
      opinionsList: [], //意见反馈列表
      totalLen: 0,
      drawer: false,
      optionsDetail:{},
      textareaOpt:""
    };
  },
  methods: {
    //未回复和已回复
    handleClick(tab, event) {
      this.getStuQuestionList(this.currentPage, this.pageSize);
    },
    //问题列表
    getStuQuestionList(page, pageSize, params) {
      var app = this;
      this.$http
        .post("/business/studentQuestion/page", { page, pageSize, params })
        .then(res => {
          app.tableData = res.data.data;
          app.total = res.data.recordsTotal;
        });
    },
    //问题详情
    getStuQuestionDetail(id) {
      this.dialogVisible = true;
      var app = this;
      this.$http.get(`/business/studentQuestion/detail/${id}`).then(res => {
        console.log(res.data);
        app.questionDetail = res.data;
      });
    },
    //提交答案
    submitAnswer(id, explanation) {

      //this.dialogVisible = false;
      debugger
      var app = this;
      this.$http
        .post("/business/studentQuestion/explainQuestion", { id, explanation })
        .then(res => {
          if (res.data == "") {
            app.$message.success("提交成功！");
            app.textarea = "";
            app.getStuQuestionList(this.currentPage, this.pageSize);
          } else {
            app.$message.error("提交失败");
          }
        });
    },
    //获取意见反馈列表
    getOpinionsSuggestions(page,pageSize,params) {
      var app = this;
      this.$http.post("/business/opinionsSuggestions/pageAll",{page,pageSize,params}).then(res => {
        console.log(res.data);
        app.opinionsList = res.data.data;
        app.totalLen = res.data.recordsTotal;
      });
    },
    //意见处理详情
    opinionProcessing(id) {
      this.drawer = true;
      var app = this;
      this.$http.get(`/business/opinionsSuggestions/detail/${id}`).then(res => {
        console.log(res.data);
        app.optionsDetail=res.data;
      });
    },
    //意见处理提交
    submitOptions(id,handleResult){
      debugger
        var app=this;
        if(handleResult){
          this.$http.post("/business/opinionsSuggestions/examineComments",{id,handleResult}).then(res => {
          console.log(res);
          if(res.data==""){
            app.$message.success("提交反馈成功");
            app.textareaOpt="";
            app.drawer=false;
            app.getOpinionsSuggestions(app.currentPage,10)
          }else{
            app.$message.error("提交失败，请重试！")
          }
        });
      }else{
        this.$message.info("请进行意见反馈处理后再提交！")
      }
    },
    //分页
    current_change(currentPage) {
      //debugger
      this.currentPage = currentPage;
      this.getStuQuestionList(this.currentPage, this.pageSize);
    },
    current_changeOpt(currentPage) {
   //   debugger
      this.currentPage = currentPage;
      this.getOpinionsSuggestions(this.currentPage, this.pageSize);
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
    this.getStuQuestionList(1, 10);
    this.getOpinionsSuggestions(1,10);
  },
  computed: {
    //已解答的
    filtersReplied() {
      return this.tableData.filter(function(item) {
        //debugger
        return item.explanation;
      });
    },
    //未解答的
    filtersNoReply() {
      // debugger
      return this.tableData.filter(function(item) {
        return !item.explanation;
      });
    }
  }
};
</script>
<style scoped>
.onlineAsk_title {
  width: 100%;
  height: 144px;
  background: linear-gradient(60deg, rgb(83, 186, 245), rgb(54, 164, 228));
}

.onlineAsk_title > div {
  width: 1100px;
  height: 144px;
  margin: 0 auto;
  background: url(../../images/back03.png) no-repeat right 0px;
  background-size: 235px 140px;
}

.onlineAsk_title div div {
  min-width: 400px;
  color: #fff;
  font-size: 25px;
  margin-left: 40px;
  padding-top: 40px;
}

.onlineAsk_title div ul {
  overflow: hidden;
  margin-left: 40px;
  margin-top: 10px;
}

.onlineAsk_title ul li {
  float: left;
  padding-right: 10px;
  color: #fff;
  font-size: 14px;
}
.onlineAsk_main {
  background: white;
  width: 1100px;
  margin: 10px auto;
  overflow: hidden;
  padding: 0px 10px;
}
.ask {
  overflow: hidden;
  font-family: HiraginoSansGB-W6;
  color: rgba(64, 64, 64, 1);
  margin-bottom: 10px;
}
.top {
  margin: 30px 0;
}
.ask span {
  float: left;
  height: 24px;
}
.redSquare {
  width: 6px;
  background: skyblue;
  margin-right: 10px;
}
.ask_content {
  padding: 0px 20px;
  margin-bottom: 50px;
}
.ask_content > div {
  font-size: 14px;
  margin: 15px 0px;
}
.ask_content > div span {
  color: red;
}
#editor {
  height: 200px !important;
}
.text_box > div {
  height: auto !important;
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
