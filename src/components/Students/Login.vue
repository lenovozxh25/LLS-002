<template>
	<div id="login" class="h-section">
		<div class="h-login">
			<p class="h-numbe">账号登录</p>
			<div id="h-form">
				<div class="h-user">
					<i class="el-icon-user"></i>
					<input type="text" for="loginname" id="loginname" autocomplete="off" placeholder="邮箱">
				</div>
				<div class="h-user2">
					<i class="el-icon-lock"></i>
					<input type="password" for="password" id="password" autocomplete="off" placeholder="密码">
				</div>
				<div class="h-user1">
					<div class="h-test h-clear" id="h-clear1">
						<input class="h-yanz" for="foryanz" autocomplete="off" placeholder="点击图片替换验证码">
						<img src="http://edusys.lenovo.com/lls-web/Luser/code.html" id="codeImage" alt="验证码">
					</div>
				</div>
				<button class="h-entry button commonButton" id="h-entry">马上登录</button>
			</div>
			<div class="h-retrieve">
				<p class="fl">
					<input type="checkbox" class="h-checkbox" value="on">
					<span class="h-jizhu">记住密码</span>
				</p>
				<p class="fr h-retrieves">
					<!-- react-text: 34 -->
					忘记密码?&nbsp;
					<!-- /react-text -->
					<a href="http://edusys.lenovo.com/lls-web/Luser/reving">立即找回</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "login",
		props: ["id"]
	};
</script>

<style>
	.h-section {
		width: 100%;
		overflow: hidden;
		background: url(../../images/06denglu.jpg) no-repeat;
		height: 100%;
	}
	
	.h-section .h-login {
		width: 480px;
		height: 320px;
		background-color: #f2f7fa;
		margin: 0 auto;
		padding-top: 31px;
		margin-top: 12%;
	}
	
	.h-section .h-login .h-numbe {
		text-align: center;
		color: #606060;
		font-weight: 500;
		font-size: 17px;
		margin-bottom: 0;
		font-family: Microsoft YaHei;
	}
	
	.h-section .h-login .h-point {
		width: 100%;
		height: 20px;
		font-size: 12px;
		color: #e2231b;
		height: 36px;
		line-height: 12px;
		text-indent: 56px;
		padding-top: 24px;
	}
	
	.h-section .h-login .h-user {
		width: 320px;
		height: 30px;
		line-height: 30px;
		margin: 0 auto;
		margin-top: 10px;
		border-bottom: 1px solid #e1e6e9;
		overflow: hidden;
	}
	
	.h-section .h-login .h-user i {
		display: inline-block;
		color: #919598;
		font-size: 22px;
		margin-top: -8px;
	}
	
	.h-section .h-login input[autocomplete] {
		background-color: #f2f7fa;
		-webkit-box-shadow: 0 0 0 400px #f2f7fa inset;
		outline: none;
	}
	
	.h-section .h-login input[placeholder] {
		color: #444444;
	}
	
	.h-section .h-login .h-user input {
		display: inline-block;
		width: 288px;
		border: none;
		height: 27px;
		line-height: 27px;
		background-color: #f2f7fa;
		background-color: #ff806f;
		color: #919598;
		padding-bottom: 3px;
		font-weight: 100;
		text-indent: 5px;
		margin-top: -7px;
		background-color: #f2f7fa;
	}
	
	.h-section .h-login .h-user2 {
		width: 320px;
		height: 30px;
		line-height: 30px;
		margin: 0 auto;
		margin-top: 10px;
		border-bottom: 1px solid #e1e6e9;
		overflow: hidden;
	}
	
	.h-section .h-login .h-user2 i {
		display: inline-block;
		color: #919598;
		font-size: 22px;
		margin-top: -8px;
	}
	
	.h-section .h-login .h-user2 input {
		display: inline-block;
		width: 288px;
		border: none;
		height: 30px;
		background-color: #f2f7fa;
		background-color: #ff806f;
		color: #919598;
		padding-bottom: 3px;
		margin-top: -2px;
		font-weight: 100;
		text-indent: 5px;
		margin-top: -10px;
		background-color: #f2f7fa;
	}
	
	.h-section .h-login .h-user1 {
		width: 320px;
		height: 30px;
		line-height: 30px;
		margin: 0 auto;
		margin-top: 10px;
	}
	
	.h-section .h-login .h-user1 .h-test {
		display: none;
		width: 100%;
		height: 100%;
		border-bottom: 1px solid #e0e5e9;
	}
	
	.h-section .h-login .h-user1 .h-test input {
		font-size: 12px;
		margin-right: 90px;
		text-indent: 5px;
		color: #919598;
		border: none;
		width: 140px;
		margin-top: -2px;
		letter-spacing: 1px;
		padding-bottom: 0px;
	}
	
	.h-section .h-login .h-user1 img {
		border: none;
		vertical-align: middle;
		float: right;
	}
	
	.h-section .h-login .h-entry {
		width: 320px;
		height: 36px;
		line-height: 30px;
		text-align: center;
		background-color: #49c0e0;
		border-radius: 5px;
		margin: 0 auto;
		display: block;
		margin-top: 16px;
		border: 1px solid #49c0e0;
		color: #feffff;
		letter-spacing: 1px;
		font-family: Microsoft YaHei;
	}
	
	.h-section .h-login .h-retrieve {
		text-indent: 37px;
		font-size: 12px;
		color: #909090;
		line-height: 20px;
	}
	
	.h-section .h-login .h-retrieve p {
		display: inline-block;
		margin-bottom: 0px;
		margin-top: 5px;
	}
	
	.fl {
		float: left;
		padding-top: 2px;
		margin-left: 38px;
	}
	
	.fl input {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: 0;
		touch-action: manipulation;
		-webkit-appearance: checkbox !important;
	}
	
	.h-checkbox {
		font-size: 12px;
		color: #000000;
		border: 1px solid #006600;
		background-color: #dbfbf7;
	}
	
	.h-jizhu {
		margin-left: 2px;
		position: relative;
		top: -2px;
		text-indent: 37px;
		font-size: 12px;
		color: #909090;
		line-height: 20px;
	}
	
	.h-section .h-login .h-retrieves {
		margin-right: 78px;
	}
	
	.fr {
		float: right;
		/* margin-right:78px; */
	}
	
	.h-section .h-login .h-retrieve a {
		color: #1380f9;
	}
</style>