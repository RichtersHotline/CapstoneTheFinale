<template>
  <div class="container-fluid">
  <div class="leftCon">
    <div class="userBox">
    <div class="UserContent">
      <div class="ImgBack">
      <img src="https://richtershotline.github.io/Pimages/Images/placeholder.png">
    </div>
    <div v-if="fetchUser">
    <div class="profile" v-for="user in User" :key="user.userID">
      <h5>{{user.firstName}} {{user.lastName}}</h5>
      <p>{{user.UnitorRank}}</p>
      <h5>{{user.emailAddress}}</h5>
      <h5>Unique ID: {{user.userID}}</h5>
    <h5>Comrades:</h5>
    <p>{{user.FriendCount}}</p>
    <h5>Profile Management</h5>
    <button
    class="btn btn-success" data-bs-toggle="modal" data-bs-target="#UserModel">
      Edit Profile
    </button>
    <div class="deleteCon mt-3">
    <button
    class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#DeleteUser">
      Delete Profile
    </button>
  </div>
<router-link> 
    <p>View Post History</p>
</router-link>
    <p>Delete your profile</p>
   
    </div>
</div>
<div v-else>

    <p>not found</p>

</div>
    </div>
    
</div>
     <div v-if="fetchUser">
        <div  v-for="user in User" :key="user.userID">
    <div class="MiddleCon">
    </div>
    <p class="Thought">Speak freely, {{user.firstName}}  </p>
    <textarea id="Msg" placeholder="Write your message..."></textarea>
    <div class="Buttons">
    <button class="Send" type="button">Post</button>
    </div>
    <div class="PostArea">
      <div class="PostedMsg">
        <p id="Posted"></p>
    
      <span id="Post"></span>
      </div>
      </div>
      
    </div>
</div>

          </div>
          <div class="modal fade" id="UserModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Editing your profile...</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row text-center" >
                        <div class="col">
                            <h4>Enter your Unique ID</h4>
                            <input type="text" id="productName" v-model="this.payload.userID">
                    <h4>Enter new first name</h4>
                    
                    <input  type="text"    id="userName"  v-model="payload.firstName">
                    <h4>Enter new last Name</h4>
                    <input type="text" id="userName"  v-model="payload.lastName">
                    <h4>Enter new mobile number</h4>
                    <input type="number" id="userName"  v-model="payload.mobileNumber">
                    <h4>Enter new email address</h4>
                    <input type="text" id="userName"  v-model="payload.emailAddress">
                    <h4>Enter new rank</h4>
                    <input type="text" id="userName"  v-model="payload.UnitorRank">
                    <h4>Enter new Combat Status</h4>
                    <input type="text" id="userName"  v-model="payload.combatStatus">
                    <h4>Enter new password</h4>
                    <input type="password" id="userName"  v-model="payload.userPwd">
                    <button type="submit" class="mb-4" @click.prevent="profileUpdate" id="ProductBtn2">Update Profile</button>            </div>

                             </div>

                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
            </div>
            <div class="modal fade" id="DeleteUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Deleting Your Profile....</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="row text-center">
            <div class="col">
        <h4>Enter Unique ID</h4>
        <input type="number" id="InputDel" v-model="payload.userID">

        <button type="submit" id="Deleter" @click.prevent="userDeletion">Delete</button>
    </div>

        </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
</template>

<script>
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
    methods: {
fetchUser() {
this.$store.dispatch("fetchOneUser", this.$route.params.id);

},
profileUpdate() {
        this.$store.dispatch('updateUser', {id: this.payload.userID, data: this.payload});
        alert("Your profile has been updated. The page will now refresh")
        location.reload()


      },
      userDeletion() {
  try {

     this.$store.dispatch("deleteUser", this.payload.userID);


  } catch (error) {

    console.error(error);


  }



 },
},


computed: {
User() {
return this.$store.state.user;

},

},
mounted() {
this.fetchUser();

}
}



</script>

<style>

</style>