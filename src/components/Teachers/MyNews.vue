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
      <el-tabs type="border-card" @tab-click="ReadMsgList($event)">
        <!-- <el-tab-pane label="未读消息">
          <i class="el-icon-info"></i>
          暂无未读消息{{unMsg}}
        </el-tab-pane>
        <el-tab-pane label="已读消息">
          <i class="el-icon-info"></i>暂无消息
        </el-tab-pane> -->
        <el-tab-pane label="全部消息">
          <template v-if="tableData!=''">
            <el-table
              border
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column type="selection" width="35"></el-table-column>
              <el-table-column prop="id" label="序号" width="50"></el-table-column>
              <el-table-column prop="shortDesc" label="简短描述" width="340"></el-table-column>
              <el-table-column prop="receiveTime" label="接收时间" width="160"></el-table-column>
              <el-table-column prop="timingSendTime" label="发送时间" width="160"></el-table-column>
              <el-table-column prop="isRead" label="消息状态" width="80" align="center"></el-table-column>
              <el-table-column label="操作">
                <a href="#">阅读</a>
              </el-table-column>
            </el-table>
            <el-pagination
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
  </div>
</template>
<script>
export default {
  name: "myNews",
  data() {
    return {
      unMsg: [],
      allMsg: [],
      tableData: [],
      total: undefined,
      pageSize: 10,
      currentPage: 1
    };
  },
  created() {
    this.ReadMsgList(this.currentPage, this.pageSize);
  },
  methods: {
    //未读消息
    ReadMsgList(page, pageSize, params,event) {
      //  console.log(event.index);
     // debugger
      var app = this;
      this.$http
        .post("/message/sysMessageReading/page", { page, pageSize, params })
        .then(res => {
          console.log(res.data);
          app.tableData = res.data.data;
          app.pageSize = res.data.pageSize;
          app.total = res.data.recordsTotal;
        });
    },
    current_change(currentPage) {
     // debugger
      this.currentPage = currentPage;
      this.ReadMsgList(this.currentPage, this.pageSize);
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