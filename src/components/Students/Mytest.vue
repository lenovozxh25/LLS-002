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
            <el-tab-pane label="期末测验" name="first">
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <span style="margin-top:20px;">期末测试</span>
			        </p>
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="proName" label="课时名称" width="250"></el-table-column>
                        <el-table-column prop="testName" label="考试名称" width="180"></el-table-column>
                        <el-table-column prop="testNumber" label="满分"></el-table-column>
                        <el-table-column prop="detail" label="详情"></el-table-column>
                        <el-table-column prop="detail" label="操作">
                              <i class="el-icon-view"></i><el-tag v-on:click="edit" size="medium">查看试卷</el-tag>                           
                        </el-table-column>
                    </el-table>
		        </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="每周测验" name="second">
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <span style="margin-top:20px;">每周测验</span>
			        </p>
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="proName" label="课时名称" width="250"></el-table-column>
                        <el-table-column prop="testName" label="考试名称" width="180"></el-table-column>
                        <el-table-column prop="testNumber" label="满分"></el-table-column>
                        <el-table-column prop="detail" label="详情"></el-table-column>
                        <el-table-column prop="detail" label="操作">
                              <i class="el-icon-view"></i><el-tag v-on:click="edit" size="medium">查看试卷</el-tag>                           
                        </el-table-column>
                    </el-table>
		        </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="小测验" name="third">
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <span style="margin-top:20px;">小测验</span>
			        </p>
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="proName" label="课时名称" width="250"></el-table-column>
                        <el-table-column prop="testName" label="考试名称" width="180"></el-table-column>
                        <el-table-column prop="testNumber" label="满分"></el-table-column>
                        <el-table-column prop="detail" label="详情"></el-table-column>
                        <el-table-column prop="detail" label="操作">
                              <i class="el-icon-view"></i><el-tag v-on:click="edit" size="medium">查看试卷</el-tag>                           
                        </el-table-column>
                    </el-table>
		        </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="每日练习" name="fourth">
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <span style="margin-top:20px;">每日练习</span>
			        </p>
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="proName" label="课时名称" width="250"></el-table-column>
                        <el-table-column prop="testName" label="考试名称" width="180"></el-table-column>
                        <el-table-column prop="testNumber" label="满分"></el-table-column>
                        <el-table-column prop="detail" label="详情"></el-table-column>
                        <el-table-column prop="detail" label="操作">
                              <i class="el-icon-view"></i><el-tag v-on:click="edit" size="medium">查看试卷</el-tag>                           
                        </el-table-column>
                    </el-table>
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
                activeNames: ['1', '2', '3', '4', '5'],
                z_p_testName: 'first',
                tableData: [{
                    proName: 'WEB前端基础(HTML+CSS)',
                    testName: 'Web前端基础期末',
                    testNumber: '100',
                    detail: '64',
                    handle: '查看试卷'
                    }, {
                    proName: 'WEB前端基础(HTML+CSS)',
                    testName: 'Web前端基础期末',
                    testNumber: '100',
                    detail: '64',
                    handle: '查看试卷'
                    },{
                    proName: 'WEB前端基础(HTML+CSS)',
                    testName: 'Web前端基础期末',
                    testNumber: '100',
                    detail: '64',
                    handle: '查看试卷'
                    }, {
                    proName: 'WEB前端基础(HTML+CSS)',
                    testName: 'Web前端基础期末',
                    testNumber: '100',
                    detail: '64',
                    handle: '查看试卷'
                }]
			};
		},
		methods: {
			handleChange(val) {
				console.log(val);
            },
            handleClick(tab, event) {
                console.log(tab, event);
			},
			edit(){
				console.log("1");
			}
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