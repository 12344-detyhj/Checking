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
import {Message}from 'element-ui'
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
      redirect:undefined,
      otherQuery:{},
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
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

          vm.$store.dispatch('token/login',vm.loginForm).then(()=>{
            vm.loading=false
            vm.$router.push({path:this.redirect ||'/', query: this.otherQuery});
          }).catch(err=>{
            vm.loading=false
            Message.error(err.message|| "出现错误，请稍后再试");
          })
        } else {
          console.log("error submit！")
          return false
        }
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
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