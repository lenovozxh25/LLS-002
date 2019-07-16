import Vue from 'vue'
import VueRouter from 'vue-router'

import THome from '@/components/Teachers/Home.vue'
import Exam from '@/components/Teachers/Exam.vue'
import MyCourse from '@/components/Teachers/MyCourse.vue'
import MyMajor from '@/components/Teachers/MyMajor.vue'
import Students from '@/components/Teachers/Students.vue'
import MyContribute from '@/components/Teachers/MyContribute.vue'
<<<<<<< HEAD
import MyMeage from '@/components/Teachers/MyMeage.vue'

=======
import CourseManagement from '@/components/Teachers/CourseManagement.vue'
>>>>>>> ljp

import Myproject from '@/components/Students/Myproject.vue'
import Mytest from '@/components/Students/Mytest.vue'
import Mymessage from '@/components/Students/Mymessage.vue'

import SHome from '@/components/Students/Home.vue'
import MyStudentMajor from '@/components/Students/MyStudentMajor.vue'
import MyStudentMymessage from '@/components/Students/Mymessage.vue'
import MyStudentMyproject from '@/components/Students/Myproject.vue'
import MyStudentMytest from '@/components/Students/Mytest.vue'
import MyStudentMyparticipation from '@/components/Students/Myparticipation.vue'
import MyStudentMynews from '@/components/Students/Mynews.vue'
import MyStudentMygrowup from '@/components/Students/Mygrowup.vue'


import Logined from '@/components/common/Login.vue'



Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect:'/logined'
	},
	{
		path: "/teacher",
		component: THome,
		children: [{
				path: 'exam',
				component: Exam,
				name: '考试管理'
			},
			{
				path: 'myCourse',
				component: MyCourse,
				name: '我教的课程'
			},
			{
				path: 'myMajor',
				component: MyMajor,
				name: '我教的专业'
			},
			{
				path: 'students',
				component: Students,
				name: '学生管理'
			},
			{
				path: 'myContribute',
				component: MyContribute,
				name: '我的贡献'
			},
			{ 
				path: 'myProject', 
				component: Myproject, 
				name: '我的课程' 
			},
        	{ 
				path: 'myTest', 
				component: Mytest, 
				name: '我的考试' 
			},
			{ 
				path: 'mymeage', 
				component: Mymessage, 
				name: '我的资料' 
			},
			{ 
				path: 'courseManagement', 
				component: CourseManagement, 
				name: '课程管理' 
			}
		]
	},
	{
		path: '/Student',
		component: SHome,
		children: [{
				path: 'MyStudentMajor',
				component: MyStudentMajor,
				name: '学生我的专业',
			},
			{
				path: 'Myproject',
				component: MyStudentMyproject,
				name: '学生我的课程',
			},
			{
				path: 'Mymessage',
				component: MyStudentMymessage,
				name: '学生我的信息',
			},
			{
				path: 'Mytest',
				component: MyStudentMytest,
				name: '学生我的考试',
			},
			{
				path: 'Myparticipation',
				component: MyStudentMyparticipation,
				name: '学生我的参与',
			},
			{
				path: 'Mynews',
				component: MyStudentMynews,
				name: '学生消息中心',
			},
			{
				path: 'Mygrowup',
				component: MyStudentMygrowup,
				name: '学生我的成长',
			}
		]
	},
	{
		path: "/logined",
		component: Logined
	}
]


const router = new VueRouter({
	routes
})

export default router;