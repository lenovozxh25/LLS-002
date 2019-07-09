<template>
	<div id="students" style="background: #f5f5f7;padding-bottom: 20px;">
		<div class="studentTitle">
			<div>
				<div>
					学员管理
				</div>
				<ul>
					<li>真实客观统计学员数据 </li>
					<li>贴近学员生活学习 </li>
					<li>记录学生成长</li>
				</ul>
			</div>
		</div>
		<div class="stuMain">
			<div>
				<template>
					<p class="stuMsg top"><span class="redSquare"></span><span>学员管理</span></p>
					<el-tabs tab-position="left" >
						<el-tab-pane label="山东劳动职业技术学院17级01班">
							<div class="semester">
								<ul>
									<li class="oneT active">第一学期</li>
									<li>第二学期</li>
									<li>第三学期</li>
									<li>第四学期</li>
									<li>第五学期</li>
								</ul>
							</div>
							<div class="targetT">
								<svg class="icon" viewBox="0 0 1024 1024" width="20" height="20">
									<path d="M616.037 153.682c-42.973-15.073-89.18-23.269-137.3-23.269C249.684 130.413 64 316.123 64 545.207 64 774.29 249.684 960 478.737 960c229.054 0 414.738-185.71 414.738-414.793 0-47.57-8.007-93.27-22.745-135.824a57372.666 57372.666 0 0 0-55.693 55.773c6.091 25.693 9.315 52.495 9.315 80.05 0 190.904-154.737 345.662-345.615 345.662-190.877 0-345.614-154.758-345.614-345.661 0-190.904 154.737-345.662 345.614-345.662 28.138 0 55.49 3.363 81.676 9.709a69756.11 69756.11 0 0 0 55.624-55.572z m193.914-33.318c2.309 25.597 4.888 51.176 6.654 76.81 0.557 8.12 3.768 10.44 11.457 11.062 40.78 3.302 81.516 7.113 122.26 10.828 3.224 0.293 6.759-0.592 9.678 1.852-0.613 3.397-3.507 4.887-5.549 6.933-49.96 50.048-100.032 99.981-149.874 150.145-4.464 4.492-8.704 6.27-15.027 5.623-26.233-2.68-52.543-4.616-78.761-7.443-6.406-0.69-10.524 0.79-15.037 5.323-67.556 67.862-66.232 66.35-133.844 134.155-11.398 11.435-24.18 17.019-40.252 12.132-25.033-7.606-34.487-37.6-18.306-58.17 2.497-3.176 5.469-5.994 8.336-8.86 66.5-66.522 63.847-63.948 130.506-130.315 5.187-5.168 7.3-9.793 6.393-17.56-3.101-26.525-4.913-53.199-7.35-79.805-0.394-4.296 0.432-7.456 3.732-10.74 52.275-52.029 104.38-104.23 156.538-156.375 0.447-0.448 1.104-0.68 3.26-1.959 1.8 19.53 3.526 37.945 5.186 56.364zM651.545 545.207c0 95.451-77.369 172.83-172.808 172.83-95.438 0-172.807-77.379-172.807-172.83 0-95.452 77.369-172.831 172.807-172.831 14.286 0 28.166 1.733 41.443 5.002a25975.005 25975.005 0 0 0-25.677 25.616 163237.71 163237.71 0 0 0-41.797 41.81c-44.664 11.55-77.653 52.123-77.653 100.403 0 57.27 46.421 103.698 103.684 103.698 50.629 0 92.782-36.292 101.87-84.283a105329.596 105329.596 0 0 1 37.342-37.391c9.476-9.484 17.866-17.89 27.529-27.582 3.955 14.514 6.067 29.79 6.067 45.558z" fill="#1296db" p-id="10511"></path>
								</svg>
								<ul>
									<li>
										学校：<span>山东劳动职业技术学院</span>
									</li>
									<li>
										专业：<span>移动互联(web前端方向)</span>
									</li>
									<li>
										班级：<span>山东劳动职业技术学院17级01班</span>
									</li>
								</ul>
							</div>
							<div class="statistics">
								<div>
									<span>
										<i class="i1">45</i>人
									</span>
									<p>班级人数</p>
								</div>
								<div>
									<span>
										<i class="i2">0.00</i>分
									</span>
									<p>联想成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i3">0.00</i>分
									</span>
									<p>奖罚成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i4">0.00</i>分
									</span>
									<p>学校成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i5">0.00</i>分
									</span>
									<p>综合成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i6">--</i>次
									</span>
									<p>总缺勤数</p>
								</div>
							</div>
							<div class="tableData">
								<div class="searchInfo">
									<div class="search">
										<span style="font-size: 14px;">搜索：</span>
										<el-input placeholder="按学生姓名或学号搜索" class="input-with-select">
											<el-button slot="append" icon="el-icon-search">搜索</el-button>
										</el-input>
									</div>
									<div class="" style="float: right;margin-top: 5px;">
										<a href="#"><i class="el-icon-s-flag"></i>批量录入评语</a>
										<a href="#"><i class="el-icon-edit"></i>批量录入奖罚</a>
										<a href="#"><i class="el-icon-date"></i>批量录入考勤</a>
									</div>
								</div>
								<template>
									<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
										<el-table-column prop="operate" type="expand" label="查看详情" sortable width="80">
											<template slot-scope="props">
												<div class="caoZuo">
													<a href="#"><i class="el-icon-s-flag"></i>学期评语</a>
													<a href="#"><i class="el-icon-medal-1"></i>奖罚</a>
													<a href="#"><i class="el-icon-chat-line-square"></i>访谈</a>
													<a href="#"><i class="el-icon-date"></i>考勤</a>
													<a href="#"><i class="el-icon-notebook-1"></i>学员情况</a>
												</div>
											</template>
										</el-table-column>
										<el-table-column prop="name" label="姓名" sortable width="80">
										</el-table-column>
										<el-table-column prop="sno" label="学号" sortable width="125">
										</el-table-column>
										<el-table-column prop="lenovoAvgScore" label="联想成绩平均分" sortable width="80">
										</el-table-column>
										<el-table-column prop="rpScore" label="奖罚得分" sortable width="80">
										</el-table-column>
										<el-table-column prop="schoolAvgScore" label="学校成绩平均分" sortable width="80">
										</el-table-column>
										<el-table-column prop="zhScore" label="综合成绩" sortable width="80">
										</el-table-column>
										<el-table-column prop="checkScore" label="考勤成绩" sortable width="80">
										</el-table-column>
										<el-table-column prop="qqCount" label="缺勤次数" sortable width="80">
										</el-table-column>
										<el-table-column prop="interview" label="访谈次数" sortable width="80">
										</el-table-column>

									</el-table>
								</template>
							</div>
						</el-tab-pane>
						<el-tab-pane label="山东劳动职业技术学院18级01班">
							<div class="semester">
								<!--<ul>
									<li class="oneT active">第一学期</li>
									<li>第二学期</li>
									<li>第三学期</li>
									<li>第四学期</li>
									<li>第五学期</li>
								</ul>-->
								<ul>
									<li v-for="(index,item) in tabs" :class="[{active:index == num},{oneT:item==0}]" @click="tab(index)">
										{{index}}
									</li>
								</ul>
							</div>
							<div class="targetT">
								<svg class="icon" viewBox="0 0 1024 1024" width="20" height="20">
									<path d="M616.037 153.682c-42.973-15.073-89.18-23.269-137.3-23.269C249.684 130.413 64 316.123 64 545.207 64 774.29 249.684 960 478.737 960c229.054 0 414.738-185.71 414.738-414.793 0-47.57-8.007-93.27-22.745-135.824a57372.666 57372.666 0 0 0-55.693 55.773c6.091 25.693 9.315 52.495 9.315 80.05 0 190.904-154.737 345.662-345.615 345.662-190.877 0-345.614-154.758-345.614-345.661 0-190.904 154.737-345.662 345.614-345.662 28.138 0 55.49 3.363 81.676 9.709a69756.11 69756.11 0 0 0 55.624-55.572z m193.914-33.318c2.309 25.597 4.888 51.176 6.654 76.81 0.557 8.12 3.768 10.44 11.457 11.062 40.78 3.302 81.516 7.113 122.26 10.828 3.224 0.293 6.759-0.592 9.678 1.852-0.613 3.397-3.507 4.887-5.549 6.933-49.96 50.048-100.032 99.981-149.874 150.145-4.464 4.492-8.704 6.27-15.027 5.623-26.233-2.68-52.543-4.616-78.761-7.443-6.406-0.69-10.524 0.79-15.037 5.323-67.556 67.862-66.232 66.35-133.844 134.155-11.398 11.435-24.18 17.019-40.252 12.132-25.033-7.606-34.487-37.6-18.306-58.17 2.497-3.176 5.469-5.994 8.336-8.86 66.5-66.522 63.847-63.948 130.506-130.315 5.187-5.168 7.3-9.793 6.393-17.56-3.101-26.525-4.913-53.199-7.35-79.805-0.394-4.296 0.432-7.456 3.732-10.74 52.275-52.029 104.38-104.23 156.538-156.375 0.447-0.448 1.104-0.68 3.26-1.959 1.8 19.53 3.526 37.945 5.186 56.364zM651.545 545.207c0 95.451-77.369 172.83-172.808 172.83-95.438 0-172.807-77.379-172.807-172.83 0-95.452 77.369-172.831 172.807-172.831 14.286 0 28.166 1.733 41.443 5.002a25975.005 25975.005 0 0 0-25.677 25.616 163237.71 163237.71 0 0 0-41.797 41.81c-44.664 11.55-77.653 52.123-77.653 100.403 0 57.27 46.421 103.698 103.684 103.698 50.629 0 92.782-36.292 101.87-84.283a105329.596 105329.596 0 0 1 37.342-37.391c9.476-9.484 17.866-17.89 27.529-27.582 3.955 14.514 6.067 29.79 6.067 45.558z" fill="#1296db" p-id="10511"></path>
								</svg>
								<ul>
									<li>
										学校：<span>山东劳动职业技术学院</span>
									</li>
									<li>
										专业：<span>移动互联(web前端方向)</span>
									</li>
									<li>
										班级：<span>山东劳动职业技术学院18级01班</span>
									</li>
								</ul>
							</div>
							<div class="statistics">
								<div>
									<span>
										<i class="i1">46</i>人
									</span>
									<p>班级人数</p>
								</div>
								<div>
									<span>
										<i class="i2">0.00</i>分
									</span>
									<p>联想成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i3">0.00</i>分
									</span>
									<p>奖罚成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i4">0.00</i>分
									</span>
									<p>学校成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i5">0.00</i>分
									</span>
									<p>综合成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i6">--</i>次
									</span>
									<p>总缺勤数</p>
								</div>
							</div>
							<div class="tableData">
								<div class="searchInfo">
									<div class="search">
										<span style="font-size: 14px;">搜索：</span>
										<el-input placeholder="按学生姓名或学号搜索" class="input-with-select">
											<el-button slot="append" icon="el-icon-search">搜索</el-button>
										</el-input>
									</div>
									<div class="" style="float: right;margin-top: 5px;">
										<a href="#"><i class="el-icon-s-flag"></i>批量录入评语</a>
										<a href="#"><i class="el-icon-edit"></i>批量录入奖罚</a>
										<a href="#"><i class="el-icon-date"></i>批量录入考勤</a>
									</div>
								</div>
								<template>
									<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
										<el-table-column prop="operate" type="expand" label="查看详情" sortable width="80">
											<template slot-scope="props">
												<div class="caoZuo">
													<a href="#"><i class="el-icon-s-flag"></i>学期评语</a>
													<a href="#"><i class="el-icon-medal-1"></i>奖罚</a>
													<a href="#"><i class="el-icon-chat-line-square"></i>访谈</a>
													<a href="#"><i class="el-icon-date"></i>考勤</a>
													<a href="#"><i class="el-icon-notebook-1"></i>学员情况</a>
												</div>
											</template>
										</el-table-column>
										<el-table-column prop="name" label="姓名" sortable width="80">
										</el-table-column>
										<el-table-column prop="sno" label="学号" sortable width="125">
										</el-table-column>
										<el-table-column prop="lenovoAvgScore" label="联想成绩平均分" sortable width="80">
										</el-table-column>
										<el-table-column prop="rpScore" label="奖罚得分" sortable width="80">
										</el-table-column>
										<el-table-column prop="schoolAvgScore" label="学校成绩平均分" sortable width="80">
										</el-table-column>
										<el-table-column prop="zhScore" label="综合成绩" sortable width="80">
										</el-table-column>
										<el-table-column prop="checkScore" label="考勤成绩" sortable width="80">
										</el-table-column>
										<el-table-column prop="qqCount" label="缺勤次数" sortable width="80">
										</el-table-column>
										<el-table-column prop="interview" label="访谈次数" sortable width="80">
										</el-table-column>

									</el-table>
								</template>
							</div>
						</el-tab-pane>
						<el-tab-pane label="山东劳动职业技术学院16级01班">
							<div class="semester">
								<!--<ul>
									<li class="oneT">第一学期</li>
									<li>第二学期</li>
									<li class="active">第三学期</li>
									<li>第四学期</li>
								</ul>-->
								<ul>
									<li v-for="(index,item) in tabs2" :class="[{active:index == num},{oneT:item==0}]" @click="tab(index)">
										{{index}}
									</li>
								</ul>
							</div>
							<div class="targetT">
								<svg class="icon" viewBox="0 0 1024 1024" width="20" height="20">
									<path d="M616.037 153.682c-42.973-15.073-89.18-23.269-137.3-23.269C249.684 130.413 64 316.123 64 545.207 64 774.29 249.684 960 478.737 960c229.054 0 414.738-185.71 414.738-414.793 0-47.57-8.007-93.27-22.745-135.824a57372.666 57372.666 0 0 0-55.693 55.773c6.091 25.693 9.315 52.495 9.315 80.05 0 190.904-154.737 345.662-345.615 345.662-190.877 0-345.614-154.758-345.614-345.661 0-190.904 154.737-345.662 345.614-345.662 28.138 0 55.49 3.363 81.676 9.709a69756.11 69756.11 0 0 0 55.624-55.572z m193.914-33.318c2.309 25.597 4.888 51.176 6.654 76.81 0.557 8.12 3.768 10.44 11.457 11.062 40.78 3.302 81.516 7.113 122.26 10.828 3.224 0.293 6.759-0.592 9.678 1.852-0.613 3.397-3.507 4.887-5.549 6.933-49.96 50.048-100.032 99.981-149.874 150.145-4.464 4.492-8.704 6.27-15.027 5.623-26.233-2.68-52.543-4.616-78.761-7.443-6.406-0.69-10.524 0.79-15.037 5.323-67.556 67.862-66.232 66.35-133.844 134.155-11.398 11.435-24.18 17.019-40.252 12.132-25.033-7.606-34.487-37.6-18.306-58.17 2.497-3.176 5.469-5.994 8.336-8.86 66.5-66.522 63.847-63.948 130.506-130.315 5.187-5.168 7.3-9.793 6.393-17.56-3.101-26.525-4.913-53.199-7.35-79.805-0.394-4.296 0.432-7.456 3.732-10.74 52.275-52.029 104.38-104.23 156.538-156.375 0.447-0.448 1.104-0.68 3.26-1.959 1.8 19.53 3.526 37.945 5.186 56.364zM651.545 545.207c0 95.451-77.369 172.83-172.808 172.83-95.438 0-172.807-77.379-172.807-172.83 0-95.452 77.369-172.831 172.807-172.831 14.286 0 28.166 1.733 41.443 5.002a25975.005 25975.005 0 0 0-25.677 25.616 163237.71 163237.71 0 0 0-41.797 41.81c-44.664 11.55-77.653 52.123-77.653 100.403 0 57.27 46.421 103.698 103.684 103.698 50.629 0 92.782-36.292 101.87-84.283a105329.596 105329.596 0 0 1 37.342-37.391c9.476-9.484 17.866-17.89 27.529-27.582 3.955 14.514 6.067 29.79 6.067 45.558z" fill="#1296db" p-id="10511"></path>
								</svg>
								<ul>
									<li>
										学校：<span>山东劳动职业技术学院</span>
									</li>
									<li>
										专业：<span>移动互联(web前端方向)</span>
									</li>
									<li>
										班级：<span>山东劳动职业技术学院16级01班</span>
									</li>
								</ul>
							</div>
							<div class="statistics">
								<div>
									<span>
										<i class="i1">45</i>人
									</span>
									<p>班级人数</p>
								</div>
								<div>
									<span>
										<i class="i2">0.00</i>分
									</span>
									<p>联想成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i3">0.00</i>分
									</span>
									<p>奖罚成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i4">0.00</i>分
									</span>
									<p>学校成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i5">0.00</i>分
									</span>
									<p>综合成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i6">--</i>次
									</span>
									<p>总缺勤数</p>
								</div>
							</div>
							<div class="tableData">
								<div class="searchInfo">
									<div class="search">
										<span style="font-size: 14px;">搜索：</span>
										<el-input placeholder="按学生姓名或学号搜索" class="input-with-select">
											<el-button slot="append" icon="el-icon-search">搜索</el-button>
										</el-input>
									</div>
									<div class="" style="float: right;margin-top: 5px;">
										<a href="#"><i class="el-icon-s-flag"></i>批量录入评语</a>
										<a href="#"><i class="el-icon-edit"></i>批量录入奖罚</a>
										<a href="#"><i class="el-icon-date"></i>批量录入考勤</a>
									</div>
								</div>
								<template>
									<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
										<el-table-column prop="operate" type="expand" label="查看详情" sortable width="80">
											<template slot-scope="props">
												<div class="caoZuo">
													<a href="#"><i class="el-icon-s-flag"></i>学期评语</a>
													<a href="#"><i class="el-icon-medal-1"></i>奖罚</a>
													<a href="#"><i class="el-icon-chat-line-square"></i>访谈</a>
													<a href="#"><i class="el-icon-date"></i>考勤</a>
													<a href="#"><i class="el-icon-notebook-1"></i>学员情况</a>
												</div>
											</template>
										</el-table-column>
										<el-table-column prop="name" label="姓名" sortable width="80">
										</el-table-column>
										<el-table-column prop="sno" label="学号" sortable width="125">
										</el-table-column>
										<el-table-column prop="lenovoAvgScore" label="联想成绩平均分" sortable width="80">
										</el-table-column>
										<el-table-column prop="rpScore" label="奖罚得分" sortable width="80">
										</el-table-column>
										<el-table-column prop="schoolAvgScore" label="学校成绩平均分" sortable width="80">
										</el-table-column>
										<el-table-column prop="zhScore" label="综合成绩" sortable width="80">
										</el-table-column>
										<el-table-column prop="checkScore" label="考勤成绩" sortable width="80">
										</el-table-column>
										<el-table-column prop="qqCount" label="缺勤次数" sortable width="80">
										</el-table-column>
										<el-table-column prop="interview" label="访谈次数" sortable width="80">
										</el-table-column>

									</el-table>
								</template>
							</div>
						</el-tab-pane>
						<el-tab-pane label="南京金陵中专学校01班">
							<div class="semester">
								<!--<ul>
									<li class="oneT">第一学期</li>
									<li class="active">第二学期</li>
									<li>第三学期</li>
									<li>第四学期</li>
								</ul>-->
								<ul>
									<li v-for="(index,item) in tabs2" :class="[{active:index == num},{oneT:item==0}]" @click="tab(index)">
										{{index}}
									</li>
								</ul>
							</div>
							<div class="targetT">
								<svg class="icon" viewBox="0 0 1024 1024" width="20" height="20">
									<path d="M616.037 153.682c-42.973-15.073-89.18-23.269-137.3-23.269C249.684 130.413 64 316.123 64 545.207 64 774.29 249.684 960 478.737 960c229.054 0 414.738-185.71 414.738-414.793 0-47.57-8.007-93.27-22.745-135.824a57372.666 57372.666 0 0 0-55.693 55.773c6.091 25.693 9.315 52.495 9.315 80.05 0 190.904-154.737 345.662-345.615 345.662-190.877 0-345.614-154.758-345.614-345.661 0-190.904 154.737-345.662 345.614-345.662 28.138 0 55.49 3.363 81.676 9.709a69756.11 69756.11 0 0 0 55.624-55.572z m193.914-33.318c2.309 25.597 4.888 51.176 6.654 76.81 0.557 8.12 3.768 10.44 11.457 11.062 40.78 3.302 81.516 7.113 122.26 10.828 3.224 0.293 6.759-0.592 9.678 1.852-0.613 3.397-3.507 4.887-5.549 6.933-49.96 50.048-100.032 99.981-149.874 150.145-4.464 4.492-8.704 6.27-15.027 5.623-26.233-2.68-52.543-4.616-78.761-7.443-6.406-0.69-10.524 0.79-15.037 5.323-67.556 67.862-66.232 66.35-133.844 134.155-11.398 11.435-24.18 17.019-40.252 12.132-25.033-7.606-34.487-37.6-18.306-58.17 2.497-3.176 5.469-5.994 8.336-8.86 66.5-66.522 63.847-63.948 130.506-130.315 5.187-5.168 7.3-9.793 6.393-17.56-3.101-26.525-4.913-53.199-7.35-79.805-0.394-4.296 0.432-7.456 3.732-10.74 52.275-52.029 104.38-104.23 156.538-156.375 0.447-0.448 1.104-0.68 3.26-1.959 1.8 19.53 3.526 37.945 5.186 56.364zM651.545 545.207c0 95.451-77.369 172.83-172.808 172.83-95.438 0-172.807-77.379-172.807-172.83 0-95.452 77.369-172.831 172.807-172.831 14.286 0 28.166 1.733 41.443 5.002a25975.005 25975.005 0 0 0-25.677 25.616 163237.71 163237.71 0 0 0-41.797 41.81c-44.664 11.55-77.653 52.123-77.653 100.403 0 57.27 46.421 103.698 103.684 103.698 50.629 0 92.782-36.292 101.87-84.283a105329.596 105329.596 0 0 1 37.342-37.391c9.476-9.484 17.866-17.89 27.529-27.582 3.955 14.514 6.067 29.79 6.067 45.558z" fill="#1296db" p-id="10511"></path>
								</svg>
								<ul>
									<li>
										学校：<span>南京金陵中专学校</span>
									</li>
									<li>
										专业：<span>移动互联(web前端方向)</span>
									</li>
									<li>
										班级：<span>南京金陵中专学校01班</span>
									</li>
								</ul>
							</div>
							<div class="statistics">
								<div>
									<span>
										<i class="i1">26</i>人
									</span>
									<p>班级人数</p>
								</div>
								<div>
									<span>
										<i class="i2">0.00</i>分
									</span>
									<p>联想成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i3">0.00</i>分
									</span>
									<p>奖罚成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i4">0.00</i>分
									</span>
									<p>学校成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i5">0.00</i>分
									</span>
									<p>综合成绩平均分</p>
								</div>
								<div>
									<span>
										<i class="i6">--</i>次
									</span>
									<p>总缺勤数</p>
								</div>
							</div>
							<div class="tableData">
								<div class="searchInfo">
									<div class="search">
										<span style="font-size: 14px;">搜索：</span>
										<el-input placeholder="按学生姓名或学号搜索" class="input-with-select">
											<el-button slot="append" icon="el-icon-search">搜索</el-button>
										</el-input>
									</div>
									<div class="" style="float: right;margin-top: 5px;">
										<a href="#"><i class="el-icon-s-flag"></i>批量录入评语</a>
										<a href="#"><i class="el-icon-edit"></i>批量录入奖罚</a>
										<a href="#"><i class="el-icon-date"></i>批量录入考勤</a>
									</div>
								</div>
								<template>
									<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
										<el-table-column prop="operate" type="expand" label="查看详情" sortable width="80">
											<template slot-scope="props">
												<div class="caoZuo">
													<a href="#"><i class="el-icon-s-flag"></i>学期评语</a>
													<a href="#"><i class="el-icon-medal-1"></i>奖罚</a>
													<a href="#"><i class="el-icon-chat-line-square"></i>访谈</a>
													<a href="#"><i class="el-icon-date"></i>考勤</a>
													<a href="#"><i class="el-icon-notebook-1"></i>学员情况</a>
												</div>
											</template>
										</el-table-column>
										<el-table-column prop="name" label="姓名" sortable width="80">
										</el-table-column>
										<el-table-column prop="sno" label="学号" sortable width="125">
										</el-table-column>
										<el-table-column prop="lenovoAvgScore" label="联想成绩平均分" sortable width="80">
										</el-table-column>
										<el-table-column prop="rpScore" label="奖罚得分" sortable width="80">
										</el-table-column>
										<el-table-column prop="schoolAvgScore" label="学校成绩平均分" sortable width="80">
										</el-table-column>
										<el-table-column prop="zhScore" label="综合成绩" sortable width="80">
										</el-table-column>
										<el-table-column prop="checkScore" label="考勤成绩" sortable width="80">
										</el-table-column>
										<el-table-column prop="qqCount" label="缺勤次数" sortable width="80">
										</el-table-column>
										<el-table-column prop="interview" label="访谈次数" sortable width="80">
										</el-table-column>

									</el-table>
								</template>
							</div>
						</el-tab-pane>
					</el-tabs>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'students',
		data() {
			return {
				tabs:["第一学期","第二学期","第三学期","第四学期","第五学期"],
				num:'',
				tabs2:["第一学期","第二学期","第三学期","第四学期"],
				tableData: [{
					name: '王小虎',
					sno: '201809193244',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '张三全',
					sno: '201709012265',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '李小四',
					sno: '2001',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '赵小六',
					sno: '201709012265',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '王二小',
					sno: '2001',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '苗仁松',
					sno: '2001',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '刘小虎',
					sno: '2001',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '陈小虎',
					sno: '201809193244',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '刘胡兰',
					sno: '201809193244',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '王二小',
					sno: '201809193244',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}, {
					name: '欧阳小',
					sno: '201809193244',
					lenovoAvgScore: 0,
					rpScore: 0,
					schoolAvgScore: 0,
					zhScore: 0,
					checkScore: 100,
					qqCount: '--',
					interview: '--',
				}]
			}
		},
		methods: {
			formatter(row, column) {
				return row.address;
			},
			
        tab:function (index) {
            this.num = index;
        }
   
		}
	}
</script>

<style>
	#students .studentTitle {
		width: 100%;
		height: 144px;
		background: linear-gradient(60deg, rgb(218, 63, 88), rgb(255, 85, 111));
	}
	
	#students .studentTitle>div {
		width: 1100px;
		height: 144px;
		margin: auto;
		background: url(../../images/back04.png) no-repeat right 0px;
		background-size: 455px 144px;
	}
	
	#students .studentTitle div div {
		min-width: 400px;
		color: #fff;
		font-size: 25px;
		margin-left: 40px;
		padding-top: 40px;
	}
	
	#students .studentTitle div ul {
		overflow: hidden;
		margin-left: 40px;
		/*margin-top: 10px;*/
	}
	
	#students .studentTitle ul li {
		float: left;
		padding-right: 10px;
		color: #fff;
		font-size: 14px;
	}
	
	#students .stuMain {
		width: 1100px;
		margin: 10px auto;
		background: white;
		padding: 10px;
	}
	
	#students .stuMsg {
		overflow: hidden;
		/*height:16px;*/
		font-family: HiraginoSansGB-W6;
		color: rgba(64, 64, 64, 1);
		padding-bottom: 10px;
		border-bottom: 1px solid #f0f0f0;
	}
	
	.top {
		margin: 15px 0;
	}
	
	#students .stuMsg span {
		float: left;
		height: 20px;
		line-height: 18px;
		font-size: 18px;
	}
	
	#students .redSquare {
		width: 6px;
		/*height:16px;*/
		background: skyblue;
		margin-right: 10px;
	}
	
	#students .semester {
		overflow: hidden;
	}
	
	#students .semester ul li {
		font-size: 14px;
		border: 1px solid #c0c0c0;
		float: left;
		width: 169px;
		line-height: 30px;
		text-align: center;
	}
	
	#students .semester ul li:not(.oneT) {
		border-left: none;
	}
	#students .semester ul li:hover{
		cursor: pointer;
	}
	#students .semester ul li.active {
		background: #49c0e0;
		color: white;
		border-color: #49c0e0;
	}
	
	#students .tableData .el-input {
		width: auto;
	}
	
	#students .tableData .el-input-group__append {
		background: #49c0e0;
		border: 1px solid #49c0e0;
		color: white;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	
	#students .tableData .el-input__inner {
		height: 35px;
	}
	
	#students .tableData .searchInfo {
		margin-top: 20px;
		border-bottom: 1px dashed #F0F0F0;
		padding-bottom: 20px;
	}
	
	#students .tableData .searchInfo>div {
		display: inline-block;
	}
	
	#students .tableData .searchInfo>div a {
		font-size: 14px;
		color: white;
		background: #4ac0e0;
		display: inline-block;
		width: 120px;
		height: 28px;
		line-height: 28px;
		text-align: center;
	}
	
	#students .targetT {
		background: #f5f5f5;
		overflow: hidden;
		color: #2eadcd;
		/*border: 1px solid red;*/
		margin-top: 10px;
		padding: 7px 0 3px 0;
	}
	
	#students .icon {
		display: inline-block;
		margin-left: 10px;
	}
	
	#students .targetT ul {
		display: inline-block;
	}
	
	#students .targetT ul li {
		font-size: 14px;
		float: left;
		margin-right: 40px;
	}
	
	#students .statistics {
		border-bottom: 1px dashed #F0F0F0;
		padding-bottom: 20px;
		margin-top: 20px;
	}
	
	#students .statistics>div {
		display: inline-block;
		font-size: 14px;
		width: 136px;
		text-align: center;
	}
	
	#students .statistics>div i {
		font-size: 30px;
		font-weight: 900;
	}
	
	#students .i1 {
		color: #5ce5f7;
	}
	
	#students .i2 {
		color: #ef597f;
	}
	
	#students .i3 {
		color: #f67611;
	}
	
	#students .i4 {
		color: #59ecbf;
	}
	
	#students .i5 {
		color: #ed59ed;
	}
	
	#students .i6 {
		color: #f67611;
	}
	
	#students .caoZuo a {
		margin-left: 40px;
		color: #1890ff;
	}
</style>