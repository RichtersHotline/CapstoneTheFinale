<template>
<div class="container-fluid Background" id="BG">
    <h2 class="text-center Welcome">Welcome, Hero</h2>
    <h5 class="text-center Welcome">Home Of The Broken Heroes </h5>

<div class="SplashContainer">
<div class="TextContent">
<h2 class="text-center">Login</h2>
<h2>Email Address:</h2>

     <input type="email" name="Email" v-model="emailAddress" placeholder="Email..." id="LoginForm" required UserEntry>
     <h2 class="" id="logPwd">Password:</h2>

<input type="password" name="password" class="Pwd" v-model="userPwd" placeholder="Password..." id="LoginPForm"  UserEntry>
<h2 name="Admin" id="Admin" class="Admin">Admin Key:</h2>

     <input type="password" name="Admin" class="Admin" v-model="adminKey" placeholder="Admin key..." id="LoginAdminForm" UserEntry>
<div class="btnContainer mx-auto">
    <div class="router-link">
        <button id="VipBtnULogin" type="button" class="mb-4 mx-auto" @click.prevent="login">Login As User</button>
        <button id="VipBtnAdminLogin" type="button" class="mb-4 mx-auto Admin" @click.prevent="Adminlogin">Login As Admin</button>

    </div>
    <h5 class="text-center"> Are you an admin?</h5>
    <input type="checkbox" id="AdminCheck" name="AdminCheck" @click="adminCheck">

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
import Swal from 'sweetalert2'

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

  let Email = document.getElementsByName("Email")[0];
  let Password = document.getElementsByName("password")[0];
  if (!Email.value.includes('@')) {
    toast.error("You have entered an invalid email address.", {
      autoClose: 5000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark'
    });
    return;
  }

  if (Password.value === "" || Email.value === "") {
    toast.error("You have not filled out a field value.", {
      autoClose: 5000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark'
    });
    return;
  }

  if (Password.value.length > 70) {
    alert("Please enter values that are less than 70 characters");
    return;
  }

  if (Email.value === "Richter") {
    toast.success("Welcome Owner.", {
      autoClose: 5000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark'
    });
  }

  try {
    const response = await axios.post('https://home-of-the-broken-heroes.onrender.com/users/login', {
      emailAddress: this.emailAddress,
      userPwd: this.userPwd,
    });
    console.log('Response:', response);
    if (response.data.token && response.data.result) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.result.userID); 
      console.log('Token and user ID stored:', localStorage.getItem('token'), localStorage.getItem('userId'));
      console.log('Navigating to home...');
      Swal.fire({
        customClass: {
    title: 'swal2-header',
        },
        title: 'Login Successful',
    text: 'Welcome back, hero.',
    icon: 'success',
    timer: 4000, // 2 seconds
    showConfirmButton: false
  }).then(() => {
      this.$router.push('/home').then(() => {
        console.log('Navigation successful');
      })
    }).catch(err => {
        console.error('Navigation error:', err);
      });
    } else {
      console.log('Login failed:', response.data);
      toast.error("Email Address or Password is not correct. Please check your details.", {
        autoClose: 5000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      });
    }
  } catch (err) {
    console.error('Error during login:', err);
    toast.error("Something went wrong with Login. Please try again later", {
      autoClose: 5000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark'
    });
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
      return;
      case 70: 
alert("Please enter values that are less than 70 characters")
return;
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
          Swal.fire({
        customClass: {
    title: 'swal2-header',
        },
        title: 'Login Successful',
    text: 'Welcome back, founder.',
    icon: 'success',
    timer: 4000, // 2 seconds
    showConfirmButton: false
  }).then(() => {
          this.$router.push('/admin');
          console.log(this.userRole)
  })
        }
        else if(!response.data.token) {
            toast.error(`${"Email Address or Password is not correct. Please check your details."}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'
          
        })
        return;

        }
      } catch (err) {
        toast.error(`${"Something went wrong with Login. Please try again later"}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
      }
    },
   adminCheck() {
  if(document.getElementById("AdminCheck").checked) {

    document.getElementById("Admin").style.display = "block";
    document.getElementById("LoginAdminForm").style.display = "block";
    document.getElementById("VipBtnAdminLogin").style.display = "block";
    document.getElementById("LoginPForm").style.display = "none";
    document.getElementById("logPwd").style.display = "none";
    document.getElementById("VipBtnULogin").style.display = "none";


    
  }
  else if (!document.getElementById("AdminCheck").checked) {
    document.getElementById("Admin").style.display = "none";
    document.getElementById("LoginAdminForm").style.display = "none";
    document.getElementById("VipBtnAdminLogin").style.display = "none";
    document.getElementById("LoginPForm").style.display = "block";
    document.getElementById("logPwd").style.display = "block";
    document.getElementById("VipBtnULogin").style.display = "block";

  }

   }
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


