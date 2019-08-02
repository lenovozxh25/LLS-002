<template>
  <div id="students" style="background: #f5f5f7;padding-bottom: 20px;">
    <div class="studentTitle">
      <div>
        <div>学员管理</div>
        <ul>
          <li>真实客观统计学员数据</li>
          <li>贴近学员生活学习</li>
          <li>记录学生成长</li>
        </ul>
      </div>
    </div>
    <div class="stuMain">
      <div>
        <template>
          <p class="stuMsg top">
            <span class="redSquare"></span>
            <span>学员管理</span>
          </p>
          <div style="overflow:hidden">
            <el-button
              type="success"
              style="float:right;margin-right:20px;"
              @click="dialogVisible = true"
            >新增学生</el-button>
            <el-button
              type="success"
              style="float:right;margin-right:20px;"
              @click="dialogClassVisible = true"
            >新增班级</el-button>
          </div>
          <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
            <el-tab-pane
              :label="'北信息'+item.name"
              :name="item.id.toString()"
              v-for="(item,index) in CurrentClassList"
              :key="index"
            >
              <el-table
                :data="CurrentStudentList.filter(data => !search || data.userName.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%"
              >
                <el-table-column label="姓名" prop="userName"></el-table-column>
                <el-table-column label="电话" prop="mobile"></el-table-column>

                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column label="操作" align="center">
                  <template slot-scope="scope">
                    <div>
                      <el-link type="primary" @click="rewardsNineElements(scope.row.id,title1)">奖励</el-link>
                      <span style="color:#ebeef5;margin:0 10px">|</span>
                      <el-link type="primary" @click="rewardsNineElements(scope.row.id,title2)">待改进</el-link>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column align="right">
                  <template slot="header" slot-scope="scope">
                    <el-input v-model="search" placeholder="请输入您要搜索的学生姓名" />
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <!-- 新增学生弹框具体内容 -->
            <el-dialog
              title="新增学生"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
            >
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="学生班级:">
                  <el-select v-model="form.className" placeholder="请选择学生班级">
                    <el-option
                      :label="item.name"
                      v-for="(item,index) in CurrentClassList"
                      :key="index"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="姓  名:">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="电  话:">
                  <el-input v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="邮  箱:">
                  <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="身份证号:">
                  <el-input v-model="form.sysUserDetail"></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="classMemberSave(form.name,form.email,form.mobile,form.sysUserDetail,form.className)"
                >确 定</el-button>
              </span>
            </el-dialog>
            <!-- 新增班级弹框具体内容 -->
            <el-dialog
              title="新增班级"
              :visible.sync="dialogClassVisible"
              width="30%"
              :before-close="handleClose"
            >
              <el-form ref="form" :model="formClass" label-width="80px">
                <el-form-item label="班级名称:">
                  <el-input v-model="formClass.className"></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="classMemberSave(form.name,form.email,form.mobile,form.sysUserDetail,form.className)"
                >确 定</el-button>
              </span>
            </el-dialog>
          </el-tabs>
        </template>
      </div>
    </div>
    <el-dialog title="奖励" :visible.sync="rewardsVisible" width="60%" :before-close="handleClose">
      <template>
        <div class="block">
          <span class="demonstration">评价时间：</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          <el-button type="primary" style="float:right">保存</el-button>
        </div>
      </template>
      <div class="stu_rewards">
        奖励共
        <span>0</span>次，共
        <span>0</span>分
      </div>
      <table class="nine_table">
        <tr>
          <th>联想9要点</th>
          <th>奖励细则</th>
        </tr>
        <tr>
          <td rowspan="3">行动3要求</td>
          <td>
            <div>主动</div>
            <ul>
              <li>
                <el-checkbox label="(1)提问主动(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(2)反馈主动(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(3)协作主动(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(4)其它(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <div>沟通</div>
            <ul>
              <li>
                <el-checkbox label="(1)敢于说话(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(2)理解清楚(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(3)表达清楚(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(4)其它(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <div>守时</div>
            <ul>
              <li>
                <el-checkbox label="(1)守时(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(2)守规(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(3)守要求(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(4)其它(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td rowspan="5">品德5要求</td>
          <td>
            <div>认真</div>
            <ul>
              <li>
                <el-checkbox label="(1)做作业认真(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(2)听课与笔记认真(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(3)参加活动认真(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(4)其它(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <div>独立</div>
            <ul>
              <li>
                <el-checkbox label="(1)独立思考能力(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(2)独立生活能力(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(3)其它(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <div>毅力</div>
            <ul>
              <li>
                <el-checkbox label="(1)持之以恒(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(2)抗压能力(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(3)其它(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <div>诚信</div>
            <ul>
              <li>
                <el-checkbox label="(1)诚实(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(2)纪律(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(3)说到做到(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(4)其它(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <div>团队</div>
            <ul>
              <li>
                <el-checkbox label="(1)积极参与团队活动(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(2)为集体荣誉着想拼搏(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
              <li>
                <el-checkbox label="(3)其它(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>结果1要求</td>
          <td>
            <div>好人好事</div>
            <ul>
              <li>
                <el-checkbox label="(1)其它(0次)"></el-checkbox>
                <el-input size="small" placeholder="备注" v-model="input2"></el-input>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </el-dialog>
    <!-- 待改进 -->
    <el-dialog title="待改进" :visible.sync="badVisible" width="60%" :before-close="handleClose">
      <template>
        <div class="block">
          <span class="demonstration">评价时间：</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          <el-button type="primary" style="float:right">保存</el-button>
        </div>
      </template>
      <div
        class="stu_rewards"
        style="background-color: rgb(253, 229, 225);color: rgb(244, 130, 117);"
      >
        待改进共
        <span>0</span>次，共
        <span>0</span>分
      </div>
      <div>
        <el-table
          :data="filterGood"
          :span-method="objectSpanMethod"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="name" label="联想9要素" width="180"></el-table-column>
          <el-table-column prop="name" label="待改进细则">
			  <template slot-scope="scope">
				  <div>
					  {{scope.row.name}}
				  </div>
			  </template>
		  </el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "students",
  data() {
    return {
      value1: "",
      input2: "",
	  nineElementsList: [], //九要素内容
	  title1:1,
	  title2:2,
      form: {
        name: "",
        mobile: "",
        email: "",
        sysUserDetail: "",
        className: ""
      },
      formClass: {
        className: ""
      },
      // 班级id
      tabId: "",
      //新增弹框默认隐藏
      dialogVisible: false,
      //新增班级弹框默认隐藏
      dialogClassVisible: false,
	  rewardsVisible: false, //奖励弹窗
	  badVisible:false,
      activeName: "37",
      // 讲师所带过的所有班级
      CurrentClassList: [],
      // 班级学生
      CurrentStudentList: [],
      tabs: ["第一学期", "第二学期", "第三学期", "第四学期", "第五学期"],
      num: "",
      tabs2: ["第一学期", "第二学期", "第三学期", "第四学期"],
      // tableData: [],
      search: ""
    };
  },
  methods: {
    handleClick(tab) {
      // console.log(tab.name);
      this.tabId = parseInt(tab.name);
      this.getCurrentStudent(this.tabId);
    },
    formatter(row, column) {
      return row.address;
    },

    tab: function(index) {
      this.num = index;
    },

    // 获取讲师所带过的所有班级
    getCurrentClass(teacherId) {
      var app = this;
      this.$http
        .get(`/business/organClassUser/allClassListByTeacherId/${teacherId}`)
        .then(function(res) {
          app.CurrentClassList = res.data;
          console.log(app.CurrentClassList);
        });
    },
    //根据班级获取学生
    getCurrentStudent(classId) {
      var app = this;
      this.$http
        .get(
          `/business/organDuty/getStudentListByClassId/${
            classId ? classId : app.CurrentClassList[0].id
          }`
        )
        .then(function(res) {
          app.CurrentStudentList = res.data;
          console.log(app.CurrentStudentList);
        });
    },
    //新增学生弹框确认关闭事件
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //新增学生
    classMemberSave(userName, email, mobile, sysUserDetail, classId) {
      console.log(userName, email, mobile, sysUserDetail, classId);
      console.log(classId);
      debugger;
      var app = this;
      if (!userName || !email || !mobile || !sysUserDetail || !classId) {
        this.$message.error("信息填写不完整");
      } else {
        this.$http
          .post("/business/organClassUser/save", {
            userName,
            email,
            mobile,
            classId,
            sysUserDetail
          })
          .then(function(res) {
            if (res.data == "") {
              app.dialogVisible = false;
              app.$message.success("添加学生成功");
              app.getCurrentStudent(classId);
            }
          });
      }
    },
    //奖励九要素内容
    rewardsNineElements(studentId,title1) {
		if(this.title1==title1){
			this.rewardsVisible = true;
		}else{
			this.badVisible=true;
		}
      var app = this;
      //debugger;
      this.$http
        .get(
          `/business/nineEssentialFactor/getAllListByStudentIdShowTree/${studentId}`
        )
        .then(res => {
          app.nineElementsList = res.data;
          console.log(app.nineElementsList);
        });
	},
	objectSpanMethod({ row, column, rowIndex, columnIndex }) {
		console.log({ row, column, rowIndex, columnIndex })
        if (columnIndex === 0) {
          if (rowIndex == 0) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
  },
  created() {
    this.userId = window.localStorage.getItem("userId");
    this.getCurrentClass(this.userId);
    this.getCurrentStudent(37);
  },
  computed: {
    filterGood() {
      return this.nineElementsList.filter(function(item) {
        return item.goodOrBad == "G";
      });
    },
    filterBad() {
      return this.nineElementsList.filter(function(item) {
        return item.goodOrBad == "B";
      });
    }
  }
};
</script>

<style>
#students .studentTitle {
  width: 100%;
  height: 144px;
  background: linear-gradient(60deg, rgb(218, 63, 88), rgb(255, 85, 111));
}

#students .studentTitle > div {
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
#students .semester ul li:hover {
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
  border-bottom: 1px dashed #f0f0f0;
  padding-bottom: 20px;
}

#students .tableData .searchInfo > div {
  display: inline-block;
}

#students .tableData .searchInfo > div a {
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
  border-bottom: 1px dashed #f0f0f0;
  padding-bottom: 20px;
  margin-top: 20px;
}

#students .statistics > div {
  display: inline-block;
  font-size: 14px;
  width: 136px;
  text-align: center;
}

#students .statistics > div i {
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
/* .el-form-item__label{
		text-align: left;
	} */

.stu_rewards {
  width: 100%;
  background-color: rgb(97, 245, 143);
  color: rgb(69, 152, 17);
  font-size: 12px;
  padding: 5px 0px;
  text-indent: 2em;
  margin-top: 20px;
}
.nine_table {
  width: 100%;
  border-collapse: collapse;
}
.nine_table tr td,
.nine_table tr th {
  border: 1px solid #e3e3e3;
  position: relative;
}
.nine_table tr th {
  padding: 5px 0px;
}
.nine_table tr td:first-child {
  text-align: center;
}
.nine_table tr td > div {
  width: 30%;
  text-align: center;
  position: absolute;
  top: 50%;
  margin-top: -10px;
}
.nine_table tr td > ul {
  width: 69%;
  float: right;
}
.nine_table tr td > ul li {
  margin: 10px 0px;
  height: 36px;
  line-height: 36px;
}
.nine_table .el-checkbox {
  float: left;
}
.nine_table .el-input {
  width: auto;
  float: right;
}
</style>