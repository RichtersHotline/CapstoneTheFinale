<template>
  <div class="container-fluid">
    <div class="OverlayCon">
    <div class="leftCon">
      <div class="userBox">
        <div class="UserContent">
          <div class="ImgBack" v-if="User">

            <img :src="User.UserImg" loading="lazy">

        </div>
        <button data-bs-toggle="modal" data-bs-target="#UpdateProfilePicture">
          <i class="bi bi-camera-fill"></i>
        </button>
          <div  v-if="User">
            <div class="profile" >
              <div class="profileContent">
                <h2>{{ User.firstName }} {{ User.lastName }}</h2>
                <h5>Rank</h5>

                <p>{{ User.UnitorRank }}</p>
                <h5>Status</h5>
                <p>{{User.combatStatus}}</p>
                <h5>Unique ID:</h5>
                <p>{{ User.userID }}</p>
                <h5>Comrades:</h5>
                <p>{{ User.FriendCount }}</p>
                <h5>Profile Management</h5>
                <button class="BHBTN" data-bs-toggle="modal" data-bs-target="#UserModel">
                  Edit Profile
                </button>
                <div class="deleteCon mt-3">
                  <button class="BHBTN" data-bs-toggle="modal" data-bs-target="#DeleteUser">
                    Delete Profile
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div v-else>

            <p>not found</p>

          </div>
        </div>
      </div>
    </div>
    <div class="Mid" v-if="User">
      <div class="MiddleCon">
      <p class="Thought">Speak freely, {{ User.firstName }} </p>
      <textarea id="Msg" v-model="payloadPosts.Msg" placeholder="Write your message..."></textarea>
      <div class="Buttons">
        <button class="Send" type="submit" @click.prevent="PostMessage">Post</button>
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
    <div class="modal fade" id="UserModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Editing your profile...</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row text-center">
              <div class="col">
                <h4>Enter your Unique ID</h4>
                <input type="text" id="productName" v-model="this.payload.userID">
                <h4>Enter new first name</h4>

                <input type="text" id="userName" v-model="payload.firstName">
                <h4>Enter new last Name</h4>
                <input type="text" id="userName" v-model="payload.lastName">
                <h4>Enter new mobile number</h4>
                <input type="number" id="userName" v-model="payload.mobileNumber">
                <h4>Enter new email address</h4>
                <input type="text" id="userName" v-model="payload.emailAddress">
                <h4>Enter new rank</h4>
                <input type="text" id="userName" v-model="payload.UnitorRank">
                <h4>Enter new Combat Status</h4>
                <input type="text" id="userName" v-model="payload.combatStatus">
                <h4>Enter new password</h4>
                <input type="password" id="userName" v-model="payload.userPwd">
                <h4>Choose your new profile picture</h4>
                <input type="text" id="userName" v-model="payload.UserImg">
                <button type="submit" class="mb-4" @click.prevent="profileUpdate" id="ProductBtn2">Update
                  Profile</button>
              </div>

            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  <div class="modal fade" id="DeleteUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Deleting Your Profile....</h1>
          <h1 class="modal-title fs-5" id="Warning">WARNING THIS IS PERMANENT</h1>

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
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="UpdateProfilePicture" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Your New Profile Picture</h1>
          <h1 class="modal-title fs-5" id="Warning">(please paste a hosted link)</h1>

          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row text-center">
            <div class="col">
              <h4>Enter User ID</h4>
              <input type="number" id="InputDel" v-model="payload.userID">
            
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="fetchPosts">
    <div v-for="post in Post" :key="post.postID">
      <h5 class="UserMessage">{{ post.Msg }}</h5>




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
        mobileNumber: null,
        emailAddress: "",
        UnitorRank: "",
        combatStatus: "",
        userPwd: "",
        UserImg: "",
      },
      payloadPosts: {
        Msg: "",

      }



    }



  },
  methods: {
    fetchUser() {
      this.$store.dispatch("fetchOneUser", this.$route.params.id);
    },
    profileUpdate() {
      this.$store.dispatch('updateUser', { id: this.payload.userID, data: this.payload });
      alert("Your profile has been updated. The page will now refresh")
      location.reload()


    },
    profilePictureUpdate() {

      this.$store.dispatch('updateUser', {id: this.payload.userID, data: this.payload });

    },
    userDeletion() {
      try {
        
        this.$store.dispatch("deleteUser", this.payload.userID);


      } catch (error) {

        console.error(error);


      }



    },
    fetchPosts() {

      this.$store.dispatch("fetchPosts");
    },
    PostMessage() {
      try {
        this.$store.dispatch("PostMessage", this.payloadPosts);
        console.log(this.payloadPosts)
      } catch (e) {

        console.log("error")

      }

    }
  },


  computed: {
    User() {
      return this.$store.state.user;

    },
    Post() {

      return this.$store.state.posts;

    }

  },
  mounted() {
    this.fetchUser();
    console.log(this.user)
    this.fetchPosts();
    console.log(this.post)
  }
}



</script>

<style></style>