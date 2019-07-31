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
				<template>
					<p class="stuMsg top"><span class="redSquare"></span><span>HTML期末测验</span></p>
                    <!-- 往试卷添加试题的表单 -->
					<el-form v-for="item in formInline" :key="item.sort" class="demo-form-inline">
                        <!-- 题干内容 -->
                        <el-form-item>
                            <div>
                                <el-tag type="warning">第{{item.sort}}题</el-tag>
                                <el-tag>{{item.stem}}</el-tag>                                
                            </div>
                            <template>
                                <el-radio-group>
                                    <el-radio style="width:94%;margin-top:15px;" >
                                        <el-tag>A</el-tag>
                                        <el-input :disabled="true" :value="item.optionA">
                                        </el-input>
                                    </el-radio>
                                    <el-radio style="width:94%;margin-top:15px;" >
                                        <el-tag>B</el-tag>
                                       <el-input :disabled="true" :value="item.optionB">
                                        </el-input>
                                    </el-radio>
                                    <el-radio style="width:94%;margin-top:15px;" >
                                        <el-tag>C</el-tag>
                                        <el-input :disabled="true" :value="item.optionC">
                                        </el-input>
                                    </el-radio>
                                    <el-radio style="width:94%;margin-top:15px;" >
                                        <el-tag>D</el-tag>
                                        <el-input :disabled="true" :value="item.optionD">
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
        rightKey:1,
        // 试卷初始数据
        formInline: [{           
            stem:"这是一题的题干",    //题干
            sort:"1",   //题号
            optionA:"这是选项的A的答案",   //A选项答案
            optionB:"这是选项的B的答案",   //B选项答案
            optionC:"这是选项的C的答案",   //C选项答案
            optionD:"这是选项的D的答案"     //D选项答案
        },{           
            stem:"这是一题的题干",    //题干
            sort:"2",   //题号
            optionA:"这是选项的A的答案",   //A选项答案
            optionB:"这是选项的B的答案",   //B选项答案
            optionC:"这是选项的C的答案",   //C选项答案
            optionD:"这是选项的D的答案"     //D选项答案
        },{           
            stem:"这是一题的题干",    //题干
            sort:"3",   //题号
            optionA:"这是选项的A的答案",   //A选项答案
            optionB:"这是选项的B的答案",   //B选项答案
            optionC:"这是选项的C的答案",   //C选项答案
            optionD:"这是选项的D的答案"     //D选项答案
        },{           
            stem:"这是一题的题干",    //题干
            sort:"4",   //题号
            optionA:"这是选项的A的答案",   //A选项答案
            optionB:"这是选项的B的答案",   //B选项答案
            optionC:"这是选项的C的答案",   //C选项答案
            optionD:"这是选项的D的答案"     //D选项答案
        },{           
            stem:"这是一题的题干",    //题干
            sort:"5",   //题号
            optionA:"这是选项的A的答案",   //A选项答案
            optionB:"这是选项的B的答案",   //B选项答案
            optionC:"这是选项的C的答案",   //C选项答案
            optionD:"这是选项的D的答案"     //D选项答案
        },{           
            stem:"这是一题的题干",    //题干
            sort:"6",   //题号
            optionA:"这是选项的A的答案",   //A选项答案
            optionB:"这是选项的B的答案",   //B选项答案
            optionC:"这是选项的C的答案",   //C选项答案
            optionD:"这是选项的D的答案"     //D选项答案
        }]
    }
  },
  methods: {

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