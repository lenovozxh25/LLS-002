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
			<div style="border-bottom: #F0F0F0 dashed 3px;">
				<p class="exam top"><span class="redSquare"></span><span>创建周考试卷</span></p>
				<div class="inputBox">
					<div style="margin-bottom: 20px;">
						<span>输入试卷名称：</span>
						<el-input v-model="input" placeholder="请输入内容"></el-input>
						<template>
							<span>选择班级：</span>
							<el-select v-model="value" placeholder="请选择班级(必选)">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
					<div>
						<template>
							<span>选择专业：</span>
							<el-select v-model="majorVal" placeholder="请选择专业(必选)">
								<el-option v-for="item in major" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</template>
						<template>
							<span>选择课程：</span>
							<el-select v-model="courseVal" placeholder="请选择课程(必选)">
								<el-option v-for="item in course" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</template>
						<template>
							<span>选择课时：</span>
							<el-select v-model="periodVal" placeholder="请选择课时(必选)">
								<el-option v-for="item in period" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
					<div style="margin-top: 20px;margin-bottom: 20px;">
						<span></span>
						<el-button type="primary">创建周考试卷</el-button>
					</div>
				</div>
			</div>
			<div class="weekExam">
				<p class="exam"><span class="redSquare"></span><span>周考试卷库</span></p>
				<div>
					<div class="explain">
						<span>说明:全国试卷贡献榜，根据贡献的份数进行排名，可查看全部排名<a href="#">查看详情</a></span>
					</div>
					<div class="topN">
						<p>
							<i class="topNum1">Top1</i> 石继峰
							<span class="countNum1">98</span>份
						</p>
						<p>
							<i class="topNum2">Top2</i> 李春涛
							<span class="countNum2">90</span>份
						</p>
						<p>
							<i class="topNum3">Top3</i> 王艳
							<span class="countNum3">78</span>份
						</p>
						<p>
							<i class="topNum4">Top4</i> 李建鹏
							<span class="countNum4">58</span>份
						</p>
						<p>
							<i class="topNum5">Top5</i> 张龙
							<span class="countNum5">44</span>份
						</p>
					</div>
				</div>
			</div>
			<div class="listTable">

				<div class="" style="margin: 20px;">
					<template>
						<span>来源：</span>
						<el-select v-model="majorVal" placeholder="全部">
							<el-option v-for="item in source" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
					<template>
						<span>专业：</span>
						<el-select v-model="courseVal" placeholder="全部专业">
							<el-option v-for="item in major" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
					<template>
						<span>课程：</span>
						<el-select v-model="periodVal" placeholder="全部课程">
							<el-option v-for="item in period" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</div>

				<template>
					<el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%;text-align: center;border:1px solid #f0f0f0">
						<el-table-column prop="number" label="序号" width="80" align="center">
						</el-table-column>
						<el-table-column prop="name" label="试卷名称" width="180" align="center">
						</el-table-column>
						<el-table-column prop="source" label="来源" width="60" align="center">
						</el-table-column>
						<el-table-column prop="major" label="专业" align="center">
						</el-table-column>
						<el-table-column prop="course" label="课程" width="120" align="center">
						</el-table-column>
						<el-table-column label="操作" align="center">
							<a href="#">
								<i class="el-icon-edit-outline"></i>发布考试
							</a>
							<a href="#">
								<i class="el-icon-view"></i>预览
							</a>
							<a href="javascript:return false;" style="opacity: 0.2;"><i class="el-icon-edit" disabled></i>编辑</a>
							<a href="javascript:return false;" style="opacity: 0.2;"><i class="el-icon-delete"></i>删除</a>
						</el-table-column>
					</el-table>
					<el-pagination style="float: right;" background :page-size="pageSize" :current-page="1" @current-change="current_change" layout="prev, pager, next" :total="totalNum">
					</el-pagination>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'exam',
		data() {
			return {
				input: '',
				options: [{
					value: '选项1',
					label: '17级01班'
				}, {
					value: '选项2',
					label: '18级01班'
				}, {
					value: '选项3',
					label: '16级01班'
				}, {
					value: '选项4',
					label: '17级02班'
				}, {
					value: '选项5',
					label: '01班'
				}],
				value: '',
				major: [{
					value: '1',
					label: '移动互联(web前端方向)'
				}],
				majorVal: '',
				course: [],
				courseVal: '',
				period: [],
				periodVal: '',
				source: [{
					value: "0",
					label: "全部"
				}, {
					value: '1',
					label: "公有测验"
				}, {
					value: "2",
					label: "私有测验"
				}],

				//表格数据

				tableData: [{
					number: 1,
					name: '04623每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 2,
					name: '0622每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 3,
					name: '0621每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 4,
					name: '0620每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 5,
					name: '0619每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 6,
					name: '0618每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 7,
					name: '0617每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 8,
					name: '0616每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 9,
					name: '0616每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 20,
					name: '0616每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}, {
					number: 11,
					name: '0616每日练习',
					source: '私有',
					major: '移动互联(web前端方向)',
					course: '前端框架(Vue)'
				}],
				totalNum: undefined,
				pageSize: 10,
				currentPage: 1

			}
		},
		created() {
			this.clic()
		},
		methods: {
			clic() {
				this.totalNum = this.tableData.length
			},
			current_change(currentPage) {
				this.currentPage = currentPage;
			}
		}
	}
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