<template>
	<div id="students" style="background: #f5f5f7;padding-bottom: 20px;">
		<div class="studentTitle">
			<div>
				<div>
					发布考试
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
					<p class="stuMsg top"><span class="redSquare"></span><span>发布考试</span></p>
                    <!-- 往试卷添加试题的表单 -->
					<el-form style="text-argin:center;" v-model="formInline" class="demo-form-inline">
                        <el-form-item label="考试名称">
                            <el-input style="width:20%;"
                                placeholder="请输入考试名称"
                                v-model="formInline.name"
                                >
                            </el-input>
                        </el-form-item>
                        <el-form-item label="选择班级" v-if="formInline.classAll">
                            <el-select v-model="formInline.classId" placeholder="请选择考试班级">                             
                                <el-option v-for="item in formInline.classAll" :label="item.name" :value="item.id" :key="item.id"></el-option>
                            </el-select>                        
                        </el-form-item>
                        <el-form-item label="考试时长">
                            <el-input style="width:50px;" v-model="formInline.duration" placeholder=""></el-input>
                            <el-tag type="success">分钟</el-tag>                    
                        </el-form-item>
                        <el-form-item label="开始时间">
                            <div class="block">
                                <el-date-picker v-model="formInline.startTime" type="datetime" placeholder="选择考试考试时间">
                                </el-date-picker>
                            </div>                   
                        </el-form-item>
                        <el-form-item label="考试类型" v-if="formInline.testType">
                            <el-radio-group v-model="formInline.typeId">
                                    <el-radio v-for="item in formInline.testType" :label="item.id" :key="item.name">
                                        {{item.name}}
                                    </el-radio>
                            </el-radio-group>
                        </el-form-item>

                        
                        <!-- 考试关联的试卷 -->
                            <div>
                                <el-button type="primary">请选择您需要关联的试卷</el-button>
                            </div>
                             
                            <el-table ref="multipleTable" :data="formInline.examsAll" tooltip-effect="dark" style="width: 100%" @select="handleSelect">
                                <el-table-column type="selection" width="55"></el-table-column>
                                <el-table-column prop="name" label="试卷" width="120"></el-table-column>
                                <el-table-column prop="typeId" label="专业分类" width="120"></el-table-column>
                                <el-table-column prop="remark" label="备注信息" show-overflow-tooltip></el-table-column>
                                <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip></el-table-column>
                            </el-table>
                        
                        <!-- 分页效果 -->
                        <el-pagination :current-page="formInline.page" style="margin-top:30px;" :page-size="formInline.pageSize" background layout="prev, pager, next" :total="formInline.nums" @current-change="pageClick" @prev-click="prevClick" @next-click="nextClick"></el-pagination>

                        <el-button style="margin:30px 0;" type="primary" :plain="true" @click="createExam">创建考试</el-button>
                        
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
        // 时间选择器
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        // 试卷初始数据
        formInline: {
            name: "",   //考试名称
            classId:"请选择考试班级",  //班级id
            duration:0,    //  考试时长
            startTime:"2019-07-30T02:57:20.465Z",   //开始时间
            typeId:1,   //考试类型 
            examPageId:1,   //当前考试关联的试卷

            testType:null,    //考试的类型
            classAll:null,    //班级的集合

            // 获取所有的试卷集合
            page:1,        
            pageSize:5,
            examsAll:null,     //试卷的集合
            nums: null,         //总的试卷格式
            pages: null         //试卷总页数
        },
        //创建考试需要发送的数据
        postData:{
            name: "",   //考试名称
            classId:0,  //班级id
            duration:0,    //  考试时长
            startTime:"2019-07-30T02:57:20.465Z",   //开始时间
            isMultipleSubmission:"N",  //是否支持多次提交
            typeId:1,   //考试类型 
            examPageId:1   //当前考试关联的试卷
        }       
    }
  },
  methods: {
    //   发布考试
    createExam(){
        this.postData.name = this.formInline.name;
        this.postData.classId = this.formInline.classId;
        this.postData.duration = this.formInline.duration;
        this.postData.startTime = Number(this.formInline.startTime);
        this.postData.typeId = this.formInline.typeId;
        this.postData.examPageId = this.formInline.examPageId;
        // 点击创建考试，创建考试成功
        if(this.formInline.name&&this.formInline.classId&&this.formInline.duration&&this.formInline.startTime&&this.formInline.startTime){
            this.$http
            .post(`/business/examPlan/save`,this.postData)
            .then(res => {
                console.log(res);
                if(res.data === ""){
                   alert(this.postData.name+"发布成功");
                   this.formInline.name = "";
                   this.formInline.duration = "";
                }else{
                    alert("考试发布失败")
                }
            });
        }else{
            alert("发布考试相关信息不能为空")
        }
        
    },
    // 获取选中关联试卷的id，传输数据需要用
    handleSelect(selection,row) { 
        // 清空所有的状态
        this.$refs.multipleTable.clearSelection();
        // 选中当前状态
        this.$refs.multipleTable.toggleRowSelection(row,true);
        //截取上一个选中的
        selection = selection.pop();      
        //修改examPageId为当前选中试卷的id
        this.formInline.examPageId = selection.id;
      },

        //   获取所有的试卷资源
        getTest(){
            // 获取当前所有可以考试的试卷资源
        this.$http
            .post(`/exam/examPage/page`,{
            page: this.formInline.page,
            pageSize: this.formInline.pageSize,
            params: {
                typeId:null
            }
            })
            .then(res => {
            console.log(res);
            // debugger
            this.formInline.examsAll = res.data.data;
            this.formInline.nums = res.data.recordsTotal;
            //   this.apages = Math.ceil(this.anums / this.apageSize);
            });
        },
        // 试卷的分页效果分页效果
        pageClick(event) {
        this.formInline.page = event;
        this.getTest();
        },
        //点击上一页
        prevClick() {
        this.formInline.page--;
        this.getTest();
        },
        //点击下一页
        nextClick() {
        this.page++;
        this.getTest();
        },
  },
  created(){
      // 获取当前所有可以考试的试卷资源
      this.getTest()
      //获取当前老师能够发布考试的班级有哪些(讲师所带的班级)
      var teacherId = window.localStorage.getItem('userId');
      this.$http
        .get(`/business/organClassUser/currentClassListByTeacherId/${teacherId}`).then(res => {
          console.log(res.data);
          this.formInline.classAll = res.data;
        });

      //获取所有的试卷类型
       this.$http
        .get(`/business/examType/listAll`).then(res => {
          console.log(res.data);
          this.formInline.testType = res.data;
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