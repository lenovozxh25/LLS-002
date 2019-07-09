<template>
	<div id="stuHome">
		<el-container>
			<el-header>
				<nav-student-menus></nav-student-menus>
			</el-header>
			<el-main>
				<router-view></router-view><!--我的专业-->
			</el-main>
			<el-footer>
				<copy-right></copy-right>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import navStudentMenus from '../common/navStudentMenus.vue'
	import copyRight from '../common/copyRight.vue'
	export default {
		name: "stuHome",
		data() {
			return {}
		},
		components: {
			//注册导航组件
			navStudentMenus,
			copyRight
		}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	a {
		text-decoration: none;
	}
	.el-collapse{
		min-height: 300px;
	}
	/*@import url("//unpkg.com/element-ui@2.9.1/lib/theme-chalk/index.css");*/
	
	.el-header,
	.el-footer {
		/*background-color: #B3C0D1;*/
		color: #333;
		text-align: center;
		padding: 0;
	}
	
	.el-header {
		width: 1100px;
		margin: auto;
		line-height: 45px;
		height: 45px !important;
		padding-left: 10px !important;
	}
	
	.el-menu {
		height: 45px !important;
	}
	
	ul.el-menu-demo>li {
		height: 45px !important;
		line-height: 45px !important;
	}
	
	.el-menu--horizontal>.el-submenu .el-submenu__title {
		height: 45px !important;
		line-height: 45px !important;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		/*background-color: #E9EEF3;*/
		padding: 0;
		color: #333;
		/*text-align: center;
		line-height: 160px;*/
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>