<template>
	
	<div id="myStuMajor">
		<div class="mahorTitle">
			<div>
				<div>
					<span>WEB前端基础(HTML+CSS)</span>
				</div>
				
			</div>
		</div>
        <div class="z_p_title">
            <span>第一学期</span>—<span>WEB前端基础(HTML+CSS)</span>
        </div>
		<el-collapse v-model="activeNames" >
			 <p class="major" style="height:50px;line-height:50px;overflow:hidden">
				 <span class="redSquare"></span>
			     <span style="margin-top:20px;">课程章节</span>
				 <span style="float:right"><el-button type="primary">查看我的作业列表</el-button></span>
                 <span style="float:right"><el-button type="primary" class="z_p_test">开始考试</el-button></span>	 
			 </p>
			<el-collapse-item title="第一阶段" name="1">
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
            <el-collapse-item title="第二阶段" name="2">
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
        text-align: center;
		width: 100%;
		height: 144px;
		background:#DB84F3
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

    /* ------------------------------- */
    .z_p_title{
        background: #E4E9EC;
        height: 24px;;
        color:#303030;
        font-size: 16px;
        line-height: 24px;
        padding-left: 122px;
    }
    .z_p_test{
        margin-right: 20px;
    }

</style>