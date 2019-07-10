<template>
	
	<div id="myStuMajor" style="min-height:500px;">
		<div class="mahorTitle">
            <!-- 学期定位 -->
            <div class="personage">
                <span>第一学期（本学期）</span>
            </div>
            <!-- 学生信息 -->
			<div class="div1">
                <span class="span1">赵丽颖<el-tag type="danger">班长</el-tag></span>
                <span>学号：<span>201929292292171</span></span>
                <span>专业：<span>移动互联(web前端方向)</span></span>
                <span>班级：<span>16级01班</span></span>
            </div>

            <!-- 学生成绩 -->
            <div class="div2">
                <div class="gup_d1">
                    <span>C</span>
                    <span class="sp2">综合评价<i class="el-icon-edit"></i></span>
                    <div>
                        <p>排名</p>
                        <p>
                            <i>1</i>/
                            <i>15</i>
                        </p>
                    </div>
                    <i class="i01"></i>
                </div>
                <div class="gup_d2">
                    <div>
                        <span>21.22</span>分
                    </div>
                    <div>
                        联想成绩专业分（5%）
                    </div>
                    <div>
                        第<span>2</span>名
                    </div>
                </div>
                
                <div class="gup_d2">
                    <div>
                        <span>100</span>分
                    </div>
                    <div>
                        奖罚得分（40%）
                    </div>
                    <div>
                        第<span>1</span>名
                    </div>
                </div>
                <div class="gup_d2">
                    <div>
                        <span>21.22</span>分
                    </div>
                    <div>
                        学校平时成绩得分(35%)
                    </div>
                    <div>
                        第<span>1</span>名
                    </div>
                </div>
                <div class="gup_d2">
                    <div>
                        <span>21.22</span>分
                    </div>
                    <div>
                        学校综合评价（5%）
                    </div>
                    <div>
                        第<span>2</span>名
                    </div>
                </div>
                <div class="gup_d2">
                    <div>
                        <span>21.22</span>分
                    </div>
                    <div>
                        考评成绩（5%）
                    </div>
                    <div>
                        第<span>2</span>名
                    </div>
                </div>
            </div>
        
		</div>
        
	</div>
</template>

<script>
	export default {
		name: 'myStuMajor',
		data() {
			return {
                
            }
		},
		methods: {
		
		}
	}
</script>

<style scoped>
	
	/* ul li{list-style: none;} */

	
	#myStuMajor a {
		color: #6c6868;
		font-size: 16px;
	}
	
	#myStuMajor a:hover {
		color: skyblue;
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
		height: 164px;
        line-height:40px;
		background:#F9AE39;
        position: relative;
	}
    #myStuMajor .mahorTitle .div1{
        line-height:40px;
        height: 40px;
    }
    #myStuMajor .mahorTitle .div1>span{
        display: inline-block;
        color: #fff;
        font-size: 14px;
        margin-left: 20px;
    }
    #myStuMajor .mahorTitle .div1>span.span1{
        margin-left: 388px;
    }
    #myStuMajor .mahorTitle .div2{
        width: 70%;
        height: 90px;
        background: #fff;
        margin-top: 30px;
        margin-left: 180px;
        overflow: hidden;
    }
    #myStuMajor .mahorTitle .div2>div{
        width: 16.5%;
        float: left;
        height: 90px;
    }
    #myStuMajor .mahorTitle .div2 .gup_d1{
        overflow: hidden;
        position: relative;
    }
    #myStuMajor .mahorTitle .div2 .gup_d1 span:first-child{
        display: inline-block;
        text-align: center;
        width: 100%;
        height: 50px;
        font-size: 36px;
        font-weight: 700;
        font-family: Arial;
        color: #f1556d;
        line-height: 50px;
        margin-top: 8px;
    }
    #myStuMajor .mahorTitle .div2 .gup_d1 span.sp2{
            display: inline-block;
            text-align: center;
            width: 100%;
            height: 24px;
            line-height: 24px;
            color: #6a6a6a;
            margin-top: 2px;
            position: relative;
            top:-12px;
    }
    #myStuMajor .mahorTitle .div2 .gup_d1>div{
        position: absolute;
        left: 8px;
        top: -1px;
        background: #cc2c2c;
        width: 44px;
        height: 49px;
    }
    #myStuMajor .mahorTitle .div2 .gup_d1>div>p{
        margin: 0;
        padding: 0;
    }
    #myStuMajor .mahorTitle .div2 .gup_d1>div>p:first-child{
            height: 20px;
            line-height: 20px;
            color: #fff;
            font-size: 12px;
            padding-left: 4px;
            text-align: center;
    }
    #myStuMajor .mahorTitle .div2 .gup_d1>div>p:last-child{
            height: 20px;
            line-height: 20px;
            text-align: center;
            color: #fff;
            font-size: 12px;
    }
    #myStuMajor .mahorTitle .div2 .gup_d1 .i01{
            position: absolute;
            left: 8px;
            top: 39px;
            width: 0;
            height: 0;
            border-left: 22px solid transparent;
            border-right: 22px solid transparent;
            border-bottom: 9px solid #fff;
    }
    #myStuMajor .mahorTitle .div2 .gup_d2{
        background: #F6F6F6;
    }
    #myStuMajor .mahorTitle .div2 .gup_d2>div{
        width: 100%;
        height: 18px;
        line-height: 18px;
        color: #6a6a6a;
        font-size: 14px;
        text-align: center;
    }
        
    #myStuMajor .mahorTitle .div2 .gup_d2>div:first-child{
        height: 22px;
        line-height: 22px;
        margin-top: 16px;
        margin-bottom: 8px;
    }
    #myStuMajor .mahorTitle .div2 .gup_d2>div:first-child>span{
        color: #c74ad9;
        font-weight: 700;
        font-family: Arial;
        font-size: 26px;
        padding-right: 2px;
        cursor: pointer;
    }

    /* 学期定位 */
    .personage{
        text-align: center;
        position: absolute;
        height: 34px;
        line-height: 34px;
        top: 46px;
        left: 558px;
        width: 160px;
        z-index: 10;
        border-right: 1px solid rgb(228, 228, 228);
        border-top: 1px solid rgb(228, 228, 228);
        border-bottom: 1px solid rgb(228, 228, 228);
        background: #fff;
        outline: none;
        color: #1380f9;
        font-size: 14px;
    }
   
	
   

</style>