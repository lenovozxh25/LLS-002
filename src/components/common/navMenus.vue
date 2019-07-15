<template>
	<div id="navMenus">
		<el-row :gutter="20">
			<el-col :span="4">
				<div class="grid-content bg-purple">
					<img src="../../images/lenovo.png" />
				</div>
			</el-col>
			<el-col :span="16">
				<div class="grid-content bg-purple">
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
						<el-menu-item index="1">我教的专业</el-menu-item>
						<el-submenu index="2">
							<template slot="title">我教的课程</template>
							<el-submenu index="2-1">
								<template slot="title">第一学期</template>
								<el-menu-item index="2-1-1">web前端基础</el-menu-item>
								<el-menu-item index="2-1-2">web前端高级</el-menu-item>
								<el-menu-item index="2-1-3">脚本语言基础</el-menu-item>
							</el-submenu>
							<el-submenu index="2-2">
								<template slot="title">第二学期</template>
								<el-menu-item index="2-2-1">脚本语言高级</el-menu-item>
								<el-menu-item index="2-2-2">响应式设计</el-menu-item>
								<el-menu-item index="2-2-3">编程语言基础</el-menu-item>
							</el-submenu>
							<el-submenu index="2-3">
								<template slot="title">第三学期</template>
								<el-menu-item index="2-3-1">服务端应用开发</el-menu-item>
								<el-menu-item index="2-3-2">数据库基础</el-menu-item>
								<el-menu-item index="2-3-3">编程语言高级</el-menu-item>
							</el-submenu>
							<el-submenu index="2-4">
								<template slot="title">第四学期</template>
								<el-menu-item index="2-4-1">前端框架(Vue)</el-menu-item>
								<el-menu-item index="2-4-2">Vue项目实战</el-menu-item>
								<el-menu-item index="2-4-3">Node.js</el-menu-item>
							</el-submenu>
							<el-submenu index="2-5">
								<template slot="title">第五学期</template>
								<el-menu-item index="2-5-1">就业岗前冲刺</el-menu-item>
								<el-menu-item index="2-5-2">全真项目实训</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="3">考试管理</el-menu-item>
						<el-menu-item index="4">
							学员管理
						</el-menu-item>
						<el-menu-item index="5">
							我的贡献
						</el-menu-item>
					</el-menu>
				</div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple">
					<ul class="loginUser">
						<li>
							<i class="el-icon-message-solid"></i>
						</li>
						<li>李建鹏</li>
						<li>
							<svg class="logoutSvg" viewBox="0 0 1027 1024" width="20" height="40"><path d="M584.47 677.918h-9.36c-97.805 0-195.607 0.01-293.414 0-14.5-0.005-23.95-6.65-26.28-18.54-0.458-2.375-0.415-4.87-0.415-7.3-0.018-86.915-0.02-173.825-0.012-260.739 0.003-16.485 8.93-25.255 25.672-25.255 98.247-0.005 196.497-0.005 294.75-0.005h9.06v-7.912c0-77.352-0.01-154.71 0.01-232.069 0-10.645 5.074-19.135 13.67-22.387 9.89-3.745 18.664-2.02 26.12 5.857 4.274 4.517 8.93 8.672 13.32 13.065 55.384 55.265 110.76 110.555 166.13 165.82 71.12 70.965 142.244 141.912 213.364 212.874 11.84 11.802 11.905 24.252 0.205 35.927-101.78 101.605-203.549 203.219-305.359 304.784-28.955 28.885-58.065 57.595-86.995 86.505-7.445 7.45-15.75 10.715-25.915 6.855-9.885-3.75-14.54-11.53-14.54-23.765-0.015-74.905-0.01-149.82-0.01-224.724v-8.991zM401.643 106.172v87.827h-8.07c-74.465 0-148.93-0.01-223.394 0.005-47.187 0.007-81.935 34.827-81.937 82.107-0.007 163.602 0.293 327.202-0.197 490.791-0.135 43.285 32.795 74.47 63.24 80.165 6.727 1.245 13.677 1.81 20.525 1.825 73.797 0.13 147.597 0.08 221.397 0.08h8.302v87.325c-1.05 0.21-2.275 0.68-3.503 0.68-78.467 0-156.942 0.8-235.389-0.34-76.67-1.1-144.565-59.285-159.197-134.595-2.065-10.61-3.075-21.595-3.087-32.405-0.19-165.385-0.627-330.762 0.102-496.134 0.305-69.077 34.625-118.665 94.56-150.892 21.145-11.375 44.502-16.512 68.577-16.572 77.797-0.21 155.595-0.08 233.394-0.075 1.315 0.001 2.627 0.116 4.677 0.208z" p-id="36362"></path></svg>
						</li>
					</ul>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'navMenus',
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				// console.log(key, keyPath);
				//debugger
				switch(key) {
					case '1':
						this.$router.push('/teacher/myMajor');
						break;
					case '2':
						this.$router.push('/teacher/myCourse');
						break;
					case '3':
						this.$router.push('/teacher/exam');
						break;
					case '4':
						this.$router.push('/teacher/students');
						break;
					case '5':
						this.$router.push('/teacher/myContribute');
						break;
				}
			}
		}
	}
</script>

<style>
	.el-row:last-child {
			margin-bottom: 0;
		}
	
	
	.el-col {
		border-radius: 4px;
		padding-left: 0 !important;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.grid-content img {
		height: 100%;
		display: block;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	.loginUser{
		overflow: hidden;
	}
	.loginUser li{
		float: left;
		margin-left: 20px;
	}
	.logoutSvg{
		opacity: 0.1;
	}
</style>