<template>
	<div id="myMahor">
		<div class="mahorTitle">
			<div>
				<div>
					<!-- 移动互联(web前端方向) -->
					{{MajorCustomData.majorTypeName}}
				</div>
				<ul>
					<li>共8个学期</li>
					<li>14门课程</li>
					<li>514节课时</li>
				</ul>
			</div>
		</div>
		<el-collapse v-model="activeNames">
			 <p class="major top"><span class="redSquare"></span><span>专业介绍</span></p>
			 <p class="major"><span class="redSquare"></span><span>专业章节</span></p>
			 <div v-for="(item,index) in MajorCustomData.majorCustomItemTreeAdapterList" :key='index'>
				 <!-- <span>{{item}}</span> -->
				 <!-- {{index}} -->
				 <el-collapse-item :title="item.name" :name="index">
					<div v-for='(itemMajor,index) in item.childList' :key='index'>
						<a href="#" @click.prevent="toMyCourseList(itemMajor.id,itemMajor.name)">{{itemMajor.name}}</a>
					</div>
				</el-collapse-item>
			 </div>
		
		</el-collapse> 
	</div>
</template>

<script>
	export default {
		name: 'myMajor',
		data() {
			return {
				activeNames: [0,1,2,3,4,5,6,7],
				MajorCustomData:''
			};
		},
		methods: {
			//获取该教师的专业
			getMajorCustom(userId){
				var app = this;
				this.$http
					.get(`/product/majorCustom/getMajorCustomByUser/${userId}`)
					.then(function(res) {
						app.MajorCustomData=res.data[0];
						// console.log(res.data[0])
					});
			},
			toMyCourseList(itemId,name){
				 this.$router.push({  
					 name:'myCourseList',
					//  path:'/teacher/MyCourseList',
					 params:{
							 itemId:itemId,
							 name:name
					 }
				 })
			}
			
		},
		created(){
			this.userId = window.localStorage.getItem("userId");
			this.getMajorCustom(this.userId);
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