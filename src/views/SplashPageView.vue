<template>
<div class="container-fluid Background">
    <h2 class="text-center">Welcome, Hero</h2>
    <h5 class="text-center">Home Of The Broken Heroes </h5>

<div class="SplashContainer">
<div class="TextContent">
<h2 class="text-center">Login</h2>
<h2>Email Address:</h2>

     <input type="email" name="Email" v-model="emailAddress" placeholder="Email..." id="LoginForm" required UserEntry>
     <h2 class="mt-5">Password:</h2>

<input type="password" name="Email" v-model="userPwd" placeholder="Password..." id="LoginForm" required UserEntry>
<div class="btnContainer mx-auto">
    <div class="router-link">
        <button id="VipBtnLogin" type="button" class="mb-4 mx-auto" @click.prevent="login">Login</button>
    </div>
    <p class="text-center mb-3">Don't have an account? Sign up now.</p>

    <router-link to="/signup" class="router-link">
<button id="VipBtnLogin" type="button" class="mb-5 mx-auto">Register</button>
</router-link>
</div>
</div>
</div>
</div>

</template>

<script>
import axios from 'axios';
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
export default {
  data() {
    return {
      emailAddress:"",
      userPwd:"",    
    };
  },
  methods: {
    async login() {
      console.log("Email Address:", this.emailAddress);
      console.log("Entered Password", this.userPwd);
      try {
        const response = await axios.post('https://home-of-the-broken-heroes.onrender.com/users/login', {
            emailAddress: this.emailAddress,
          userPwd: this.userPwd,
        });
        console.log('Response:', response);
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/');
        }
        else if(!response.data.token) {
            toast.error(`${"Email Address or Password is not correct. Please check your details."}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'
          
        })
        }
      } catch (err) {
        toast.error(`${"Something went wrong with Login. Please try again later"}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
      }
    }
  }
};
</script>


