<template>
  <div id="register">
    <el-form class="register-container" :model="registerForm" ref="registerForm"
             :rules="rules">
      <h3>注册账户</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="registerForm.username" auto-complete="off" placeholder="用户名（学号/工号）"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="密码" maxlength="20" show-password></el-input>
      </el-form-item>
      <el-form-item prop="checkPassword">
      <el-input type="password" v-model="registerForm.checkPassword" auto-complete="off" placeholder="再次确认密码" maxlength="20" show-password></el-input>
    </el-form-item>
      <el-form-item prop="email">
        <el-input type="text" v-model="registerForm.email" auto-complete="off" placeholder="邮箱地址"></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input type="text" v-model="registerForm.phone" auto-complete="off" placeholder="手机号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="register-button" type="primary" @click=submitRegister(registerForm)>点击注册</el-button>
      </el-form-item>
      <a class="login-a" href="/" target="_self">已有账户？点击登录</a>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data(){

    var validatorPhone=(rule,value,callback)=> {
      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else if (!/^1\d{10}$/.test(value)) {
        callback(new Error('手机号格式错误'))
      } else {
        callback()
      }
    };
    var validatorcheckPassword=(rule,value,callback)=>{
      if(value===''){
        callback(new Error('再次输入密码'))
      }else if(!value===this.registerForm.password){
        callback(new Error('两次输入密码不一致'))
      }else{
        callback()
      }
    };
    var validatorEmail=(rule,value,callback)=>{
      if (value === '') {
        callback(new Error('邮箱地址不能为空'))
      } else if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)) {
        callback(new Error('邮箱地址格式错误'))
      } else {
        callback()
      }
    };
    return{
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},

        ],
        checkPassword: [
          {required:true,validator:validatorcheckPassword,trigger:'blur'}
        ],
        email:[
          {required:true, validator:validatorEmail, trigger:'blur'}
        ],
        phone:[
          {required: true, validator: validatorPhone, trigger:'blur'}
        ]
      },
      registerForm: {
        username: "",
        password: "",
        checkPassword:"",
        email:"",
        phone:""
      },
    }
  },
  methods:{

    submitRegister(registerData){

    }
  }


}
</script>

<style scoped>
#register{
  position: center;
  margin-top: 50px;

}
.register-container {
  width: 600px;
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

.register-button {
  width: 50%;
}
</style>