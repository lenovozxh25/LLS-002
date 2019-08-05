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
				<!-- <template v-if="testContent">

					<p class="stuMsg top">
						<span class="redSquare"></span>
						<span>
                        <i class="el-icon-message-solid" style="color:#DE415A;font-size:20px;"></i>
                            {{testContent.examPlan.name}}
                        </span>
                        <span style="margin:0 10px;float:right;">
                        <i class="el-icon-warning" style="color:#49C0E0;"></i>
                            剩余时间：{{timeExam.h}} : {{timeExam.m}} : {{timeExam.s}}
                        </span>
						<span style="float:right;">
                        <el-tag>考试时长为：{{testContent.examPlan.duration}}分钟</el-tag>
                        </span>
					</p>

					<div style="margin:40px 0;" v-for="item in testContent.list" :key="item.sort">
					<p>
						<el-tag>第{{item.sort}}题</el-tag>
						<el-tag type="success">分值{{item.score}}</el-tag>
						<el-input style="display:inline-block; margin:5px 0"
								  type="textarea"
								  autosize
								  value="item.stem"
								  disabled>
						</el-input>
						<template>
							<el-radio-group :key="item.id" v-if="arr" v-on:change="radiochange"  v-model="arr[item.id]">
								<el-radio :name="item.id" :label="1">{{item.optionA}}</el-radio>
							  <el-radio :name="item.id" :label="2">{{item.optionB}}</el-radio>
                <el-radio :name="item.id" :label="3">{{item.optionC}}</el-radio>
                <el-radio :name="item.id" :label="4">{{item.optionD}}</el-radio>
            </el-radio-group>
            </template> -->
          <!-- </p> -->
            </div>
      <el-button type="success">提交试卷</el-button>
      </div>
	</div>
</template>

<script>
export default {
    name: "StartTest",
    data() {
        return {
            testid: null,   //考完试的试卷id 
            testname: null  //考完试的试卷名称 
        }
    },
    methods:{ 


    },
    created(){
        var app = this;
        this.testid = this.$route.params.testid;  //试卷id
        this.testname = this.$route.params.testname;  //试卷名称
        // 这个参数必须是请求字符串的形式 拼接在路径的后面
        this.$http.post(`/exam/examPage/detail?id=`+this.testid).then(function(res){
             console.log(res);
        });
        
        
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