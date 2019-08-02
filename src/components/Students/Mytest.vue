<template>
	
	<div id="myStuMajor">
		<div class="mahorTitle">
			<div>
				<div>
					<span style="display:block;">我的考试</span>
                    <span style="font-size:16px;">记录我在联想班的考试成绩以及学校的考试成绩各个方面的表现与进步积极向上 努力进取 养成习惯 成长为未来社会栋梁</span>
				</div>
				
			</div>
		</div>
        <el-tabs class="z_p_tab" type="border-card" v-model="z_p_testName" @tab-click="handleClick">
            <el-tab-pane v-for="item in testType" :key="item.id" :label="item.name" :name="item.name">
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <span style="margin-top:20px;">考试列表</span>
			        </p>
                    <el-row>
                        <el-button style="width:21%;"  type="primary" disabled>班级名称</el-button>
                        <el-button style="width:15%;"  type="primary" disabled>考试名称</el-button>
                        <el-button style="width:15%;" type="primary" disabled>开考时间</el-button>
                        <el-button style="width:9%;" type="primary" disabled>考试时长</el-button>
                        <el-button style="width:15%;" type="primary" disabled>结束时间</el-button>
                        <el-button style="width:16%;" type="primary" disabled>操作</el-button>
                    </el-row>
                    <el-row style="margin:5px auto" v-if="testData" v-for="item in testData" :key="item.name">
                        <el-button style="width:21%;" type="info">{{item.className}}</el-button>
                        <el-button style="width:15%;"  type="info">{{item.name}}</el-button>
                        <el-button style="width:15%;" type="info">{{item.startTime}}</el-button>
                        <el-button style="width:9%;" type="info">{{item.duration}}</el-button>
                        <el-button style="width:15%;" type="info" >{{item.endTime}}</el-button>
                        <el-button data-testId="item.id"  v-if="item.isTimeOut" style="width:16%;" type="primary">
                            查看试卷
                        </el-button>
                        <el-button :data-testId="item.id" v-else style="width:16%;" type="warning" >
                            <el-tag v-if="item.isStart">考试还未开始</el-tag>
                            <el-tag v-else type="warning" v-on:click="startTest(item.id)">考试已经开始啦</el-tag>
                        </el-button>
                    </el-row>
		        </el-collapse>
            </el-tab-pane>
        </el-tabs>
		
	</div>
</template>

<script>
	export default {
		name: 'myStuMajor',
		data() {
			return {
                nDate: null, //当前系统时间
                page: 1, //当前第几页
                pageSize: 5, //反馈每页的数据条数
                nums: null, //反馈总消息数
                activeNames: ['1', '2', '3', '4'],
                z_p_testName: "每日一练",
                typeId:1,      //考试类型
                testType:null,  //考试类型
                testData: []    //考试数据
			};
		},
		methods: {
			handleChange(val) {
				console.log(val);
            },
            handleClick(tab) {
                var typeId = parseInt(tab.index)
                typeId++;
                // console.log(typeId);
                this.getTestData(typeId);
			},
			edit(){
				console.log("1");
            },
            // 获取考试数据
            getTestData(typeId){
                //获取考试数据  testData
                var app = this;
                app.$http.post("/business/examPlan/studentPage", {
                    "page": this.page,
                    "pageSize": this.pageSize,
                    "params": { 
                        "typeId": typeId
                    }
                })
                .then(function(res){
                    app.testData = res.data.data;       
                    console.log(app.testData);           
                    for(var i=0; i<app.testData.length; i++){              
                        // console.log(Number(app.nDate));
                        //下面几行是将字符串时间转换成时间戳 再做比较  判断是否已经考完的考试
                        var endDate = app.testData[i].endTime;
                        endDate = endDate.substring(0,19);    
                        endDate = endDate.replace(/-/g,'/'); 
                        var endDate = new Date(endDate).getTime();
                        // console.log(endDate);
                        if(Number(app.nDate) > endDate){
                            app.testData[i].isTimeOut = true;
                        }else{
                            app.testData[i].isTimeOut = false;
                        }



                        // 判断是显示考试还没开始 还是已经开始去考试
                        var startTime = app.testData[i].startTime;
                        startTime = startTime.substring(0,19);    
                        startTime = startTime.replace(/-/g,'/'); 
                        var startTime = new Date(startTime).getTime();
                        // console.log(endDate);
                        if(Number(app.nDate) < startTime){
                            app.testData[i].isStart =true;
                        }else{
                            app.testData[i].isStart = false;
                        }
                        console.log(app.testData[i].isStart)

                    }
                });
            },

            // 开始考试效果
            startTest(testid){
                // console.log(testid);
                this.$router.push({
                    name:"StartTest",
                    params:{
                        testid:testid
                    }
                });
            }
        },
        created(){
            var nDate =new Date();
            this.nDate = nDate;
            //获取试卷类型集合testType    /business/examType/listAll
            this.$http.get("/business/examType/listAll").then((res)=>{
                // console.log(res)
                this.testType = res.data;
            });

            // 获取考试数据
            this.getTestData(this.typeId);

            
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
        text-align: center;
		width: 100%;
		height: 144px;
		background:#67E1CE
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
    .el-tabs /deep/ .el-tabs__nav{
        margin-left: 140px;
    }
    

</style>