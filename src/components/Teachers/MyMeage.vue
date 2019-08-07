<template>
    <div id="myMessage">
       <div class="z_top">
           个人中心
       </div>
       
       <el-tabs class="z_p_tab" type="border-card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="个人信息" name="first">
                <div class="z_center">
                    <div class="z_c_pname">
                        <div class="z_c_p_1">
                            基本资料
                        </div>
                    </div>
                    <!-- 基本资料 -->
                    <div v-if="userInfo" class="z_c_one">
                            <div class="z_one_message">
                            <div class="one_m_l">
                                姓名：
                            </div>
                            <div class="one_m_r">
                                {{userInfo.userName}}
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                学号：
                            </div>
                            <div class="one_m_r">
                                234567890
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                专业：
                            </div>
                            <div class="one_m_r">
                                移动互联(web前端方向)
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                班级：
                            </div>
                            <div class="one_m_r">
                                北信息1722051
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                学校身份：
                            </div>
                            <div class="one_m_r">
                                {{userInfo.roles}}
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                学校：
                            </div>
                            <div class="one_m_r">
                                北京信息职业技术学院
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                性别：
                            </div>
                            <div class="one_m_r">
                                {{userInfo.sysUserDetail.sex}}
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                出生日期：
                            </div>
                            <div class="one_m_r">
                               {{userInfo.sysUserDetail.brithday}}
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                身份份证号：
                            </div>
                            <div class="one_m_r">
                                {{userInfo.sysUserDetail.idCard}}
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                邮箱：
                            </div>
                            <div class="one_m_r">
                                {{userInfo.email}}
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                手机：
                            </div>
                            <div class="one_m_r">
                                {{userInfo.mobile}}
                            </div>
                        </div>
                        <div class="z_one_message">
                            <div class="one_m_l">
                                家庭住址：
                            </div>
                            <div class="one_m_r">
                                {{userInfo.sysUserDetail
.addressDetail}}
                            </div>
                        </div>

                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="修改密码" name="second" style="min-height:300px;">
                <div class="z_center">
                    <div class="z_c_pname">
                        <div class="z_c_p_1">
                            修改密码
                        </div>
                    </div>
                    <!-- 基本资料 -->
                    <div class="z_c_one">
                        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                            <el-form-item label="原始密码">
                                <el-input v-model="formLabelAlign.name"></el-input>
                            </el-form-item>
                            <el-form-item label="新密码">
                                <el-input v-model="formLabelAlign.region"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码">
                                <el-input v-model="formLabelAlign.type"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="checkPassword">修改</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>

   export default {
       data:function(){
           return{
               activeName: 'first',
               labelPosition: 'right',
               formLabelAlign: {
                    name: '',   //原始密码
                    region: '',  //用户的新密码
                    type: ''      //用户确认密码
                },
                userInfo:null
           }
       },
       methods:{
           checkPassword:function(){
               var app = this;
                if(this.formLabelAlign.name&&this.formLabelAlign.region&&this.formLabelAlign.type){
                    if(this.formLabelAlign.region === this.formLabelAlign.type){
                        var id = window.localStorage.getItem("userId");
                        this.$http.post(`/permit/user/modifyPassword`,{
                            id:id,
                            password:this.formLabelAlign.name,
                            newPassword:this.formLabelAlign.type
                        }).then(function(res){
                            if(res.data == ""){
                                alert("恭喜你密码修改成功");
                                app.formLabelAlign.name = "";
                                app.formLabelAlign.region = "";
                                app.formLabelAlign.type = "";
                            }
                        })
                    }else{
                        alert("两次密码输入不一致，请重新设置新密码")
                    }
                }else{
                    alert("输入内容不能为空")
                }
            },
            handleChange(val) {
				console.log(val);
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
       },
       created(){
           var userId = window.localStorage.getItem('userId');
        //    console.log(userId);
           this.$http.post(`/permit/user/detail/${userId}`).then(
              (res)=>{
                  console.log(res);
                this.userInfo = res.data; 
              }
			); 
       }
  };

</script>

<style scoped>

   .z_top{
       width: 100%;
       height: 80px;
       background: #65B0F2;
       font-size: 20px;
       font-weight: 600;
       text-align: center;
       line-height: 80px;
       color: #fff;
   }
   .z_top_i{
       overflow: hidden;
       background: #CDB1F4;
   }
   .z_top_i div{
       color: #fff;
       padding: 3px 0;
       font-size: 13px;
       margin-left: 280px;
   }
    .z_top_i2{
       overflow: hidden;
       background: #E4E9EC;
   }
   .z_top_i2 .z_t_i_1{
       width:500px;
       height: 30px;
       text-align: center;
       color: #000;
       padding: 3px 0;
       font-size: 13px;
       margin-left: 260px;
       float: left;
       line-height: 30px;
       background: #fff;
   }
   .z_top_i2 .z_t_i_0{
       width:500px;
       height: 30px;
       text-align: center;
       color: #222;
       padding: 3px 0;
       font-size: 13px;
       float: left;
       line-height: 30px;
       background: #E4E9EC;
   }


   .z_center .z_c_pname,.z_c_one{
       margin: 10px 0;
       width: 960px;
       overflow: hidden;
       background: #fff;
       margin-left: 280px;
   }
   .z_center .z_c_pname .z_c_p_1{
       line-height: 24px;
       font-size: 16px;
       border-left: 3px solid #4AC0DF;
       padding-left: 8px;
       float: left;
       color: #000000;
   }
   .z_center .z_c_pname .z_c_p_2{
       width: 120px;
       height: 24px;
       line-height: 24px;
       float: right;
       background: #49C0E0;
       font-size: 12px;
       font-weight: 600;
       color: #fff;
       text-align: center;
   }
   .z_center .z_c_pname .z_c_p_3{
       width: 100px;
       height: 24px;
       line-height: 24px;
       margin-right: 30px;
       float: right;
       background: #49C0E0;
       font-size: 12px;
       font-weight: 600;
       color: #fff;
       text-align: center;
   }
   .z_c_one .z_one_message{
       /* background: red; */
       overflow: hidden;
       border: 1px dashed #DEDEDE;
       margin: 10px 0;
   }
   .z_c_one .z_one_message .one_m_l{
       width: 20%;
       height: 40px;
       background: #F2F2F2;
       float: left;
       text-align: center;
       line-height: 40px;
       font-size: 14px;
       font-weight: 900;
       color: #606060;
   }
   .z_c_one .z_one_message .one_m_r{
       width: 80%;
      height: 40px;
       /* background: #F2F2F2; */
       float: left;
       text-align: center;
       line-height: 40px;
       font-size: 14px;
       /* font-weight: 900; */
       color: #606060;
   }

   /* ---------------------------------------------------------- */
  .el-tabs /deep/ .el-tabs__nav{
        margin-left: 140px;
    }
   
    .el-form-item{
        width:50%;
        margin: 20px auto;
    }
    
  
</style>