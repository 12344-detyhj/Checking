<template>
  <div id="login">
    <el-form class="login-container" :model="loginForm" ref="loginForm"
             :rules="rules" v-loading="loading">
      <h3 class="login-title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <div >
          <a href="/register" target="_self" class="login-a" >注册</a><a href="/forgot" target="_self" class="login-a">忘记密码？</a>
        </div>
        <el-button class="login-button" type="primary" @click="submitClick('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      rules: {
        account: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      loginForm: {
        account: "",
        password: ""
      },
      loading:false,
    }
  },
  methods: {
    submitClick(loginData) {
      // 表单验证
      let vm=this
      vm.$refs[loginData].validate(valid => {
        console.log(vm.loginForm.account+"+"+vm.loginForm.password)
        if (valid) {
          // alert('提交成功！')
          vm.loading=true
          // this.$http({
          //   method:"get",
          //   url:"/mockapi/login?account="+this.loginForm.account+"&password="+this.loginForm.password,
          // }).then(function (res){
          //   this.loading=false
          //   let status=res.data["loginStatus"]
          //   if(status===false){
          //     this.$message.error(res.data["reason"])
          //   }else {
          //     this.$router.push({
          //       name:'Home',
          //       params:{
          //         identity:res.data["identity"],
          //         userName:res.data["userName"],
          //       }
          //     })
          //   }
          // });

          axios.get("/mockapi/login").then(function (res){
              vm.loading=false

              let status=res.data["loginStatus"]
              if(status===false){
                vm.$message.error(res.data["reason"])
              }else {
                console.log(res.data["userName"])
                console.log(res.data["identity"])
                vm.$router.push({
                  name:'Home',
                  query:{
                    identity:res.data["identity"],
                    userName:res.data["userName"],
                  }
                })
              }
          });
        } else {
          console.log("error submit！")
          return false
        }
      })
    }
  }

}
</script>

<style scoped>
#login{
  position: absolute;
  top: 10%;
  right: 10%;
}
.login-container {
  width: 350px;
  margin: 130px auto;
  background-clip: padding-box;
  padding: 35px 35px 15px 35px;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  background: #fff;
}

.login-title {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}

.login-a{
  margin: 0 50px 40px 50px;
  color: rgba(44,62,80,1);
  text-align: center;
  text-decoration: none;
}
.login-a:hover{
  color: rgba(44,62,80,.7);
}

.login-button {
  width: 100%;
}
</style>