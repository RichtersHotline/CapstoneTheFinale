<template>
<div class="container-fluid p-0">
    <div class="imgContainer">
      <h2 class="centereds display-4">Welcome To Our Unit</h2>
      <h4 class="centereds2">Sign up is and always will be 100% free.</h4> 
    <img src="https://richtershotline.github.io/Pimages/Images/ManFlag.jpg" id="SignupImg" loading="lazy" class="img-fluid">
    <div class="Contact">
    <form id="UserForm" @submit.prevent="Registration">
    <div class="row">
        <div class="col">
          
          
  <h2 class="text-center">First Name:</h2> 
  <div class="ContactUsText">
  <input type="text" name="FirstName" placeholder="First name..." class="User" id="ContactForm" v-model="payload.firstName" required UserEntry>
  </div>
        </div>
        <div class="col">
          <h2 class="text-center">Last Name:</h2> 
          <div class="ContactUsText">
              <input type="text" name="LastName" placeholder="Last name..." class="User" id="ContactForm" v-model="payload.lastName"  required UserEntry>
          </div>
                    </div>
    </div>
    <div class="row pt-4">
      <div class="col">
  <h2 class="text-center">Mobile Number:</h2> 
  <div class="ContactUsText">
  <input type="number" name="Phone" placeholder="Mobile Number" id="ContactForm" v-model="payload.mobileNumber" required UserEntry>
  </div>
  <h2 class="text-center">Rank/Unit:</h2> 
  <div class="ContactUsText">
  <input type="text" name="Rank" placeholder="Rank..." id="ContactForm" v-model="payload.UnitorRank" required UserEntry>
  </div>
      </div>
      <div class="col">
        <h2 class="text-center">Email Address:</h2> 
        <div class="ContactUsText">
            <input type="email" name="Email" placeholder="Email..." id="ContactForm" v-model="payload.emailAddress" required UserEntry>
        </div>
        <h2 class="text-center">Status:</h2> 
  <div class="ContactUsText">
<select name="Status" id="ContactForm" v-model="payload.combatStatus">
<option value="Active">Active</option>
<option value="Veteran">Veteran</option>


</select>
</div>
                  </div>
                  
                  <div class="row pt-4">
                    <div class="col">
                <h2 class="text-center">Password:</h2> 
                <input type="password" name="Email" placeholder="Password..." id="SignUpPassword" v-model="payload.userPwd" required UserEntry>

            </div>
                
        </div>
     
        <div class="BtnCenter">
        <button id="VipSignUp" type="submit" @click.prevent="Registration"  class="mb-5">Enlist</button>
        </div>
        
        
  </div>
</form>

    



</div>
  </div>

</div>

</template>
<script>
// import axios from "axios";
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
export default {
data() {
return {
payload: {
firstName: "",
lastName: "",
mobileNumber:null,
emailAddress: "",
UnitorRank:"",
combatStatus:"",
userPwd:"",

}



}



},
computed: {
users() {

  return this.$store.state.users

}


},
methods: {
Registration() {
  try {
    console.log(this.payload);
    this.$store.dispatch("addAUser", this.payload);
    setTimeout(() => {

window.location.href="/";



}, "5000")

  } catch (error) {

    toast.error(`${"Registration could not be completed. Please try again later."}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })

  }



}




}
}


</script>