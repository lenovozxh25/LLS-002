<template>
	<div id="myMahor">
		<div class="mahorTitle">
			<div>
				<div>
					移动互联(web前端方向)
				</div>
				<ul>
					<li>共5个学期</li>
					<li>14门课程</li>
					<li>514节课时</li>
				</ul>
			</div>
		</div>
		<el-collapse v-model="activeNames">
			 <p class="major top"><span class="redSquare"></span><span>专业介绍</span></p>
			 <p class="major"><span class="redSquare"></span><span>专业章节</span></p>
			<el-collapse-item title="第一学期" name="1">
				<div>
					<a href="#">WEB前端基础(HTML+CSS)</a>
				</div>
				<div>
					<a href="#">操作系统应用(Linux)</a>
				</div>
				<div>
					<a href="#">编程语言基础(PHP)</a>
				</div>
			</el-collapse-item>
			<el-collapse-item title="第二学期" name="2">
				<div>
					<a href="#">脚本语言基础(JavaScript)</a>
				</div>
				<div>
					<a href="#">WEB前端高级(HTML5+CSS3)</a>
				</div>
				<div>
					<a href="#">数据库基础(MySQL)</a>
				</div>
			</el-collapse-item>
			<el-collapse-item title="第三学期" name="3">
				<div>
					<a href="#">服务端应用开发(PHP)</a>
				</div>
				<div>
					<a href="#">脚本语言高级(jQuery+Ajax)</a>
				</div>
				<div>
					<a href="#">响应式设计(Bootstrap)</a>
				</div>
			</el-collapse-item>
			<el-collapse-item title="第四学期" name="4">
				<div>
					<a href="#">前端框架(Vue)</a>
				</div>
				<div>
					<a href="#">Vue项目实战</a>
				</div>
				<div>
					<a href="#">Node.js</a>
				</div>
			</el-collapse-item>
			<el-collapse-item title="第五学期" name="5">
				<div>
					<a href="#">就业岗前冲刺</a>
				</div>
				<div>
					<a href="#">全真项目实训</a>
				</div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	export default {
		name: 'myMajor',
		data() {
			return {
				activeNames: ['1', '2', '3', '4', '5']
			};
		},
		methods: {
			handleChange(val) {
				console.log(val);
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	ul li{list-style: none;}
	#myMahor .el-collapse-item .el-collapse-item__header {
		background: skyblue;
		padding-left: 50px;
		color: white;
		font-size: 23px;
	}
	
	#myMahor a {
		color: #6c6868;
		font-size: 16px;
	}
	
	#myMahor a:hover {
		color: skyblue;
	}
	
	.el-main {
		text-align: left;
		/*line-height: 30px;*/
	}
	.el-collapse{
		width: 1100px;
		margin: auto;
	}
	.el-collapse-item__content {
		padding-left: 50px;
		padding-top: 20px;
	}
	.mahorTitle{
		width: 100%;
		height: 144px;
		background:#89db96
	}
	.mahorTitle>div{
		width: 1100px;
		height: 144px;
		margin: auto;
		background: url(../../images/download.png) no-repeat right -20px;
		padding: 45px 50px 0px 110px;
	}
	.mahorTitle div div{
		min-width: 400px;
	    color: #fff;
	    font-size: 25px;
	}
	.mahorTitle div ul{
		overflow: hidden;
		/*margin-top: 10px;*/
	}
	.mahorTitle ul li{
		float: left;
		padding-right: 10px;
    	color: #fff;
    	font-size: 14px;
	}
	.major{
		overflow: hidden;
	    /*height:16px;*/
	    font-family:HiraginoSansGB-W6;
	    color:rgba(64,64,64,1);
	    margin-bottom: 10px;
	}
	.top{
		margin: 30px 0;
	}
	.major span{
      float: left;
      height: 18px;
      line-height: 1;
    }
	.redSquare{
      width:6px;
      /*height:16px;*/
      background:skyblue;
      margin-right: 10px;
    }
</style>