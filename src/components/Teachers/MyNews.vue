<template>
  <div id="myNews" style="background: #f5f5f7;padding-bottom: 20px;">
    <div class="myNews">
      <div>
        <div>消息中心</div>
        <ul>
          <li>记录消息通知内容</li>
          <li>展示问题状态</li>
          <li>在线提问答疑</li>
        </ul>
      </div>
    </div>
    <div class="myNews_main">
      <el-tabs type="border-card" @tab-click="tabClick" >
        <el-tab-pane v-for="(item,index) in messageTab" :key="index" :label="item" >
          <el-button type="primary" plain @click="badgeReaded" style="margin-bottom:20px">标记为已读</el-button>
          <template v-if="tableData!=''">
            <el-table border :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="35"></el-table-column>
              <!-- <el-table-column prop="id" label="序号" width="50" align="center">
              </el-table-column>-->
              <el-table-column
                type="index"
                :index="indexMethod"
                label="序号"
                width="50"
                align="center"
              ></el-table-column>
              <el-table-column prop="shortDesc" label="简短描述" width="410">
                <template slot-scope="scope">
                  <span v-if="scope.row.isRead == 'Y'">{{scope.row.shortDesc}}</span>
                  <span v-else @click="readDetailMessage(scope.row)">
                    <el-badge
                      :is-dot="scope.row.isRead == 'N'?true:false"
                      class="item"
                    ><el-link type="primary" >{{scope.row.shortDesc}}</el-link></el-badge>
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="type" label="公告/私信" width="90" align="center">
                <template slot-scope="scope">
                  <span v-if="scope.row.type == 1">公告</span>
                  <span v-else>私信</span>
                </template>
              </el-table-column>
              <el-table-column prop="receiveTime" label="接收时间" width="160"></el-table-column>
              <el-table-column prop="timingSendTime" label="发送时间" width="160"></el-table-column>
              <el-table-column prop="isRead" label="消息状态" width="80" align="center">
                <template slot-scope="scope">
                  <span v-if="scope.row.isRead == 'Y'">已读</span>
                  <span v-else>未读</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="readDetailMessage(scope.row)" type="text" size="small">阅读</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              style="float:right"
              background
              layout="prev, pager, next"
              :total="total"
              :page-size="pageSize"
              :current-page="1"
              @current-change="current_change"
            ></el-pagination>
          </template>
          <template v-else>
            <div>
              <i class="el-icon-info"></i>
              暂无消息
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 阅读详情 -->
    <el-dialog
      title="消息详情"
      :visible.sync="dialogVisible"
      width="56%"
      :before-close="handleClose"
      style="margin:0"
    >
      <div class="shortDesc">
        <div style="overflow:hidden;font-size:12px;margin-bottom:10px">
          <span style="float:right">发送时间：{{detailMessage.timingSendTime}}</span>
        </div>
        <div class="readP">
          <h4>简短描述:</h4>
          <p style="height:80px;">{{detailMessage.shortDesc}}</p>
        </div>
        <div class="readP" style="margin:20px 0">
          <h4>消息内容：</h4>
          <p style="height:160px;">{{detailMessage.content}}</p>
        </div>
        <div class="readShow" style="overflow:hidden">
          <div>
            <span style="float:left">消息发送：{{detailMessage.userName}}</span>
            <span style="float:right">接收时间：{{detailMessage.receiveTime}}</span>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "myNews",
  data() {
    return {
      messageTab: ["消息中心"],
    //  activeName: "未读消息",
      allMsg: [],
      tableData: [],
      dialogVisible: false,
      detailMessage: {},
      multipleSelection:[],
      total: undefined,
      pageSize: 10,
      currentPage: 1,
      page: 1,
      isRead: "N"
    };
  },
  created() {
    this.ReadMsgList(this.currentPage, this.pageSize);
  },
  methods: {
    tabClick(tab, event) {
      if (tab.label == "未读消息") {
        console.log("未读");
      } else if (tab.label == "已读消息") {
        console.log("已读");
      } else {
        console.log("全部");
      }
    },

    //消息列表
    ReadMsgList(page, pageSize, params) {
      //  debugger;
      var app = this;
      this.$http
        .post("/message/sysMessageReading/page", { page, pageSize, params })
        .then(res => {
          // console.log(res.data);
          app.tableData = res.data.data;
          app.pageSize = res.data.pageSize;
          app.total = res.data.recordsTotal;
          app.page = res.data.page;
        });
    },
    //指定消息详情
    readDetailMessage(row) {
      // debugger
      var app = this;
      this.dialogVisible = true;
      var readId = row.readId;
      console.log(row.readId);
      this.$http
        .get(`/message/sysMessageReading/detail/${readId}`)
        .then(res => {
          console.log(res.data);
          app.detailMessage = res.data;
        });
    },
    //标记已读
    badgeReaded(readArr) {
      var app = this;
      if (readArr.length === 0) {
        this.$message.error("请勾选要标记已读的消息");
      } else if (confirm("您确定要标记为已读吗？")) {
        this.$http
          .post("/message/sysMessageReading/updateIsReads", readArr)
          .then(() => {
            app.$message.success("已标记为已读");
            app.ReadMsgList(1, 10);
          });
      }
    },
    handleSelectionChange(val) {
       this.multipleSelection = val;
        console.log(this.multipleSelection)
        this.multipleSelection.forEach((item ,index)=>{
            console.log(index)
        })
      },
      //关闭模态框
    handleClose() {
      this.dialogVisible = false;
      this.ReadMsgList(this.currentPage, this.pageSize);
    },
    //分页
    current_change(currentPage) {
      // debugger
      this.currentPage = currentPage;
      this.ReadMsgList(this.currentPage, this.pageSize);
    },
    //消息排序
    indexMethod(index) {
      return index + 1 + (this.page - 1) * this.pageSize;
    }
  }
};
</script>
<style scoped>
.myNews {
  width: 100%;
  height: 144px;
  background: linear-gradient(60deg, rgb(59, 219, 247), rgb(101, 194, 218));
}

.myNews > div {
  width: 1100px;
  height: 144px;
  margin: 0 auto;
  background: url(../../images/back03.png) no-repeat right 0px;
  background-size: 235px 140px;
}

.myNews div div {
  min-width: 400px;
  color: #fff;
  font-size: 25px;
  margin-left: 40px;
  padding-top: 40px;
}

.myNews div ul {
  overflow: hidden;
  margin-left: 40px;
  margin-top: 10px;
}

.myNews ul li {
  float: left;
  padding-right: 10px;
  color: #fff;
  font-size: 14px;
}
.myNews_main {
  background: white;
  width: 1100px;
  margin: 10px auto;
  overflow: hidden;
}
.myNews_main .el-icon-info {
  font-size: 24px;
  color: #49c0e0;
}

</style>