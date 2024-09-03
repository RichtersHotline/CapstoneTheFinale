<template>
  <div class="container-fluid">
    <div class="OverlayCon">
    <div class="leftCon">
      <div class="userBox">
        <div class="UserContent">
          <div class="ImgBack" v-if="User">

            <img :src="User.UserImg" loading="lazy">

        </div>
        <!-- <button data-bs-toggle="modal" data-bs-target="#UpdateProfilePicture">
          <i class="bi bi-camera-fill"></i>
        </button> -->
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
      <h5 class="Thought">Speak freely, {{ User.firstName }} </h5>
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
  <div class="modal fade" id="updatePost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Editing Post</h1>
          

          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row text-center">
            <div class="col">
              <h4>Enter Post ID</h4>
              <input type="number" id="InputDel" v-model="payload.postID">
              <h4>Enter New Message</h4>
              <input type="text" id="InputDel" v-model="payloadModal.Msg">
              <button type="button" id="Deleter" @click.prevent="postUpdate">Edit Post</button>
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
              <h4>Enter Hosted Link</h4>

              <input type="text" id="userName" v-model="payload.UserImg">
              <button type="submit" id="Deleter" @click.prevent="profilePictureUpdate">Profile Picture</button>

            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="postReply" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Your Reply...</h1>

          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row text-center">
            <div class="col">
              <h4>Enter Your Message</h4>
              <input type="text" id="InputDel" v-model="payloadReply.Reply">


              <button type="submit" id="Deleter" @click.prevent="postReply">Reply</button>
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
    <div class="MessageContainer" v-for="post in Post" :key="post.postID">
      <h5 class="NameBG">John Doe posted on {{post.DatePosted}}</h5>
      <div class="Messages">
      <h5 class="UserMessage">{{ post.Msg }}</h5>
      <h5>{{post.postID}}</h5>
      <div class="deletePortion">
        <button class="PostDelBtn" @click.prevent="postDeletion(post.postID)">
          Delete 
        </button>
        <button class="PostDelBtn" data-bs-target="#updatePost" data-bs-toggle="modal">
          Edit 
        </button>
        <button class="PostDelBtn" data-bs-toggle="modal" data-bs-target="#postReply">
          Reply 
        </button>
      </div>
    </div>



    </div>

  </div>
  <div v-if="Replies">
  <div class="ReplyContainer" v-for="reply in Replies" :key="reply.commentID">
    <h5 class="NameBG">John Doe replied on {{reply.DatePosted }}</h5>
    <div class="Messages">

  <h5 class="UserMessage">{{ reply.Reply}}</h5>
  <div class="deletePortion">
        <button class="PostDelBtn" @click.prevent="replyDeletion(reply.commentID)">
          Delete 
        </button>
        <button class="PostDelBtn" data-bs-target="#updatePost" data-bs-toggle="modal">
          Edit 
        </button>
        <button class="PostDelBtn" data-bs-toggle="modal" data-bs-target="#postReply">
          Reply 
        </button>
      </div>



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
        mobileNumber: null,
        emailAddress: "",
        UnitorRank: "",
        combatStatus: "",
        userPwd: "",
        UserImg: "",
      },
      payloadPosts: {
        Msg: "",

      },

      payloadModal: {

           Msg:""

        },
        payloadReply: {
          Reply:""



        },

      Confirmation:"Thank you for your service. You have been discharged."


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

      this.$store.dispatch('updateUser', {id: this.payload.userID, data: this.payload.UserImg});

    },
    userDeletion() {
      try {
        
        this.$store.dispatch("deleteUser", this.payload.userID);
        setTimeout(() => {

          window.location.href="/";
          


        }, "2000")

      } catch (error) {

        console.error(error);


      }



    },
    postDeletion(postID) {

      this.$store.dispatch("deleteMessage", postID);


    },
    postUpdate() {
    
      this.$store.dispatch("updateMessage", { id: this.payload.postID, data: this.payloadModal.Msg })
console.log(this.payloadPosts.Msg)
    },
    fetchPosts() {

      this.$store.dispatch("fetchPosts");
    },
    PostMessage() {
      try {
        this.$store.dispatch("PostMessage", this.payloadPosts); 
        document.getElementById("Msg").value = ""

        console.log(this.payloadPosts)
      } catch (e) {

        console.log("error")

      }

    },
    fetchReplies() {

      this.$store.dispatch("fetchReplies");


    },
    postReply() {

    this.$store.dispatch("PostReply", this.payloadReply);
    console.log(this.payloadReply)

    },
    replyDeletion(commentID) {

      this.$store.dispatch("deleteReply", commentID);

    }
  },


  computed: {
    User() {
      return this.$store.state.user;

    },
    Post() {

      return this.$store.state.posts;

    },
    Replies() {

      return this.$store.state.Replies

    }

  },
  mounted() {
    this.fetchUser();
    console.log(this.user)
    this.fetchPosts();
    console.log(this.post)
    this.fetchReplies();
    console.log(this.Replies)
  }
}



</script>

<style></style>