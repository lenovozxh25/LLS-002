<template>
	<div id="myMahor">
		<div class="mahorTitle">
			<div>
				<div>
					<!-- 显示具体专业 -->
					{{MajorCustomData.majorTypeName}}
				</div>
				<ul>
					<!-- 显示多少个学期 -->
					<li>共 {{majorCustomItemTreeAdapterList}} 个学期</li>
				</ul>
			</div>
		</div>
		<el-collapse v-model="activeNames">
			 <p class="major top"><span class="redSquare"></span><span>专业介绍</span></p>
			 <p class="major"><span class="redSquare"></span><span>专业章节</span></p>
			 <!-- 遍历专业相关数据-->
			 <div v-for="(item,index) in MajorCustomData.majorCustomItemTreeAdapterList" :key='index'>
				 <!-- element的折叠显示文字放在title上，name方便区分到底点击是哪一个  -->
				 <el-collapse-item :title="item.name" :name="index">
					 <!-- 学期下面的具体专业遍历 -->
					<div v-for='(itemMajor,index) in item.childList' :key='index'>
						<!-- 点击专业跳转到相关专业列表 -->
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
				activeNames: [0,1,2,3,4,5,6,7], //el-collapse自带属性，表示name绑定哪个不折叠，展示
				MajorCustomData:[],  //专业相关所有数据
				majorCustomItemTreeAdapterList:'' //专业下面的学期的长度
			};
		},
		methods: {
			//获取该教师的专业
			getMajorCustom(userId){
				var app = this;
				this.$http
					// .get(`/product/majorCustom/getMajorCustomByUser/${userId}`)
					.get('/product/majorCustom/getMajorCustomForCurrentUser')
					.then(function(res) {
						//本意可以直接使用res.data,但是由于数据过多建议使用第一条数据即可
						app.MajorCustomData=res.data[0];
                        app.majorCustomItemTreeAdapterList=res.data[0].majorCustomItemTreeAdapterList.length
						
					});
			},
			//跳转到MyCourseList页面
			//动态路由参数传参itemId，name。其中name是为了方便显示到底是哪个专业
			toMyCourseList(itemId,name){
				 this.$router.push({  
					 name:'myCourseList',
					 params:{
							 itemId:itemId,
							 name:name
					 }
				 })
			}
			
		},
		created(){
			//获取登录用户的id
			this.userId = window.localStorage.getItem("userId");
			//页面加载即获取专业
			this.getMajorCustom(this.userId);
		}
	}
</script>

<style>
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
	
	#myMahor .el-main {
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
	#myMahor .mahorTitle>div{
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