<template>
	
	<div id="myStuMajor">
		<div class="mahorTitle">
			<div>
				<div>
					<span style="display:block;">我的参与</span>
                    <span style="font-size:16px;">记录我在联想班学习的问答 反馈以及对相关系统功能等的评价
积极参与 主动贡献 养成习惯 成长为未来社会的栋梁</span>
				</div>
			</div>
		</div>
        <el-tabs class="z_p_tab" type="border-card" v-model="z_p_testName" @tab-click="handleClick">
            <el-tab-pane label="我的问答" name="first">
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <span style="margin-top:20px;">我的提问</span>
			        </p>
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="proName" label="问题" width="600">
                        </el-table-column>
                        <el-table-column prop="testName" label="发起时间" width="180"></el-table-column>
                        <el-table-column prop="testNumber" label="状态"></el-table-column>
                        <el-table-column prop="detail" label="操作">
                              <i class="el-icon-edit"></i><el-tag v-on:click="edit" size="medium">编辑</el-tag>
                              <i class="el-icon-delete"></i><el-tag v-on:click="dele" size="medium" type="danger">删除</el-tag>
                        </el-table-column>
                    </el-table>
		        </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="我的反馈" name="second">
                <div class="mydiv">
                    <div class="div1">我的意见<span style="color:#61E5F4;">1</span>条</div>
                    <div class="div2">已回复<span style="color:#F8A7B8;">0</span>条</div>
                    <div class="div3">未回复<span style="color:#E3A0E8;">1</span>条</div>
                </div>
                <el-collapse v-model="activeNames" >
			        <p class="major" style="height:50px;line-height:50px;overflow:hidden">
                        <span class="redSquare"></span>
                        <span style="margin-top:20px;">我的意见反馈</span>
                        <span style="display:inline-block; float: right;background:#49C0E0;width:130px;height:40px;text-align:center;margin-top:5px;line-height:40px;font-size:16px;color:#fff;">新建反馈<i class="el-icon-edit-outline"></i></span>
			        </p>
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="proName" label="意见" width="600">
                        </el-table-column>
                        <el-table-column prop="testName" label="发起时间" width="180"></el-table-column>
                        <el-table-column prop="testNumber" label="状态"></el-table-column>
                        <el-table-column prop="detail" label="操作">
                              <i class="el-icon-edit"></i><el-tag v-on:click="edit" size="medium">编辑</el-tag>
                              <i class="el-icon-delete"></i><el-tag v-on:click="dele" size="medium" type="danger">删除</el-tag>
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
		background:#F16179
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
    .el-tabs__nav{
        margin-left: 100px !important;
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