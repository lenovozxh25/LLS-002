<template>
  <div id="myGrowup">
    <div class="growupTitle">
      <div>
        <div>联想9要素</div>
        <ul>
          <li>行动3要求</li>
          <li>品德5要求</li>
          <li>结果1要求</li>
        </ul>
      </div>
    </div>
    <div class="growup_main">
      <div class="main_top">
        <ul>
          <li>
            <span class="span_title span1">驻场评语</span>
            <span>想睡觉</span>
          </li>
          <li style="border-left:none">
            <span class="span_title span2">讲师评语</span>
            <span>暂无评语</span>
          </li>
        </ul>
        <template>
          <el-table :data="tableData" style="width: 100%;border:1px solid #EBEEF5">
            <el-table-column label="序号" type="index" width="100" sortable align="center"></el-table-column>
            <el-table-column prop="name" label="课程名称" width="280" align="center"></el-table-column>
            <el-table-column prop="date" label="考试时间" width="220" align="center"></el-table-column>
            <el-table-column prop="cj" label="考试成绩" width="140" sortable align="center"></el-table-column>
            <el-table-column prop="pm" label="班级排名" width="140" sortable align="center"></el-table-column>
            <el-table-column label="查看试卷" align="center">
              <el-link target="_blank" style="font-size:14px" :underline="false">
                <i class="el-icon-view"></i>查看试卷
              </el-link>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="main_content">
        <ul class="ul_main">
          <li class="li1">
            <div class="div_title">
              <span class="span_title span3">
                联想班学生奖励
                <i>9</i>要点
              </span>
              <span class="span4">奖励共{{greaterGBlist.length}}次、共{{greaterGBlist.length*2}}分；</span>
            </div>
            <div style="padding:30px">
              <div class="block">
                <el-timeline>
                  <el-timeline-item
                    v-for="item in greaterGBlist"
                    :key="item.id"
                    :timestamp="$moment(item.rewardPenaltyTime).format('YYYY-MM-DD')"
                    placement="top"
                    color="rgb(52, 164, 55)"
                  >
                    <el-card>
                      <h4>
                        奖励项目：
                        <i>{{item.factorName}}</i>
                      </h4>
                      <h4>
                        加分：
                        <i class="add_marks">+{{item.fraction}}分</i>
                      </h4>
                      <h4>
                        备注：
                        <i>{{item.fractionDesc}}</i>
                      </h4>
                      <p>
                        <em>提交人：{{item.userName}}</em>
                        <em>提交于： {{item.createTime}}</em>
                      </p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </div>
          </li>
          <li style="border-left:none" class="li2">
            <div class="div_title">
              <span class="span_title span5">
                联想班学生处罚
                <i>9</i>要点
              </span>
              <span class="span6">处罚共{{lessGBlist.length}}次、共{{lessGBlist.length*2}}分；</span>
            </div>
            <div style="padding:30px">
              <div class="block">
                <el-timeline>
                  <el-timeline-item
                    v-for="item in lessGBlist"
                    :key="item.id"
                    :timestamp="$moment(item.rewardPenaltyTime).format('YYYY-MM-DD')"
                    placement="top"
                    color="rgb(198, 39, 29)"
                  >
                    <el-card>
                      <h4>
                        惩罚项目：
                        <i>{{item.factorName}}</i>
                      </h4>
                      <h4>
                        加分：
                        <i class="sub_marks">{{item.fraction}}分</i>
                      </h4>
                      <h4>
                        备注：
                        <i>{{item.fractionDesc}}</i>
                      </h4>
                      <p>
                        <em>提交人：{{item.userName}}</em>
                        <em>提交于：{{item.createTime}}</em>
                      </p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myStuMajor",
  data() {
    return {
      gbList: [],
      tableData: [
        {
          date: "2019-05-02 16:25:00",
          name: "WEB前端基础(HTML+CSS)",
          cj: "68",
          pm: "1"
        },
        {
          date: "2019-05-04 16:25:00",
          name: "WEB前端基础(HTML+CSS)",
          cj: "缺考",
          pm: "--"
        },
        {
          date: "2019-06-01 16:25:00",
          name: "WEB前端基础(HTML+CSS)",
          cj: "缺考",
          pm: "--"
        }
      ]
    };
  },
  methods: {
    //获取学生奖"G"惩"B"集合
    rewardsAndPunishmentList(recodeType) {
      var app = this;
      this.$http
        .post(
          `/business/nineEssentialFactor/getExcitationListBySemesterOrRecodeType?recodeType=${recodeType}`
        )
        .then(res => {
          console.log(res.data);
          app.gbList = res.data;
        });
    }
  },
  created() {
    this.rewardsAndPunishmentList(1);
  },
  computed: {
    //过滤数据-小于0的为惩罚
    lessGBlist: function() {
      return this.gbList.filter(function(item) {
        return item.fraction < 0;
      });
    },
    //大于0的为奖励
    greaterGBlist: function() {
      return this.gbList.filter(function(item) {
        return item.fraction > 0;
      });
    }
  }
};
</script>

<style scoped>
ul li {
  list-style: none;
}
#myGrowup .el-collapse-item .el-collapse-item__header {
  background: skyblue;
  padding-left: 50px;
  color: white;
  font-size: 23px;
}

#myGrowup a {
  color: #6c6868;
  font-size: 16px;
}

#myGrowup a:hover {
  color: skyblue;
}

#myGrowup .el-main {
  text-align: left;
  /*line-height: 30px;*/
}
#myGrowup .el-collapse {
  width: 1100px;
  margin: auto;
}
#myGrowup .el-collapse-item__content {
  padding-left: 50px;
  padding-top: 20px;
}
.growupTitle {
  width: 100%;
  height: 144px;
  background: linear-gradient(60deg, rgba(206, 204, 108, 0.918), rgb(199, 241, 101));
}
.growupTitle > div {
  width: 1100px;
  height: 144px;
  margin: auto;
  background: url(../../images/back03.png) no-repeat right 0px;
  background-size: 235px 140px;
}

.growupTitle div div {
  min-width: 400px;
  color: #fff;
  font-size: 25px;
  margin-left: 40px;
  margin-bottom: 10px;
  padding-top: 40px;
}

.growupTitle div ul {
  overflow: hidden;
  margin-left: 40px;
  /*margin-top: 10px;*/
}

.growupTitle ul li {
  float: left;
  padding-right: 10px;
  color: #fff;
  font-size: 14px;
}

/* 学期定位 */
.personage {
  text-align: center;
  position: absolute;
  height: 34px;
  line-height: 34px;
  top: 46px;
  left: 558px;
  width: 160px;
  z-index: 10;
  border-right: 1px solid rgb(228, 228, 228);
  border-top: 1px solid rgb(228, 228, 228);
  border-bottom: 1px solid rgb(228, 228, 228);
  background: #fff;
  outline: none;
  color: #1380f9;
  font-size: 14px;
}

.growup_main {
  width: 1100px;
  margin: 20px auto;
  overflow: hidden;
}

.growup_main .main_top ul {
  overflow: hidden;
  margin-bottom: 20px;
}
.main_top ul li {
  float: left;
  width: 50%;
  border: 1px solid #ebeef5;
  height: 27px;
  box-sizing: border-box;
}
.growup_main ul li span {
  font-size: 14px;
}
.main_top ul li .span_title {
  padding: 4px 40px;
  line-height: 27px;
  text-align: center;
  margin-right: 20px;
}

.span1 {
  background: #f4f9ff;
}
.span2 {
  background: #f8e9ec;
}
.span3 {
  background: #f84a7b;
  width: 30%;
  text-align: center;
}
.span4 {
  background: #f19aaa;
  width: 70%;
  text-indent: 2em;
}
.span5 {
  background: #3687e2;
  width: 30%;
  text-align: center;
}
.span6 {
  background: #85b9f3;
  width: 70%;
  text-indent: 2em;
}
.main_content {
  margin-top: 20px;
  border: 1px solid #ebeef5;
  overflow: hidden;
}
.main_content .ul_main li > div {
  overflow: hidden;
}
.main_content .ul_main span {
  color: white;
  float: left;
  /* line-height: 30px; */
  padding: 5px 0;
}
.main_content ul.ul_main > li {
  float: left;
  width: 50%;
  box-sizing: border-box;
}
.li1 {
  border-right: 1px solid #ebeef5;
}
.ul_main .div_title i {
  font-size: 16px;
  font-weight: 700;
}
.block i {
  font-weight: 100;
}
.block em {
  font-size: 12px;
  margin-right: 20px;
}
.el-card__body {
  padding: 0 20px !important;
}
.add_marks {
  font-weight: 900 !important;
  color: rgb(52, 164, 55);
}
.sub_marks {
  font-weight: 900 !important;
  color: rgb(198, 39, 29);
}
</style>