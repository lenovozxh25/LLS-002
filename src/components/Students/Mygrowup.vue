<template>
  <div id="myGrowup">
    <div class="mahorTitle">
      <!-- 学期定位 -->
      <div class="personage">
        <span>第一学期（本学期）</span>
      </div>
      <!-- 学生信息 -->
      <div class="div1">
        <span class="span1">
          赵丽颖
          <el-tag type="danger">班长</el-tag>
        </span>
        <span>
          学号：
          <span>201929292292171</span>
        </span>
        <span>
          专业：
          <span>移动互联(web前端方向)</span>
        </span>
        <span>
          班级：
          <span>16级01班</span>
        </span>
      </div>

      <!-- 学生成绩 -->
      <div class="div2">
        <div class="gup_d1">
          <span>C</span>
          <span class="sp2">
            综合评价
            <i class="el-icon-edit"></i>
          </span>
          <div>
            <p>排名</p>
            <p>
              <i>1</i>/
              <i>15</i>
            </p>
          </div>
          <i class="i01"></i>
        </div>
        <div class="gup_d2">
          <div>
            <span>21.22</span>分
          </div>
          <div>联想成绩专业分（5%）</div>
          <div>
            第
            <span>2</span>名
          </div>
        </div>

        <div class="gup_d2">
          <div>
            <span>100</span>分
          </div>
          <div>奖罚得分（40%）</div>
          <div>
            第
            <span>1</span>名
          </div>
        </div>
        <div class="gup_d2">
          <div>
            <span>21.22</span>分
          </div>
          <div>学校平时成绩得分(35%)</div>
          <div>
            第
            <span>1</span>名
          </div>
        </div>
        <div class="gup_d2">
          <div>
            <span>21.22</span>分
          </div>
          <div>学校综合评价（5%）</div>
          <div>
            第
            <span>2</span>名
          </div>
        </div>
        <div class="gup_d2">
          <div>
            <span>21.22</span>分
          </div>
          <div>考评成绩（5%）</div>
          <div>
            第
            <span>2</span>名
          </div>
        </div>
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
            <el-table-column label="班级排名" width="140" sortable align="center"></el-table-column>
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
                  <el-timeline-item v-for="item in greaterGBlist"  :key="item.id" :timestamp="item.createTime" placement="top" color="rgb(52, 164, 55)">
                    <el-card>
                      <h4>奖励项目：<i>{{item.factorName}}</i></h4>
                      <h4>加分：<i class="add_marks">+{{item.fraction}}分</i></h4>
                      <h4>备注：<i>{{item.fractionDesc}}</i></h4>
                      <p><em>提交人：{{item.userName}}</em><em>提交于： {{item.rewardPenaltyTime}}</em> </p>
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
                  <el-timeline-item v-for="item in lessGBlist" :key="item.id" :timestamp="item.createTime" placement="top" color="rgb(198, 39, 29)">
                    <el-card >
                      <h4>惩罚项目：<i>{{item.factorName}}</i></h4>
                      <h4>加分：<i class="sub_marks">{{item.fraction}}分</i></h4>
                      <h4>备注：<i>{{item.fractionDesc}}</i></h4>
                      <p><em>提交人：{{item.userName}}</em><em>提交于：{{item.rewardPenaltyTime}}</em> </p>
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
        gbList:[],
      tableData: [
        {
          date: "2016-05-02 14:25:00",
          name: "WEB前端基础(HTML+CSS)",
          cj: "68"
        },
        {
          date: "2016-05-04 14:25:00",
          name: "WEB前端基础(HTML+CSS)",
          cj: "缺考"
        },
        {
          date: "2016-05-01 14:25:00",
          name: "WEB前端基础(HTML+CSS)",
          cj: "缺考"
        }
      ]
    };
  },
  methods: {
      //获取学生奖"G"惩"B"集合 
      rewardsAndPunishmentList(recodeType){
        var app=this;
        this.$http.post(`/business/nineEssentialFactor/getExcitationListBySemesterOrRecodeType?recodeType=${recodeType}`).then(res=>{
            console.log(res.data)
            app.gbList=res.data;
        })
      }
  },
  created(){
      this.rewardsAndPunishmentList(1)
  },
  computed:{
      lessGBlist:function(){
         return this.gbList.filter(function(item){
                return item.fraction<0 
          })
      },
      greaterGBlist:function(){
          return this.gbList.filter(function(item){
                return item.fraction>0
          })
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
#myGrowup .mahorTitle {
  width: 100%;
  height: 164px;
  line-height: 40px;
  background: #f9ae39;
  position: relative;
}
#myGrowup .mahorTitle .div1 {
  line-height: 40px;
  height: 40px;
}
#myGrowup .mahorTitle .div1 > span {
  display: inline-block;
  color: #fff;
  font-size: 14px;
  margin-left: 20px;
}
#myGrowup .mahorTitle .div1 > span.span1 {
  margin-left: 388px;
}
#myGrowup .mahorTitle .div2 {
  width: 70%;
  height: 90px;
  background: #fff;
  margin-top: 30px;
  margin-left: 180px;
  overflow: hidden;
}
#myGrowup .mahorTitle .div2 > div {
  width: 16.5%;
  float: left;
  height: 90px;
}
#myGrowup .mahorTitle .div2 .gup_d1 {
  overflow: hidden;
  position: relative;
}
#myGrowup .mahorTitle .div2 .gup_d1 span:first-child {
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 36px;
  font-weight: 700;
  font-family: Arial;
  color: #f1556d;
  line-height: 50px;
  margin-top: 8px;
}
#myGrowup .mahorTitle .div2 .gup_d1 span.sp2 {
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 24px;
  line-height: 24px;
  color: #6a6a6a;
  margin-top: 2px;
  position: relative;
  top: -12px;
}
#myGrowup .mahorTitle .div2 .gup_d1 > div {
  position: absolute;
  left: 8px;
  top: -1px;
  background: #cc2c2c;
  width: 44px;
  height: 49px;
}
#myGrowup .mahorTitle .div2 .gup_d1 > div > p:first-child {
  height: 17px;
  line-height: 20px;
  color: #fff;
  font-size: 12px;
  padding-left: 4px;
}
#myGrowup .mahorTitle .div2 .gup_d1 > div > p:last-child {
  text-align: center;
  color: #fff;
  font-size: 12px;
}
#myGrowup .mahorTitle .div2 .gup_d1 .i01 {
  position: absolute;
  left: 8px;
  top: 39px;
  width: 0;
  height: 0;
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
  border-bottom: 9px solid #fff;
}
#myGrowup .mahorTitle .div2 .gup_d2 {
  background: #f6f6f6;
}
#myGrowup .mahorTitle .div2 .gup_d2 > div {
  width: 100%;
  height: 18px;
  line-height: 18px;
  color: #6a6a6a;
  font-size: 14px;
  text-align: center;
}

#myGrowup .mahorTitle .div2 .gup_d2 > div:first-child {
  height: 22px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 8px;
}
#myGrowup .mahorTitle .div2 .gup_d2 > div:first-child > span {
  color: #c74ad9;
  font-weight: 700;
  font-family: Arial;
  font-size: 26px;
  padding-right: 2px;
  cursor: pointer;
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
.main_content ul.ul_main>li {
  float: left;
  width: 50%;
  box-sizing: border-box;
}
.li1{
    border-right: 1px solid #ebeef5;
}
.ul_main .div_title i {
  font-size: 16px;
  font-weight: 700;
}
.block i{
    font-weight: 100;
}
.block em{
    font-size: 12px;
    margin-right: 20px
}
 .el-card__body{
    padding: 0 20px !important;
}
.add_marks{
    font-weight: 900 !important;
    color: rgb(52, 164, 55);
}
.sub_marks{
    font-weight: 900 !important;
    color: rgb(198, 39, 29);
}
</style>