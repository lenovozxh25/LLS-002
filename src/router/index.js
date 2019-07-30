import Vue from 'vue'
import VueRouter from 'vue-router'

import THome from '@/components/Teachers/Home.vue'
import Exam from '@/components/Teachers/Exam.vue'
import MyCourse from '@/components/Teachers/MyCourse.vue'
import MyMajor from '@/components/Teachers/MyMajor.vue'
import Students from '@/components/Teachers/Students.vue'
import MyContribute from '@/components/Teachers/MyContribute.vue'
import MasterSetting from '@/components/Teachers/MasterSetting.vue'
import MyMeage from '@/components/Teachers/MyMeage.vue'
import MyTeacherMyNews from '@/components/Teachers/MyNews.vue'
import CourseManagement from '@/components/Teachers/CourseManagement.vue'
import MyCourseList from '@/components/Teachers/MyCourseList.vue'
import MyCreateExam from '@/components/Teachers/CreateExam.vue'
import MyIssueeExam from '@/components/Teachers/IssueeExam.vue'

import OnlineAnswer from '@/components/Teachers/OnlineAnswer.vue'

import Mytest from '@/components/Students/Mytest.vue'
import Mymessage from '@/components/Students/Mymessage.vue'
import SHome from '@/components/Students/Home.vue'
import MyStudentMajor from '@/components/Students/MyStudentMajor.vue'
import MyStudentMymessage from '@/components/Students/Mymessage.vue'
import myStudentCourse from '@/components/Students/MyStudentCourse.vue'
import MyStudentMytest from '@/components/Students/Mytest.vue'
import MyStudentMyparticipation from '@/components/Students/Myparticipation.vue'
import MyStudentMynews from '@/components/Students/Mynews.vue'
import MyStudentMygrowup from '@/components/Students/Mygrowup.vue'
import OnlineAsk from '@/components/Students/OnlineAsk.vue'
import myStudentCourseList from '@/components/students/myStudentCourseList.vue'

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
				path: 'myCourse/:courseId',
				component: MyCourse,
				name: 'myCourse'
			},
			{
				path: 'myCourseList/:itemId',
				component: MyCourseList,
				name: 'myCourseList'
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
				name: '课程管理' ,
			},
			{
				path:'masterSetting/:customId',
				component:MasterSetting,
				name:'masterSetting'
			},
			{
				path: 'myNews',
				component: MyTeacherMyNews,
				name: '老师消息中心',
			},
			{
				path: 'onlineAnswer',
				component: OnlineAnswer,
				name: '老师在线答疑',
			},
			{
				path: 'mycreateexam',
				component: MyCreateExam,
				name: '老师创建创建试卷',
			},
			{
				path: 'issueeexam',
				component: MyIssueeExam,
				name: '老师发布考试',
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
				path: 'myStudentCourseList/:itemId',
				component: myStudentCourseList,
				name: 'myStudentCourseList'
			},
			{
				path: 'myStudentCourse/:courseId',
				component: myStudentCourse,
				name: 'myStudentCourse',
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
			},
			{
				path: 'onlineAsk',
				component: OnlineAsk,
				name: '学生在线提问',
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