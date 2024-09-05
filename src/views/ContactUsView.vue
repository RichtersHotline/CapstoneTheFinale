<template>
<div class="container-fluid">
    <div class="AboutContainer mt-5">
      <div class="AboutText">
        <h2 class="text-center text-decoration-none">Please contact Us</h2>
    <p>We’re always here to listen 24/7 if you have a question, a problem or you just want to provide feed back we’re always eager to take your call.</p>
    <h2 class="text-center text-decoration-none">Head Office</h2>
    <p>Telephone: 082 198 521</p>
    <p>Email: BrokenHero@gmail.com</p>
    <p>Address: 81 Miami Road, Florida</p>
    <h2 class="text-center text-decoration-none">Give us a personalised Email</h2>
      </div>
</div>
<div class="Contact">
    <form action="https://formspree.io/f/myzgoplq" id="UserForm"
          method="POST">
    <div class="row">
        <div class="col">
          
          
  <h2 class="text-center">First Name:</h2> 
  <div class="ContactUsText">
  <input type="text" name="FirstName" placeholder="First name..." class="User" id="ContactForm" required UserEntry>
  </div>
        </div>
        <div class="col">
          <h2 class="text-center">Last Name:</h2> 
          <div class="ContactUsText">
              <input type="text" name="LastName" placeholder="Last name..." class="User" id="ContactForm"  required UserEntry>
          </div>
                    </div>
    </div>
    <div class="row pt-4">
      <div class="col">
  <h2 class="text-center">Mobile Number:</h2> 
  <div class="ContactUsText">
  <input type="number" name="Phone" placeholder="Mobile Number" id="ContactForm" required UserEntry>
  </div>
      </div>
      <div class="col">
        <h2 class="text-center">Email Address:</h2> 
        <div class="ContactUsText">
            <input type="email" name="Email" placeholder="Email..." id="ContactForm" required UserEntry>
        </div>
        
                  </div>
                  <div class="row pt-4">
                    <div class="col">
                <h2 class="text-center">Category</h2> 
                <div class="ContactUsText">
                <select  name="Category" id="ContactForm">
                <option value="Complaint">Complaint</option>
                <option value="Feedback">Feedback</option>
                <option value="Inquiry">Inquiry</option>
                <option value="GeneralMessage">Account Issue</option>
                <option value="ReportUser">Report User</option>
                <option value="Careers">Career Opportunities</option>

                </select>
                </div>
            </div>
                
        </div>
        <div class="row pt-4">
            <div class="col">
        <h2 class="text-center">Your Message</h2> 
        <div class="ContactUsText">
        <textarea id="ContactForm" name="UserMessage" rows="5" cols="50" required></textarea>
        </div>
            </div>
        </div>
        <div class="BtnCenter">
        <button id="VipBtn" type="submit" @click="Validation()"  class="mb-5 ">Send Your Message</button>
        <button id="VipBtn" type="button" @click="Clear()" class="mb-5">Clear</button>
        <span id="cleartxt"></span>
        </div>
        
        
  </div>
</form>

    



</div>
<h1 >Testing Grounds</h1>
<div v-if="Users">

  <div class="Profiles" v-for="user in Users" :key="user.userID">
  
  <h2>{{user.firstName}}</h2>
  <h2>{{user.lastName}}</h2>
  <h2>{{user.emailAddress}}</h2>
  <h2>{{user.mobileNumber}}</h2>
  <router-link :to="{name: 'profile', params: { id: user.userID } }">
    <button type="button" class="VipBtn">View Profile</button>
  </router-link>"
  </div>
</div>
<div v-else>
  Be patient
</div>



</div>

</template>
<script>
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
export default {
components: {

  

},
computed: {
Users() {

return this.$store.state.users
},


},
methods: { 
  Clear() {

let UserEntries = document.getElementById("UserForm")
UserEntries.reset()
toast.success(`${"Your form has been reset."}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
  },
  Validation() {
    let Email = document.getElementsByName("Email")[0]

  let UserEntry = document.getElementById("ContactForm")
  if (!Email.value.includes('@')) {
    toast.error(`${"You have entered an invalid email address."}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
 } 

switch(UserEntry.value) {

  case "":
  toast.error(`${"You have not entered any values."}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
break;
case 70: 
alert("Please enter values that are less than 70 characters")
break;
case "Richter" :
  alert("Welcome. Owner")
}

  }

},
mounted() {
this.$store.dispatch("fetchUsers")
console.log(this.Users)


}
}

</script>