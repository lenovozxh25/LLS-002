<template>
    <div id='MyCourseList'>
        <div class="courseTitle">
			<div>
				<div class="title1">
					<svg class="bookSvg" viewBox="0 0 1024 1024" width="30" height="30">
						<path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FF7575" p-id="23753"></path>
						<path d="M784.96 250.638933H546.4512c-15.170133 0-27.584 12.392533-27.584 27.537067v507.1168c0 9.559467 2.5088 9.832533 6.596267 9.832533 15.633067-9.9776 54.980267-28.1856 124.580266-28.1856 105.943467 0 120.48 25.339733 152.6592 25.339734 21.704533-7.421867 37.4272-28.0192 37.4272-52.117334V305.713067c0.002133-30.2912-24.8256-55.074133-55.170133-55.074134z" fill="#FEFFFA" p-id="23754"></path>
						<path d="M239.466667 250.638933h238.5088c15.170133 0 27.584 12.392533 27.584 27.537067v507.1168c0 9.559467-2.510933 9.832533-6.5984 9.832533-15.633067-9.9776-40.904533-29.723733-118.122667-32.7808-105.860267-4.189867-118.980267 16.925867-159.1168 16.925867-21.7024-7.419733-37.425067-21.514667-37.425067-45.6128V305.713067c0-30.2912 24.8256-55.074133 55.170134-55.074134z" fill="#FFDDD9" p-id="23755"></path>
						<path d="M253.442133 261.344h166.8288c30.2912 0 55.072-20.7488 55.072 9.5424l30.519467 501.019733c0 30.2912-42.8352-19.790933-120.855467-26.389333-84.3776-7.136-131.1808 8.413867-131.1808 8.413867-15.144533 0-27.537067-12.392533-27.537066-27.534934l-0.384-437.514666c0.002133-15.144533 12.392533-27.537067 27.537066-27.537067z" fill="#FFC5C4" p-id="23756"></path>
						<path d="M290.1632 223.101867h160.322133c30.2912 0 55.074133 24.782933 55.074134 55.072v488.379733c0 30.286933-39.8528-29.736533-117.8752-36.334933-84.375467-7.136-97.521067-0.576-97.521067-0.576-15.144533 0-27.537067-12.392533-27.537067-27.534934V250.638933c0-15.146667 12.392533-27.537067 27.537067-27.537066z" fill="#FEFFFA" p-id="23757"></path>
						<path d="M791.0464 295.095467c-4.187733-3.3728-44.878933-8.0448-110.3936-8.0448s-106.208 4.672-110.3936 8.0448c0.16-0.130133 0.618667-0.701867 0.618667-1.602134h-6.8864c0-3.965867 2.730667-7.488 36.305066-10.417066 21.480533-1.8752 50.016-2.907733 80.356267-2.907734 30.338133 0 58.8736 1.032533 80.356267 2.907734 33.570133 2.9312 36.302933 6.4512 36.302933 10.417066h-6.884267c0 0.900267 0.456533 1.474133 0.618667 1.602134zM791.0464 362.8608c-4.187733-3.3728-44.878933-8.0448-110.3936-8.0448s-106.208 4.672-110.3936 8.0448c0.16-0.130133 0.618667-0.701867 0.618667-1.604267h-6.8864c0-3.965867 2.730667-7.485867 36.305066-10.417066 21.480533-1.8752 50.016-2.907733 80.356267-2.907734 30.338133 0 58.8736 1.032533 80.356267 2.907734 33.570133 2.9312 36.302933 6.4512 36.302933 10.417066h-6.884267c0 0.9024 0.456533 1.474133 0.618667 1.604267zM791.0464 430.624c-4.187733-3.3728-44.878933-8.0448-110.3936-8.0448s-106.208 4.672-110.3936 8.0448c0.16-0.130133 0.618667-0.701867 0.618667-1.602133h-6.8864c0-3.965867 2.730667-7.488 36.305066-10.417067 21.480533-1.8752 50.016-2.909867 80.356267-2.909867 30.338133 0 58.8736 1.032533 80.356267 2.909867 33.570133 2.929067 36.302933 6.4512 36.302933 10.417067h-6.884267c0 0.9024 0.456533 1.474133 0.618667 1.602133zM791.0464 498.389333c-4.187733-3.3728-44.878933-8.0448-110.3936-8.0448s-106.208 4.672-110.3936 8.0448c0.16-0.130133 0.618667-0.701867 0.618667-1.602133h-6.8864c0-3.965867 2.730667-7.488 36.305066-10.417067 21.480533-1.8752 50.016-2.907733 80.356267-2.907733 30.338133 0 58.8736 1.032533 80.356267 2.907733 33.570133 2.9312 36.302933 6.4512 36.302933 10.417067h-6.884267c0 0.900267 0.456533 1.474133 0.618667 1.602133zM791.0464 566.154667c-4.187733-3.3728-44.878933-8.0448-110.3936-8.0448s-106.208 4.672-110.3936 8.0448c0.16-0.132267 0.618667-0.701867 0.618667-1.604267h-6.8864c0-3.963733 2.730667-7.485867 36.305066-10.417067 21.480533-1.8752 50.016-2.907733 80.356267-2.907733 30.338133 0 58.8736 1.032533 80.356267 2.907733 33.570133 2.9312 36.302933 6.4512 36.302933 10.417067h-6.884267c0 0.9024 0.456533 1.472 0.618667 1.604267zM791.0464 633.92c-4.187733-3.374933-44.878933-8.0448-110.3936-8.0448s-106.208 4.669867-110.3936 8.0448c0.16-0.132267 0.618667-0.704 0.618667-1.6064h-6.8864c0-3.963733 2.730667-7.485867 36.305066-10.414933 21.480533-1.879467 50.016-2.907733 80.356267-2.907734 30.338133 0 58.8736 1.028267 80.356267 2.907734 33.570133 2.929067 36.302933 6.449067 36.302933 10.414933h-6.884267c0 0.9024 0.456533 1.476267 0.618667 1.6064zM791.0464 701.681067c-4.187733-3.3728-44.878933-8.0448-110.3936-8.0448s-106.208 4.669867-110.3936 8.0448c0.16-0.130133 0.618667-0.699733 0.618667-1.604267h-6.8864c0-3.963733 2.730667-7.485867 36.305066-10.414933 21.480533-1.877333 50.016-2.909867 80.356267-2.909867 30.338133 0 58.8736 1.032533 80.356267 2.909867 33.570133 2.929067 36.302933 6.449067 36.302933 10.414933h-6.884267c0 0.904533 0.456533 1.476267 0.618667 1.604267z" fill="#FFDDD9" p-id="23758"></path>
					</svg>
					{{this.$route.params.name}}
				
				</div>
				<div class="title2">{{this.$route.params.name}}</div>
			</div>
		</div>
        <div class="courseTest"> 
            <p class="major top"><span class="redSquare"></span><span>专业介绍</span></p>
            <ul>
              <li v-for="(course,index) in MyCourseList" :key='index'>
				  <!-- courseId,typeId,name,itemName -->
                <a href="#" @click.prevent="getMyCourse(course.id,1,course.name)">1.{{index+1}}&nbsp;&nbsp;&nbsp;&nbsp;{{course.name}}</a>
				<div style="float:right">
					
					<!-- courseId,name,typeId,itemName -->
					<span @click="toMyStudentCourse(course.id,course.name,item.id,item.name)" class="z-study" v-for="(item,index) in MyMaterialData" :key='index'>
					{{item.name}}
				</span>
				</div>
                <!-- {{course.id}} -->
              </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
export default {
	name: 'myCourseList',
    data(){
        return{
			MyMaterialData:[], //课程资料列表数据
            MyCourseList:''   //对应课程列表
        }
    },
    methods:{
        // 获取对应列表
        getMyCourseList(itemId){
				var app = this;
				this.$http
					.get(`/product/majorCustomCourse/getListByItemId/${itemId}`)
					.then(function(res) {
						app.MyCourseList=res.data;
					});
            },
        //获取对应课程
        getMyCourse(courseId,typeId,name,itemName){
            this.$router.push({  
					 name:'myCourse',
					 params:{
							 courseId:courseId,
							 typeId:typeId?typeId:1,
							 name:name,
							 itemName:itemName?itemName:'教学视频'
					 }
				 })
		},
		//获取课程资料列表
			getMyMaterial(){
				var app = this;
				this.$http
					.get('/product/materialType/listForAble')
					
					.then(function(res) {
						app.MyMaterialData=res.data;
						
					});
			},
		//点击教学视频 精品课件 课堂案例 企业问答 其它资料等跳转到相对应的资料
		//跳转到下一个页面，并且传参数
			toMyStudentCourse(courseId,name,typeId,itemName){
            this.$router.push({  
					 name:'myStudentCourse',
					 params:{
							 courseId:courseId,
							 name:name,
							 typeId:typeId?typeId:1,
							 itemName:itemName
					 }
				 })
		   }
			
    },
    created(){
        this.getMyMaterial();
        this.getMyCourseList(this.$route.params.itemId);
	},
	watch:{
      $route:function(to,from){
		// console.log(to.params)
		this.getMyCourseList(to.params.itemId)
        
      }
     }
}
</script>

<style>
	.courseTitle {
		width: 100%;
		height: 144px;
		background: linear-gradient(60deg, #91b0ed, #e67df4);
		position: relative;
	}
	
	.courseTitle>div {
		width: 1100px;
		height: 144px;
		margin: auto;
		text-align: center;
		color: #fff;
	}
	
	.courseTitle div .title1 {
		min-width: 400px;
		font-size: 30px;
		padding-top: 40px;
		line-height: 75px;
	}
	
	.courseTitle .title2 {
		text-align: center;
		font-size: 60px;
		position: absolute;
		left: 50%;
		margin-left: -180px;
		top: 50%;
		margin-top: -46px;
		opacity: 0.15;
	}
	
	.bookSvg {
		position: absolute;
		left: 34%;
		top: 43%;
	}
	
	.courseTest {
		width: 1100px;
		margin: auto;
	}
    .courseTest li{
        background: #F5F4F9;
        color: #606060;
        height: 32px;
        background: #f5f4f9;
        margin-bottom: 4px;
        text-indent: 20px;
        line-height: 32px;
    }
    .courseTest li>a {
        color: #606060;
        width: 270px;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 32px;
        text-indent: 0px;
    }
	.z-study {
    line-height: 32px;
    /* float: right; */
    /* border: 1px solid #d4d4d4; */
    margin-left: 3px;
    font-size: 14px;
    text-indent: 0;
    padding: 0 6px;
    color: #808080;
    cursor: pointer;
    height: 32px;
    width: 90px;
    position: relative;
}
</style>


