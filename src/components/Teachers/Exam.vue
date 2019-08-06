<template>

	<div id="exam" style="background: #f5f5f7;padding-bottom: 20px;">
		<div class="examTitle">
			<div>
				<div>
					考试管理
				</div>
				<ul>
					<li>贴合知识点 </li>
					<li>自动判卷</li>
					<li> 多维度统计</li>
				</ul>
			</div>
		</div>
		<div class="eaxmMain">			
			<div style="margin-bottom: 20px;">
				<el-button type="primary" @click="issueExam">发布考试</el-button>
				<el-button type="primary" @click="createExam">创建试卷</el-button>
			</div>
			<el-tabs class="z_p_tab" type="border-card" v-model="z_p_testName" @tab-click="handleClick">
            <el-tab-pane label="大前端" name="first">
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <el-tag type="success">大前端</el-tag>
			        </p>
                    <el-table :data="examsAll" stripe style="width: 100%">
                        <el-table-column prop="name" label="试卷名称" width="200">
                        </el-table-column>
                        <el-table-column prop="createTime" width="200" label="创建时间"></el-table-column>
                        <el-table-column prop="remark" label="备注"></el-table-column>
                        <el-table-column prop="" label="试卷类型">大前端</el-table-column>
                        <el-table-column label="操作">
							 <template slot-scope="scope">
								 <el-button
								size="mini"
								type="primary"
								@click="seeExam(scope.$index, scope.row.id)">查看试卷</el-button>
								<el-button
								size="mini"
								type="danger"
								@click="deleteEaxm(scope.$index, scope.row.id)">删除</el-button>
							</template>
						</el-table-column>
                    </el-table>
                     <!-- 分页效果 -->
                    <el-pagination :current-page="page" style="margin-top:30px;" :page-size="pageSize" background layout="prev, pager, next" :total="nums" @current-change="pageClick" @prev-click="prevClick" @next-click="nextClick"></el-pagination>
		        </el-collapse>
            </el-tab-pane>
			<el-tab-pane label="移动互联" name="second">
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <el-tag>移动互联</el-tag>
			        </p>
                    <el-table :data="examsAll" stripe style="width: 100%">
                        <el-table-column prop="name" label="试卷名称" width="200">
                        </el-table-column>
                        <el-table-column prop="createTime" width="200" label="创建时间"></el-table-column>
                        <el-table-column prop="remark" label="备注"></el-table-column>
                        <el-table-column prop="" label="试卷类型">移动互联</el-table-column>
                        <el-table-column prop="question" label="操作">
							<template slot-scope="scope">
								<el-button
								size="mini"
								type="primary"
								@click="seeExam(scope.$index, scope.row.id)">查看试卷</el-button>
								<el-button
								size="mini"
								type="danger"
								@click="deleteEaxm(scope.$index, scope.row.id)">删除</el-button>
							</template>
						</el-table-column>
                    </el-table>
                     <!-- 分页效果 -->
                    <el-pagination :current-page="page" style="margin-top:30px;" :page-size="pageSize" background layout="prev, pager, next" :total="nums" @current-change="pageClick" @prev-click="prevClick" @next-click="nextClick"></el-pagination>
		        </el-collapse>
            </el-tab-pane>
			<el-tab-pane label="软件开发" name="third">
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <el-tag type="warning">软件开发</el-tag>
			        </p>
                    <el-table :data="examsAll" stripe style="width: 100%">
                        <el-table-column prop="name" label="试卷名称" width="200">
                        </el-table-column>
                        <el-table-column prop="createTime" width="200" label="创建时间"></el-table-column>
                        <el-table-column prop="remark" label="备注"></el-table-column>
                        <el-table-column prop="" label="试卷类型">软件开发</el-table-column>
                        <el-table-column prop="id" label="操作">
							<template slot-scope="scope">
								<el-button
								size="mini"
								type="danger"
								@click="seeExam(scope.$index, scope.row.id)">查看试卷</el-button>
								<el-button
								size="mini"
								type="primary"
								@click="deleteEaxm(scope.$index, scope.row.id)">删除</el-button>
							</template>
						</el-table-column>
                    </el-table>
                     <!-- 分页效果 -->
                    <el-pagination :current-page="page" style="margin-top:30px;" :page-size="pageSize" background layout="prev, pager, next" :total="nums" @current-change="pageClick" @prev-click="prevClick" @next-click="nextClick"></el-pagination>
		        </el-collapse>
            </el-tab-pane>
            
        </el-tabs>
		</div>
	</div>
</template>

<script>
export default {
  name: "exam",
  data() {
    return {
	  //全部测验数据的数据
	  src:`/exam/examPage/page`,  //发送ajax的路由地址
	  typeId:1,
      page: 1, //当前第几页
      pageSize: 5, //反馈每页的数据条数
      nums: null, //反馈总消息数
      pages: null, //反馈总页数
      activeNames: ["1", "2", "3", "4", "5"],
      z_p_testName: "first",
      examsAll: [], //我的全部测验相关数据
      feedbackAll: [], //我的反馈建议相关数据
      form: {
        name: "",
        region: "用户体验",
        desc: ""
      }
    };
  },
  created() {
	  this.getExams(this.src);
  },
  methods: {
	//   发布考试
	issueExam(){
		this.$router.push("/teacher/issueeexam");
	},
	//   创建试卷跳转
	createExam(){
		this.$router.push("/teacher/mycreateexam");
	},
    handleClick(tab, event) {
		if(tab.$el.id=="pane-first"){
			this.src = `/exam/examPage/page`;
			this.typeId = 1;
			this.getExams(this.src)
		}else if(tab.$el.id=="pane-second"){
			this.src = `/exam/examPage/page`;
			this.typeId = 2;
			this.getExams(this.src)
		}else if(tab.$el.id=="pane-third"){
			this.src = `/exam/examPage/page`;
			this.typeId = 3;
			this.getExams(this.src)
		}
	},

	//获取全部测验数据
    getExams(src) {
      //获取全部测验数据
      this.$http
        .post(src,{
          page: this.page,
          pageSize: this.pageSize,
          params: {
			  typeId:this.typeId
		  }
        })
        .then(res => {
          console.log(res);
          // debugger
          this.examsAll = res.data.data;
          this.nums = res.data.recordsTotal;
        //   this.apages = Math.ceil(this.anums / this.apageSize);
        });
	},
	 // 反馈建议分页效果
    pageClick(event) {
      this.page = event;
      this.getExams(this.src);
    },
    //点击上一页
    prevClick() {
      this.page--;
      this.getExams(this.src);
    },
    //点击下一页
    nextClick() {
      this.page++;
      this.getExams(this.src);
	},
	
	// delete 删除试卷
	deleteEaxm:function(index,id){
		// 查看试卷的状态，是否被关联  如果是false 说明被关联考试了 不能删除   否则没有关联考试可以删除
		var app = this;
		this.$http.get(`/business/examPlan/paperStatus/`+id).then(function(res){
			console.log(res.data);
			if(res.data === false){
				alert("当前试卷已经关联了考试，不能被删除哟！！！")
			}else if(res.data === true){
				app.$http.post(`/exam/examPage/delete?id=`+id).then(function(res){
					// console.log(res.data)
					if(res.data === ""){
						alert("恭喜你，试卷删除成功");
						// 删除成功之后需要重新加载试卷
						app.getExams(app.src);
					}
				})
			}
		})
	},
	// seeExam  查看试卷详情
	seeExam:function(index,id){
		console.log(index,id)
		this.$router.push({
                    name:"MySeeExam",
                    params:{
						testindex:index,
						testid:id
                    }
       });
	}
  }
};
</script>

<style>
	.examTitle {
		width: 100%;
		height: 144px;
		background: linear-gradient(60deg, rgb(108, 196, 206), rgb(101, 241, 206));
	}
	
	.examTitle>div {
		width: 1100px;
		height: 144px;
		margin: auto;
		background: url(../../images/back03.png) no-repeat right 0px;
		background-size: 235px 140px;
	}
	
	.examTitle div div {
		min-width: 400px;
		color: #fff;
		font-size: 25px;
		margin-left: 40px;
		padding-top: 40px;
	}
	
	.examTitle div ul {
		overflow: hidden;
		margin-left: 40px;
		/*margin-top: 10px;*/
	}
	
	.examTitle ul li {
		float: left;
		padding-right: 10px;
		color: #fff;
		font-size: 14px;
	}
	/**/
	
	.eaxmMain {
		width: 1100px;
		margin: 10px auto;
		background: white;
		padding: 20px;
	}
	
	.exam {
		overflow: hidden;
		/*height:16px;*/
		font-family: HiraginoSansGB-W6;
		color: rgba(64, 64, 64, 1);
		margin-bottom: 10px;
	}
	
	.top {
		margin: 15px 0;
	}
	
	.exam span {
		float: left;
		height: 20px;
		line-height: 18px;
		font-size: 18px;
	}
	
	.redSquare {
		width: 6px;
		/*height:16px;*/
		background: skyblue;
		margin-right: 10px;
	}
	
	#exam .el-input {
		width: 217px;
	}
	
	.inputBox {
		font-size: 14px;
		margin-left: 40px;
	}
	
	.inputBox>div>span {
		/*border: red solid 1px ;*/
		display: inline-block;
		width: 100px;
		text-align: right;
	}
	
	.weekExam {
		margin-top: 20px;
	}
	
	#exam .explain {
		background: #ffe4d0;
		font-size: 12px;
		color: #ff7b61;
		padding: 6px 20px;
		margin-top: 20px;
	}
	
	.explain a {
		font-size: 12px;
		color: #087acf
	}
	
	.topN {
		margin: 20px 0;
	}
	
	.topN>p {
		display: inline-block;
		font-size: 12px;
		width: 138px;
		text-align: center;
		margin-left: 70px;
	}
	
	.topN i {
		font-size: 14px;
		margin-right: 5px;
	}
	
	.topN span {
		font-size: 30px;
		font-weight: bold;
		margin: 0 5px;
	}
	
	.topNum1 {
		color: #d693e2;
	}
	
	.topNum2 {
		color: #f4a9b9;
	}
	
	.topNum3 {
		color: #f8b596;
	}
	
	.topNum4,
	.topNum5 {
		color: #ababab;
	}
	
	.countNum1 {
		color: #cd1bc7;
	}
	
	.countNum2 {
		color: #ef5a80;
	}
	
	.countNum3 {
		color: #f47727;
	}
	
	.countNum4 {
		color: #5eebc0;
	}
	
	.countNum5 {
		color: #289bf4;
	}
	
	.listTable {
		overflow: hidden;
	}
	
	.listTable a {
		color: #7b7171;
		margin-right: 5px;
	}
	
	.listTable>div>span {
		font-size: 14px;
	}
	
	.listTable .el-select {
		margin-right: 35px;
	}
</style>