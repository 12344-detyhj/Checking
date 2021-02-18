<template>
  <div id="forgot">
    <el-form class="forgot-container" :model="forgotForm" ref="forgotForm"
             :rules="rules">
      <h3>找回密码</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="forgotForm.account" auto-complete="off" placeholder="用户名（学号/工号）" :required="true"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="forgotForm.password" auto-complete="off" placeholder="密码" maxlength="20" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio v-model="forgotForm.func" label="email" :disabled='isDisabled'>通过邮箱获取验证码</el-radio>
        <el-radio v-model="forgotForm.func" label="phone" :disabled='isDisabled'>通过手机短信获取验证码</el-radio>
      </el-form-item>
      <el-form-item prop="smscode" class="code">
        <el-input v-model="forgotForm.smscode" placeholder="验证码"></el-input>
        <el-button type="primary" :disabled='isDisabled' @click="sendCode">{{buttonText}}</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="forgot-button" type="primary" @click=submitForgot(forgotForm)>重设密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "forgotPassword",
  data(){
    let checkSmscode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机验证码'))
      } else {
        callback()
      }
    }
    return{
      rules:{
        account: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
        smscode: [
          {required:true, validator:checkSmscode,trigger:'blur'}
        ],
      },
      forgotForm:{
        account:"",
        password:"",
        func:"phone",
        smscode:"",
      },
      buttonText: '发送验证码',
      isDisabled: false,
      flag:true,
    }
  },
  methods:{
    sendCode () {
        let time = 60
        this.buttonText = '已发送'
        this.isDisabled = true
        if (this.flag) {
          this.flag = false;
          let timer = setInterval(() => {
            time--;
            this.buttonText = time + ' 秒'
            if (time === 0) {
              clearInterval(timer);
              this.buttonText = '重新获取'
              this.isDisabled = false
              this.flag = true;
            }
          }, 1000)
        }
    },
    submitForgot(forgotData) {
      this.$refs[forgotData].validate(valid => {
        if (valid) {
          this.$message.success("修改成功!")
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },

  }
}
</script>

<style scoped>
#forgot{
  position: center;
  margin-top: 50px;
}
.forgot-container {
  width: 600px;
  margin: 130px auto;
  background-clip: padding-box;
  padding: 35px 35px 15px 35px;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  background: #fff;
}
.code >>> .el-form-item__content{
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}

</style>