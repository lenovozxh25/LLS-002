<template>
	<div id="myStuMajor">
		<div class="mahorTitle">
			<div>
				<div>
					<span>移动互联(web前端方向)</span>
				</div>
				<ul>
					<li>
						共<span>5</span>个学期
					</li>
					<li>
						<span>5</span>门课程
					</li>
					<li>
						<span>5</span>节课时
					</li>
				</ul>
			</div>
		</div>
		<el-collapse v-model="activeNames" >
			 <p class="major" style="height:50px;line-height:50px;overflow:hidden">
				 <span class="redSquare"></span>
			     <span style="margin-top:20px;">专业章节</span>
				 <span style="float:right"><el-button type="primary">课表下载</el-button></span>	 
			 </p>
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
		</el-collapse>
	</div>
</template>

<script>
	export default {
		name: 'myStuMajor',
		data() {
			return {
				activeNames: ['1', '2', '3', '4', '5']
			}
		},
		methods: {
			handleChange(val) {
				console.log(val);
			}
		},
		created:function(){
			this.$http.get('/product/userMajorCustom/getStudentMajorCustomAdapter').then(function(response) {
					console.log(response);
				})
		}
	}
</script>

<style scoped>
	 
	
	ul li{list-style: none;}
	#myStuMajor .el-collapse-item .el-collapse-item__header {
		background: skyblue;
		padding-left: 50px;
		color: white;
		font-size: 23px;
	}
	
	#myStuMajor a {
		color: #6c6868;
		font-size: 16px;
	}
	
	#myStuMajor a:hover {
		color: skyblue;
	}
	
	#myStuMajor .el-main {
		text-align: left;
		/*line-height: 30px;*/
	}
	#myStuMajor .el-collapse{
		width: 1100px;
		margin: auto;
	}
	#myStuMajor .el-collapse-item__content {
		padding-left: 50px;
		padding-top: 20px;
	}
	#myStuMajor .mahorTitle{
		width: 100%;
		height: 144px;
		background:#89db96
	}
	#myStuMajor .mahorTitle>div{
		width: 1100px;
		height: 144px;
		margin: auto;
		background: url(../../images/download.png) no-repeat right -20px;
		padding: 45px 50px 0px 110px;
	}
	#myStuMajor .mahorTitle div div{
		min-width: 400px;
	    color: #fff;
	    font-size: 25px;
	}
	#myStuMajor .mahorTitle div ul{
		overflow: hidden;
		/*margin-top: 10px;*/
	}
	#myStuMajor .mahorTitle ul li{
		float: left;
		padding-right: 10px;
    	color: #fff;
    	font-size: 14px;
	}
	#myStuMajor .major{
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
	  margin-top:20px;
      width:6px;
      /*height:16px;*/
      background:skyblue;
      margin-right: 10px;
    }

</style>