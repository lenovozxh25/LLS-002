<template>
	<div id="students" style="background: #f5f5f7;padding-bottom: 20px;">
		<div class="studentTitle">
			<div>
				<div>
					考试中
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
							<el-radio-group :key="item.id" v-if="arr" v-on:change="radiochange"  v-model="arr[item.id]">
                                <el-row>
                                    <el-col :span="24">
                                        <div style="margin:5px 0">
                                            <el-tag type="success" style="margin:0 10px 0 5px">A</el-tag>
                                            <el-radio :name="item.id" :label="1">{{item.optionA}}</el-radio>
                                        </div>
                                    </el-col>
                                </el-row>
								<el-row>
                                    <el-col :span="24">
                                        <div style="margin:5px 0">
                                            <el-tag type="success" style="margin:0 10px 0 5px">B</el-tag>
                                            <el-radio :name="item.id" :label="2">{{item.optionB}}</el-radio>
                                        </div>
                                    </el-col>
                                </el-row>
							    <el-row>
                                    <el-col :span="24">
                                        <div style="margin:5px 0">
                                            <el-tag type="success" style="margin:0 10px 0 5px">C</el-tag>
                                           <el-radio :name="item.id" :label="3">{{item.optionC}}</el-radio>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <div style="margin:5px 0">
                                            <el-tag type="success" style="margin:0 10px 0 5px">D</el-tag>
                                           <el-radio :name="item.id" :label="4">{{item.optionD}}</el-radio>
                                        </div>
                                    </el-col>
                                </el-row>                               
                        </el-radio-group>
            </template>
          </p>
      </div>
      <el-button type="success" @click="subExam">提交试卷</el-button>
</template>
</div>
</div>
</div>
</template>

<script>
export default {
    name: "StartTest",
    data() {
        return {
            timeExam:{
                h:0,
                m:0,
                s:0
            },   //考试剩余时间
            timer: null,    //倒计时用到的定时器
            endTime:0,     //考试结束时间
            radio:0,
            sort:1,    //试题的题号
            testid: null,   //要考试的试卷id 通过它找到我们的试卷内容
            testContent: null,    //当前考试的所有内容
            arr:[],        //学生回答答案的内容
            postData:{}     //需要提交的答案数据
        }
    },
    methods:{ 
      //页面倒计时效果
      getTimeExam:function(){
            //  console.log(this.endTime);
            //获取当前时间  
            var date = new Date();  
            var now = date.getTime();  
            //设置截止时间  
            var str=this.endTime;
            var endDate = new Date(str); 
            var end = endDate.getTime();  
            //时间差  
            var leftTime = end-now;         
            // this.timer = null;
            //定义变量 d,h,m,s保存倒计时的时间  
            var h,m,s;  
            if (leftTime>0) {  
                h = Math.floor(leftTime/1000/60/60%24);  
                m = Math.floor(leftTime/1000/60%60);  
                s = Math.floor(leftTime/1000%60); 
                // console.log(h,m,s);
                this.timeExam.h = h;
                this.timeExam.m = m;
                this.timeExam.s = s;
                this.timer = setTimeout(this.getTimeExam,1000);
            }else{
                alert("本场考试已经结束，将自动提交你的试卷！！！")            
                this.subExam();
            }
      },
      // 提交试卷
      subExam:function(){
        clearTimeout(this.timer);
        this.timer = null;
        this.postData.examResult={
          planId:this.testContent.examPlan.id
        }
        this.postData.list = [];
        var arrAll = this.arr;
        for(let i in arrAll){
          var obj = {};
          if(arrAll[i] == 1){
            obj.answer = "A"
          }else if(arrAll[i] == 2){
            obj.answer = "B"
          }else if(arrAll[i] == 3){
            obj.answer = "C"
          }else if(arrAll[i] == 4){
            obj.answer = "D"
          }
          obj.questionId = i;
          this.postData.list.push(obj)        
        } 
        // console.log(this.postData)
        var app = this;
        this.$http.post(`/business/examResult/submit`,this.postData).then(function(res){
          // console.log(res);
          alert("试卷提交成功");
        //   app.$router.push("/student/Mytest");
        })
      },
      // 单选框发生改变时
      radiochange(value){
        // value = 2;
        // this.arr['0e849965-7dc7-43e5-81a5-0caf4770155e'] = 4
        console.log(this.arr)
      }
    },
    created(){
        var app = this;
        this.testid = this.$route.params.testid;  //试卷id
        this.$http.get(`/business/examPlan/examStart?id=`+this.testid)
            .then(function(res){
                //   console.log(res);
                app.testContent = res.data;
                app.endTime = app.testContent.examPlan.endTime;
                console.log(app.testContent);
                
                for(var i = 0;i<app.testContent.list.length;i++){
                  // console.log(app.testContent.list[i].id)
                  app.arr[app.testContent.list[i].id] = 0;
                  // console.log(app.arr);
                }
                // console.log(app.arr);
                app.getTimeExam();
        });
        
        // timer =  setInterval(this.getTimeExam,1000);
        
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