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
      <el-tabs type="border-card">
        <el-tab-pane label="未读消息">
          <i class="el-icon-info"></i>暂无消息
        </el-tab-pane>
        <el-tab-pane label="已读消息">
          <i class="el-icon-info"></i>暂无消息
        </el-tab-pane>
        <el-tab-pane label="全部消息">
          <i class="el-icon-info"></i>暂无消息
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
      
    };
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