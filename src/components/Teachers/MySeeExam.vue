<template>
	<div id="students" style="background: #f5f5f7;padding-bottom: 20px;">
		<div class="studentTitle">
			<div>
				<div>
					试卷详情
				</div>
				<ul>
					<li>在测验中分析 </li>
					<li>在测验中总结</li>
					<li>在测验中成长 </li>
				</ul>
			</div>
		</div>
		<div class="stuMain">
			<div>
				<template v-if="testContent">
					<p class="stuMsg top">
                        <span class="redSquare"></span>
                        <span>试卷详情</span>
                        <span>
                        <span style="margin:0 0 0 20px">试卷名称：</span>
                        <el-tag>{{testContent.examPage.name}}</el-tag>
                        </span>
                    </p>
                    
            <!-- 试题列表 -->
			<div style="margin:40px 0;" v-for="item in testContent.list" :key="item.sort">
				<p>
					<el-tag>第{{item.sort}}题</el-tag>
					<el-tag type="success">分值{{item.score}}</el-tag>
					<el-input style="display:inline-block; margin:5px 0"
								  type="textarea"
								  autosize
								  :value="item.stem"
								  disabled>
					</el-input>
					<template>
							<el-radio-group disabled v-model="radio">
                                <el-row>
                                    <el-col :span="24">
                                        <div style="margin:5px 0">
                                            <el-tag type="success" style="margin:0 10px 0 5px">A</el-tag>
                                            <el-radio >{{item.optionA}}</el-radio>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <div style="margin:5px 0">
                                            <el-tag type="success" style="margin:0 10px 0 5px">B</el-tag>
                                            <el-radio >{{item.optionB}}</el-radio>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <div style="margin:5px 0">
                                            <el-tag type="success" style="margin:0 10px 0 5px">C</el-tag>
                                            <el-radio >{{item.optionC}}</el-radio>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <div style="margin:5px 0">
                                            <el-tag type="success" style="margin:0 10px 0 5px">D</el-tag>
                                            <el-radio >{{item.optionD}}</el-radio>
                                        </div>
                                    </el-col>
                                </el-row>
                        </el-radio-group>
                        <el-row>
                            <el-col :span="24">
                                <div style="margin:5px 0">
                                    <el-tag type="success" effect="dark">
                                    正确答案：
                                    </el-tag>
                                    <el-tag type="" effect="dark">
                                    {{item.answer}}
                                    </el-tag>
                                </div>
                            </el-col>
                        </el-row>
                       
                    </template>
                </p>
            </div>
						
				</template>
			</div>
		</div>
        
	</div>
</template>

<script>
export default {
  name: "createExam",
  data() {
    return {
        radio:0,    //单选框组禁用不被选中
        testContent : null   //试卷详细信息
    }
  },
  methods: {

  },
  created(){
      var app = this;
      console.log(this.$route.params.testid); //试卷id 用来查看试卷详情
      this.$http.post(`/business/examQuestionMark/pageDetail?id=`+this.$route.params.testid).then(function(res){
          app.testContent = res.data;
          console.log(app.testContent)
      })
  }
};
</script>

<style>
#students .studentTitle {
  width: 100%;
  height: 144px;
  background: linear-gradient(60deg, rgb(218, 63, 88), rgb(255, 85, 111));
}

#students .studentTitle > div {
  width: 1100px;
  height: 144px;
  margin: auto;
  background: url(../../images/back04.png) no-repeat right 0px;
  background-size: 455px 144px;
}

#students .studentTitle div div {
  min-width: 400px;
  color: #fff;
  font-size: 25px;
  margin-left: 40px;
  padding-top: 40px;
}

#students .studentTitle div ul {
  overflow: hidden;
  margin-left: 40px;
  /*margin-top: 10px;*/
}

#students .studentTitle ul li {
  float: left;
  padding-right: 10px;
  color: #fff;
  font-size: 14px;
}

#students .stuMain {
  width: 1100px;
  margin: 10px auto;
  background: white;
  padding: 10px;
}

#students .stuMsg {
  overflow: hidden;
  /*height:16px;*/
  font-family: HiraginoSansGB-W6;
  color: rgba(64, 64, 64, 1);
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.top {
  margin: 15px 0;
}

#students .stuMsg span {
  float: left;
  height: 20px;
  line-height: 18px;
  font-size: 18px;
}

#students .redSquare {
  width: 6px;
  /*height:16px;*/
  background: skyblue;
  margin-right: 10px;
}
</style>