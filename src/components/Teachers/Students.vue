<template>
	<div id="students" style="background: #f5f5f7;padding-bottom: 20px;">
		<div class="studentTitle">
			<div>
				<div>
					学员管理
				</div>
				<ul>
					<li>真实客观统计学员数据 </li>
					<li>贴近学员生活学习 </li>
					<li>记录学生成长</li>
				</ul>
			</div>
		</div>
		<div class="stuMain">
			<div>
				<template>
					<p class="stuMsg top"><span class="redSquare"></span><span>学员管理</span></p>
					<el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left" >
                        <el-tab-pane :label="'北信息'+item.name" :name='item.id.toString()' v-for="(item,index) in CurrentClassList" :key='index'>
							 <el-table
								:data="CurrentStudentList.filter(data => !search || data.userName.toLowerCase().includes(search.toLowerCase()))"
								style="width: 100%">
								<el-table-column
								label="姓名"
								prop="userName">
								</el-table-column>
								<el-table-column
								label="电话"
								prop="mobile">
								</el-table-column>
								
								<el-table-column
								label="邮箱"
								prop="email">
								</el-table-column>
								<el-table-column
								align="right">
								<template slot="header" slot-scope="scope">
									<el-input
									v-model="search"
									
									placeholder="请输入您要搜索的学生姓名"/>
								</template>
				
								</el-table-column>
							</el-table>
						</el-tab-pane>
					     <el-button type="success">新增学生</el-button>
					</el-tabs>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'students',
		data() {
			return {
				activeName:'37',
				// 讲师所带过的所有班级
				CurrentClassList:[],
				// 班级学生
				CurrentStudentList:[
					
				],
				tabs:["第一学期","第二学期","第三学期","第四学期","第五学期"],
				num:'',
				tabs2:["第一学期","第二学期","第三学期","第四学期"],
				// tableData: [],
				search: ''
			}
		},
		methods: {
			handleClick(tab){
				// console.log(tab.name);
				var tabId=parseInt(tab.name)
				this.getCurrentStudent(tabId)
			},
			formatter(row, column) {
				return row.address;
			},
			
			tab:function (index) {
				this.num = index;
			},

			// 获取讲师所带过的所有班级
			getCurrentClass(teacherId){
				var app = this;
				this.$http
					.get(`/business/organClassUser/allClassListByTeacherId/${teacherId}`)
					.then(function(res) {
						app.CurrentClassList=res.data;
						console.log(app.CurrentClassList);
					});
			},
			//根据班级获取学生
			getCurrentStudent(classId){
				var app = this;
				this.$http
					.get(`/business/organDuty/getStudentListByClassId/${classId?classId:app.CurrentClassList[0].id}`)
					.then(function(res) {
						app.CurrentStudentList=res.data;
						console.log(app.CurrentStudentList);
					});
			}
   
		},
		created(){
			this.userId = window.localStorage.getItem("userId");
			this.getCurrentClass(this.userId);
			this.getCurrentStudent(37);
		}
	}
</script>

<style>
	#students .studentTitle {
		width: 100%;
		height: 144px;
		background: linear-gradient(60deg, rgb(218, 63, 88), rgb(255, 85, 111));
	}
	
	#students .studentTitle>div {
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
	
	#students .semester {
		overflow: hidden;
	}
	
	#students .semester ul li {
		font-size: 14px;
		border: 1px solid #c0c0c0;
		float: left;
		width: 169px;
		line-height: 30px;
		text-align: center;
	}
	
	#students .semester ul li:not(.oneT) {
		border-left: none;
	}
	#students .semester ul li:hover{
		cursor: pointer;
	}
	#students .semester ul li.active {
		background: #49c0e0;
		color: white;
		border-color: #49c0e0;
	}
	
	#students .tableData .el-input {
		width: auto;
	}
	
	#students .tableData .el-input-group__append {
		background: #49c0e0;
		border: 1px solid #49c0e0;
		color: white;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	
	#students .tableData .el-input__inner {
		height: 35px;
	}
	
	#students .tableData .searchInfo {
		margin-top: 20px;
		border-bottom: 1px dashed #F0F0F0;
		padding-bottom: 20px;
	}
	
	#students .tableData .searchInfo>div {
		display: inline-block;
	}
	
	#students .tableData .searchInfo>div a {
		font-size: 14px;
		color: white;
		background: #4ac0e0;
		display: inline-block;
		width: 120px;
		height: 28px;
		line-height: 28px;
		text-align: center;
	}
	
	#students .targetT {
		background: #f5f5f5;
		overflow: hidden;
		color: #2eadcd;
		/*border: 1px solid red;*/
		margin-top: 10px;
		padding: 7px 0 3px 0;
	}
	
	#students .icon {
		display: inline-block;
		margin-left: 10px;
	}
	
	#students .targetT ul {
		display: inline-block;
	}
	
	#students .targetT ul li {
		font-size: 14px;
		float: left;
		margin-right: 40px;
	}
	
	#students .statistics {
		border-bottom: 1px dashed #F0F0F0;
		padding-bottom: 20px;
		margin-top: 20px;
	}
	
	#students .statistics>div {
		display: inline-block;
		font-size: 14px;
		width: 136px;
		text-align: center;
	}
	
	#students .statistics>div i {
		font-size: 30px;
		font-weight: 900;
	}
	
	#students .i1 {
		color: #5ce5f7;
	}
	
	#students .i2 {
		color: #ef597f;
	}
	
	#students .i3 {
		color: #f67611;
	}
	
	#students .i4 {
		color: #59ecbf;
	}
	
	#students .i5 {
		color: #ed59ed;
	}
	
	#students .i6 {
		color: #f67611;
	}
	
	#students .caoZuo a {
		margin-left: 40px;
		color: #1890ff;
	}
</style>