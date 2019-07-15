<template>
	
	<div id="myStuMajor">
		<div class="mahorTitle">
			<div>
				<div>
					<span style="display:block;">消息中心</span>
                    <span style="font-size:16px;">记录我在联想班课程的消息提示 已读未读状态等
积极参与 主动贡献 养成习惯 成长为未来社会的栋梁</span>
				</div>
			</div>
		</div>
         <p class="major" style="height:50px;line-height:50px;overflow:hidden;margin-bottom:6px;
    margin-left:140px;">
                        <span class="redSquare"></span>
                        <span style="margin-top:20px;">消息中心</span>
		</p>
        <el-tabs class="z_p_tab" style="height:400px" type="border-card" v-model="z_p_testName" @tab-click="handleClick">
            <el-tab-pane label="未读消息" name="first">
                
                <span style="margin-left:140px;">
                    <i style="color:skyblue;font-size:26px;font-style: italic" class="el-icon-bell"></i>
                    暂无未读消息
                </span>
            </el-tab-pane>
            <el-tab-pane label="已读消息" name="second">
                <span style="margin-left:140px;">
                    <i style="color:skyblue;font-size:26px;font-style: italic" class="el-icon-bell"></i>
                    暂无已读消息
                </span>
            </el-tab-pane>
            <el-tab-pane label="全部消息" name="third">
                <span style="margin-left:140px;">
                    <i style="color:skyblue;font-size:26px;font-style: italic" class="el-icon-bell"></i>
                    暂无消息
                </span>
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
                    detail: 'https://element.eleme.cn/#/zh-CN/component/link'
                    }, {
                    proName: 'WEB前端基础(HTML+CSS)',
                    testName: 'Web前端基础期末',
                    testNumber: '100',
                    detail: 'https://element.eleme.cn/#/zh-CN/component/link'
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
                console.log("1")
            },
            dele(){
                console.log("2")
            },
            a(){
               console.log("a") 
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
		background:#65AEF2
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

    .mydiv{
        height: 40px;
        margin-bottom: 20px;
    }
    .mydiv div{
        width: 20%;
        height: 40px;
        float: left;
        line-height: 40px;
    }
    .mydiv .div1{
        margin-left: 24%;
    }
    .mydiv span{
        font-size:26px;
        font-style:oblique;
    }
    

</style>