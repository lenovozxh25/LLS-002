<template>
	<div id="students" style="background: #f5f5f7;padding-bottom: 20px;">
		<div class="studentTitle">
			<div>
				<div>
					创建试卷
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
				<template>
					<p class="stuMsg top"><span class="redSquare"></span><span>创建试卷</span></p>
                    <!-- 往试卷添加试题的表单 -->
					<el-form v-model="formInline" class="demo-form-inline">
                        <el-form-item label="试卷名称">
                            <el-input style="width:20%;"
                                placeholder="请输入试卷名称"
                                v-model="formInline.examName"
                                >
                            </el-input>
                            <el-button style="float:right" type="primary" @click="saveExam">保存试卷</el-button>
                        </el-form-item>
                        <el-form-item label="试卷类型">
                            <el-select v-model="formInline.examLei" placeholder="请选择试卷类型">
                            <el-option label="大前端" value="大前端"></el-option>
                            <el-option label="移动互联" value="移动互联"></el-option>
                            <el-option label="软件开发" value="软件开发"></el-option>
                            </el-select>                        
                        </el-form-item>

                        <!-- 题目类型 -->
                        <el-form-item>
                            <el-tag>选择题目的类型：</el-tag>
                            <el-radio-group v-model="formInline.topicTypes">
                                <el-radio :label="1">单选</el-radio>
                            </el-radio-group>
                            <el-tag style="margin-left:4%;" type="success">分值：</el-tag>
                            <el-input style="width:50px;" v-model="formInline.score" placeholder=""></el-input>
                            <el-tag style="margin-left:4%;">是否为面试题：</el-tag>
                            <el-radio-group v-model="formInline.inQues">
                                <el-radio :label="1">是</el-radio>
                                <el-radio :label="2">否</el-radio>
                            </el-radio-group>
                            <el-button style="float:right" type="warning" v-on:click="addQuestions">下一题</el-button>
                        </el-form-item>

                        <!-- 题干内容 -->
                        <el-form-item>
                            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="formInline.stem">
                            </el-input>
                            <template>
                                <el-radio-group v-model="formInline.rightKey">
                                    <el-radio style="width:94%;margin-top:15px;" :label="1">
                                        <el-tag>A</el-tag>
                                        <el-input placeholder="请输入A选项的内容" v-model="formInline.optionA">
                                        </el-input>
                                    </el-radio>
                                    <el-radio style="width:94%;margin-top:15px;" :label="2">
                                        <el-tag>B</el-tag>
                                       <el-input placeholder="请输入B选项的内容" v-model="formInline.optionB">
                                        </el-input>
                                    </el-radio>
                                    <el-radio style="width:94%;margin-top:15px;" :label="3">
                                        <el-tag>C</el-tag>
                                        <el-input placeholder="请输入C选项的内容" v-model="formInline.optionC">
                                        </el-input>
                                    </el-radio>
                                    <el-radio style="width:94%;margin-top:15px;" :label="4">
                                        <el-tag>D</el-tag>
                                        <el-input placeholder="请输入D选项的内容" v-model="formInline.optionD">
                                        </el-input>
                                    </el-radio>
                                </el-radio-group>
                            </template>
                        </el-form-item>
                        
                    </el-form>
						
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
        // 试卷初始数据
        formInline: {
            examName: "",   //试题名称
            examLei:"大前端",  //试题类型
            topicTypes:1,    //  题型 默认只有选择题
            score:null,   //分数
            inQues:1,   //是否为面试题 
            stem:"",    //题干
            rightKey:null,  //正确答案的题号
            answer:'',
            sort:0,   //题号
            optionA:"",   //A选项答案
            optionB:"",   //B选项答案
            optionC:"",   //C选项答案
            optionD:""     //D选项答案
        },
        //   向后台发送的数据
        postData:{
            examPage: {
                name: "",
                remark: "（每道题目只有一个正确选项）",
                typeId: ""
            },
            list: [               
            ]   
        }
    }
  },
  methods: {
    //   往试卷中添加题
      addQuestions(){
          if(
              this.formInline.rightKey&&
              this.formInline.inQues&&
              this.formInline.optionA&&
              this.formInline.optionC&&
              this.formInline.optionB&&
              this.formInline.optionD&&
              this.formInline.stem&&
              this.formInline.score
              ){
              //题号加1
                this.formInline.sort++;
                //正确答案
                switch(this.formInline.rightKey){
                    case 1:
                        this.formInline.answer = "A";
                        break;
                    case 2:
                        this.formInline.answer = "B";
                        break;
                    case 3:
                        this.formInline.answer = "C";
                        break;
                    case 4:
                        this.formInline.answer = "D";
                        break;
                }
                //是否为面试题
                switch(this.formInline.inQues){
                    case 1:
                        this.formInline.inQues = "面试题";
                        break;
                    case 2:
                        this.formInline.inQues = "非面试题";
                        break;
                }
                var obj = {
                        answer:this.formInline.answer, //正确答案
                        examQuestionMark: {
                            mark: this.formInline.inQues  //标记 面试题非面试题
                        },
                        optionA: this.formInline.optionA,
                        optionB: this.formInline.optionB,
                        optionC: this.formInline.optionC,
                        optionD: this.formInline.optionD,
                        optionE: "string",
                        optionF: "string",
                        questionTypeId: 1,  //问题类型
                        score: this.formInline.score,   //分数
                        sort: this.formInline.sort,   //问题题号
                        stem: this.formInline.stem  //题干
                    }
                this.postData.list.push(obj);
                console.log(this.postData.list);
                this.formInline.answer="";
                this.formInline.inQues="";
                this.formInline.optionA="";
                this.formInline.optionB="";
                this.formInline.optionC="";
                this.formInline.optionD="";
                this.formInline.score = "";
                this.formInline.stem = "";
                this.formInline.rightKey = null;
                alert("试卷第"+this.formInline.sort+"题添加成功！！！")
          }else{
              alert("内容不能为空")
          }

      },
    // 保存试卷
    saveExam(){
        if(this.postData.list.length !== 0){
             this.postData.examPage.name = this.formInline.examName;
       //正确答案
                switch(this.formInline.examLei){
                    case "大前端":
                        this.postData.examPage.typeId = 1;
                        break;
                    case "移动互联":
                        this.postData.examPage.typeId = 2;
                        break;
                    case "软件开发":
                        this.postData.examPage.typeId = 3;
                        break;
                }
            // business/examQuestionMark/savePaper  保存试卷的请求网址请求地址
            this.$http
            .post("business/examQuestionMark/savePaper",this.postData)
            .then(res => {
            //   console.log(res);
            alert("恭喜你"+this.formInline.examName+"创建成功");
            this.formInline.examName="";
            });
        }else{
            alert("请先添加试题，在创建试卷");
        }
      
    }
    

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