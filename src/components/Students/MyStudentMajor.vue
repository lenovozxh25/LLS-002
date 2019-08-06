<template>
	<div id="myStuMajor">
		<div class="mahorTitle">
			<div>
				<div>
					<span>{{studentMyMajorData.majorTypeName}}</span>
				</div>
				<ul>
					<li>
						共<span>{{majorCustomItemTreeAdapterListleng}}</span>个学期
					</li>
				
				</ul>
			</div>
		</div>
		<el-collapse v-model="activeNames" >
			 <p class="major" style="height:50px;line-height:50px;overflow:hidden">
				 <span class="redSquare"></span>
			     <span style="margin-top:20px;">专业章节</span>
				</p>
				<div v-for="(item,index) in studentMyMajorData.majorCustomItemTreeAdapterList" :key='index'>
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
		name: 'myStuMajor',
		data() {
			return {
				activeNames: [0,1,2,3,4,5,6,7],
				studentMyMajorData:[],
				majorCustomItemTreeAdapterListleng:''
			}
		},
		methods: {
			getStudentMyMajor(){
				  var app=this;
					this.$http.get('/product/majorCustom/getMajorCustomForCurrentUser').then(function(response) {
								// console.log(response.data);
								app.studentMyMajorData=response.data[0]
								app.majorCustomItemTreeAdapterListleng=response.data[0].majorCustomItemTreeAdapterList.length
					})
			},
			toMyCourseList(itemId,name){
				 this.$router.push({  
					 name:'myStudentCourseList',
					 params:{
							 itemId:itemId,
							 name:name
					 }
				 })
			}
		},
		created:function(){
			this.getStudentMyMajor()
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