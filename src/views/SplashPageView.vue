<template>
<div class="container-fluid Background" id="BG">
    <h2 class="text-center Welcome">Welcome, Hero</h2>
    <h5 class="text-center Welcome">Home Of The Broken Heroes </h5>

<div class="SplashContainer">
<div class="TextContent">
<h2 class="text-center">Login</h2>
<h2>Email Address:</h2>

     <input type="email" name="Email" v-model="emailAddress" placeholder="Email..." id="LoginForm" required UserEntry>
     <h2 class="">Password:</h2>

<input type="password" name="Email" class="" v-model="userPwd" placeholder="Password..." id="LoginForm"  UserEntry>
<h2 name="Admin" class="">Admin Key:</h2>

     <input type="email" name="" v-model="adminKey" placeholder="Admin key..." id="LoginForm" UserEntry>
<div class="btnContainer mx-auto">
    <div class="router-link">
        <button id="VipBtnLogin" type="button" class="mb-4 me-3 mx-auto" @click.prevent="login">Login As User</button>
        <button id="VipBtnLogin" type="button" class="mb-4 mx-auto" @click.prevent="Adminlogin">Login As Admin</button>

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
      adminKey:"",    
    };
  },
  methods: {
    async login() {
      console.log("Email Address:", this.emailAddress);
      console.log("Entered Password", this.userPwd);

      let UserEntry = document.getElementById("LoginForm")
      let Email = document.getElementsByName("Email")[0]
      if (!Email.value.includes('@')) {
    toast.error(`${"You have entered an invalid email address."}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
 } 
 switch(UserEntry.value) {

case "":
toast.error(`${"You have not filled out a field value."}`, {
        autoClose: 5000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      })
break;
case 70: 
alert("Please enter values that are less than 70 characters")
break;
case "Richter" :
toast.success(`${"Welcome Owner."}`, {
        autoClose: 5000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      })}

    //Login Functionality Users
      try {
        const response = await axios.post('https://home-of-the-broken-heroes.onrender.com/users/login', {
            emailAddress: this.emailAddress,
          userPwd: this.userPwd,
        });
        console.log('Response:', response);
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/home');
          console.log(this.userRole)
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
    },
    async Adminlogin() {
      console.log("Email Address:", this.emailAddress);
      console.log("Entered Password", this.adminKey);

      let UserEntry = document.getElementById("LoginForm")
      let Email = document.getElementsByName("Email")[0]
      if (!Email.value.includes('@')) {
    toast.error(`${"You have entered an invalid email address."}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
 } 
 switch(UserEntry.value) {

case "":
toast.error(`${"You have not filled out a field value."}`, {
        autoClose: 5000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      })
break;
case 70: 
alert("Please enter values that are less than 70 characters")
break;
case "Richter" :
toast.success(`${"Welcome Owner."}`, {
        autoClose: 5000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      })}

    //Login Functionality Admin
      try {
        const response = await axios.post('https://home-of-the-broken-heroes.onrender.com/users/login/admin', {
            emailAddress: this.emailAddress,
          adminKey: this.adminKey,
        });
        console.log('Response:', response);
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/admin');
          console.log(this.userRole)
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
    },
  
  },
//   mounted() {
// adminPart = document.getElementsByName("Admin").style.display = "none";

//   }

};
</script>
<style scoped>

.Background{

    padding:0 !important;

}
.container-fluid {

    padding:0 !important;

}


</style>


