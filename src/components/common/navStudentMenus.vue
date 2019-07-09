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
						<el-menu-item index="1">我的专业</el-menu-item>
						<el-menu-item index="2">我的课程</el-menu-item>
						<el-menu-item index="3">我的成长</el-menu-item>
						<el-menu-item index="4">
							我的参与
						</el-menu-item>
						<el-menu-item index="5">
							我的考试
						</el-menu-item>
					</el-menu>
				</div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple">
					<ul>
						<li v-on:click="mymessage" >
							<span style="cursor:pointer;color:#A3A3A4;font-size:14px;">
								Student
							</span>
							<span style="cursor:pointer;color:#A3A3A4;font-size:14px;margin-left:15px">
								退出
							</span>
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
				console.log(key, keyPath);
				//debugger
				switch(key) {
					case '1':
						this.$router.push('/student/myStudentMajor');
						break;
					case '2':
						this.$router.push('/student/Myproject');
						break;
					case '3':
						this.$router.push('/student/Myproject');
						break;	
					case '4':
						this.$router.push('/student/Myproject');
						break;
					case '5':
						this.$router.push('/student/Mytest');
						break;
				}
			},
			mymessage(){
				this.$router.push('/student/Mymessage');
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
</style>