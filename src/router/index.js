import Vue from 'vue'
import VueRouter from 'vue-router'

import THome from '@/components/Teachers/Home.vue'
import Exam from '@/components/Teachers/Exam.vue'
//教师端我的专业
import MyCourse from '@/components/Teachers/MyCourse.vue'
//教师端我的专业课程列表
import MyCourseList from '@/components/Teachers/MyCourseList.vue'
//教师端我的课程
import MyMajor from '@/components/Teachers/MyMajor.vue'
//教师端学生管理
import Students from '@/components/Teachers/Students.vue'
import MyMeage from '@/components/Teachers/MyMeage.vue'
import MyContribute from '@/components/Teachers/MyContribute.vue'
import MasterSetting from '@/components/Teachers/MasterSetting.vue'
import Mymessage from '@/components/Teachers/MyMeage.vue'
import MyTeacherMyNews from '@/components/Teachers/MyNews.vue'
import CourseManagement from '@/components/Teachers/CourseManagement.vue'

import MyCreateExam from '@/components/Teachers/CreateExam.vue'
import MyIssueeExam from '@/components/Teachers/IssueeExam.vue'
import MySeeExam from '@/components/Teachers/MySeeExam.vue'
import OnlineAnswer from '@/components/Teachers/OnlineAnswer.vue'

import Mytest from '@/components/Students/Mytest.vue'
import SHome from '@/components/Students/Home.vue'
//学生端我的专业
import MyStudentMajor from '@/components/Students/MyStudentMajor.vue'
//学生端我的专业课程列表
import myStudentCourseList from '@/components/students/myStudentCourseList.vue'
//学生端我的课程
import myStudentCourse from '@/components/Students/MyStudentCourse.vue'
import MyStudentMymessage from '@/components/Students/Mymessage.vue'
import MyStudentMytest from '@/components/Students/Mytest.vue'
import MyStudentMyparticipation from '@/components/Students/Myparticipation.vue'
import MyStudentMynews from '@/components/Students/Mynews.vue'
import MyStudentMygrowup from '@/components/Students/Mygrowup.vue'
import OnlineAsk from '@/components/Students/OnlineAsk.vue'
import myStudentStartTest from '@/components/students/myStartTest.vue'
import myStudentCheckTest from '@/components/students/MyCheckTest.vue'
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
		meta: { requiresAuth: true },
		children: [{
				path: 'exam',
				component: Exam,
				name: 'exam',
				meta: { requiresAuth: true }
			},
			{
				path: 'myCourse/:courseId',
				component: MyCourse,
				name: 'myCourse',
				meta: { requiresAuth: true }
			},
			{
				path: 'myCourseList/:itemId',
				component: MyCourseList,
				name: 'myCourseList',
				meta: { requiresAuth: true }
			},
			{
				path: 'myMajor',
				component: MyMajor,
				name: '我教的专业',
				meta: { requiresAuth: true }
			},
			{
				path: 'students',
				component: Students,
				name: '学生管理',
				meta: { requiresAuth: true }
			},
			{
				path: 'myContribute',
				component: MyContribute,
				name: '我的贡献',
				meta: { requiresAuth: true }
			},
        	{ 
				path: 'myTest', 
				component: Mytest, 
				name: '我的考试' ,
				meta: { requiresAuth: true }
			},
			{ 
				path: 'mymeage', 
				component: MyMeage, 
				name: '我的资料' ,
				meta: { requiresAuth: true }
			},
			{ 
				path: 'courseManagement', 
				component: CourseManagement, 
				name: '课程管理' ,
				meta: { requiresAuth: true }
			},
			{
				path:'masterSetting/:customId',
				component:MasterSetting,
				name:'masterSetting',
				meta: { requiresAuth: true }
			},
			{
				path: 'myNews',
				component: MyTeacherMyNews,
				name: '老师消息中心',
				meta: { requiresAuth: true }
			},
			{
				path: 'onlineAnswer',
				component: OnlineAnswer,
				name: '老师在线答疑',
				meta: { requiresAuth: true }
			},
			{
				path: 'mycreateexam',
				component: MyCreateExam,
				name: '老师创建创建试卷',
				meta: { requiresAuth: true }
			},
			{
				path: 'issueeexam',
				component: MyIssueeExam,
				name: '老师发布考试',
				meta: { requiresAuth: true }
			},
			{
				path: 'mySeeExam',
				component: MySeeExam,
				name: 'MySeeExam',
				meta: { requiresAuth: true }
			}
			
		]
	},
	{
		path: '/Student',
		component: SHome,
		meta: { requiresAuth: true },
		children: [{
				path: 'MyStudentMajor',
				component: MyStudentMajor,
				name: '学生我的专业',
				meta: { requiresAuth: true },
			},
			{
				path: 'myStudentCourseList/:itemId',
				component: myStudentCourseList,
				name: 'myStudentCourseList',
				meta: { requiresAuth: true }
			},
			{
				path: 'myStudentCourse/:courseId',
				component: myStudentCourse,
				name: 'myStudentCourse',
				meta: { requiresAuth: true }
			},
			{
				path: 'Mymessage',
				component: MyStudentMymessage,
				name: '学生我的信息',
				meta: { requiresAuth: true }
			},
			{
				path: 'Mytest',
				component: MyStudentMytest,
				name: '学生我的考试',
				meta: { requiresAuth: true }
			},
			{
				path: 'Myparticipation',
				component: MyStudentMyparticipation,
				name: '学生我的参与',
				meta: { requiresAuth: true }
			},
			{
				path: 'Mynews',
				component: MyStudentMynews,
				name: '学生消息中心',
				meta: { requiresAuth: true }
			},
			{
				path: 'Mygrowup',
				component: MyStudentMygrowup,
				name: '学生我的成长',
				meta: { requiresAuth: true }
			},
			{
				path: 'onlineAsk',
				component: OnlineAsk,
				name: '学生在线提问',
				meta: { requiresAuth: true }
			},			
			{
				path: 'StartTest',
				component: myStudentStartTest,
				name: 'StartTest',
				meta: { requiresAuth: true }
			},
			{
				path: 'CheckTest',
				component: myStudentCheckTest,
				name: 'CheckTest',
				meta: { requiresAuth: true }
			},
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