<template>
  <div class="container-fluid">
    <h1 class="text-center">Welcome, Founder</h1>
  
    <table class="table-dark UserTable">
        <thead>
          <tr>
            <th>User ID</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Mobile Number</th>
       <th>Email Address</th>
       <th>Unit Or Rank</th>
       <th>Combat Status</th>
       <th>User's Password</th>
       <th>User's Profile Image</th>
          </tr>
        </thead>
        <tbody v-if="Users">
            <tr v-for="user in Users" :key="user.userID">
                <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.mobileNumber }}</td>
            <td>{{ user.emailAddress }}</td>
            <td>{{ user.UnitorRank }}</td>
            <td>{{ user.combatStatus }}</td>
            <td>{{ user.userPwd }}</td>
            <td>{{ user.UserImg }}</td>
            <td><button
          class="btn btn-success" data-bs-toggle="modal" data-bs-target="#UserModel">
            Edit User
          </button>
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="userDeletion(user.userID)"
          >
            Delete
          </button>
        </td>
          </tr>
    </tbody>
</table>
<table class="table-dark">
    <thead>
      <tr>
        <th>Post ID</th>
   <th>User's Message</th>
   <th>Date Posted</th>
   <th>User ID</th>
   <th>Salutes</th>
   <th>Replies</th>
   <th>Posted Image</th>
      </tr>
    </thead>
    <tbody v-if="Post">
        <tr v-for="post in Post" :key="post.postID">
        <td>{{ post.postID }}</td>
        <td>{{ post.Msg }}</td>
        <td>{{ post.DatePosted }}</td>
        <td>{{ post.userID }}</td>
        <td>{{ post.Salutes }}</td>
        <td>{{ post.Replies }}</td>
        <td>{{ post.PostImg }}</td>
        <button
      class="btn btn-success" data-bs-toggle="modal" data-bs-target="#updatePost">
        Edit Post
      </button>
      <button
        class="btn btn-danger btn-sm"
        @click="postDeletion(post.postID)"
      >
        Delete
      </button>
      </tr>
</tbody>
</table>
<table class="table-dark">
    <thead>
      <tr>
        <th>Comment ID</th>
   <th>Reply Message</th>
   <th>Date Posted</th>
   <th>User ID</th>
   <th>Post ID</th>
   <th>Reply Image</th>
      </tr>
    </thead>
    <tbody v-if="Replies">
        <tr v-for="reply in Replies" :key="reply.commentID">
            <td>{{reply.commentID}}</td>
        <td>{{ reply.Reply }}</td>
        <td>{{ reply.DatePosted }}</td>
        <td>{{ reply.userID }}</td>
        <td>{{ reply.postID }}</td>
        <td>{{ reply.ReplyImg }}</td>
        <button
      class="btn btn-success" data-bs-toggle="modal" data-bs-target="#updateReply">
        Edit Reply
      </button>
      <button
        class="btn btn-danger btn-sm"
        @click="replyDeletion(reply.commentID)"
      >
        Delete
      </button>
      </tr>
</tbody>
</table>
<!-- Modal -->
<div class="modal fade" id="UserModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Editing user's profile...</h1>
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
  <div class="modal fade" id="updateReply" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Your Reply...</h1>

          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row text-center">
            <div class="col">
              <h4>Enter Reply ID</h4>
              <input type="text" id="InputDel" v-model="this.payload.commentID">
              <h4>Enter Your new Reply</h4>
              <input type="text" id="InputDel" v-model="payloadReply.Reply">


              <button type="button" id="Deleter" @click.prevent="replyUpdation">Reply</button>
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
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
        PostImg:""
      },

      payloadModal: {

           Msg:""

        },
        payloadReply: {
          Reply:"",
          ReplyImg:""


        },

      Confirmation:"Thank you for your service. You have been discharged."


    }



  },
  components: {
// LoadingSpinner

  },
  methods: {
    // fetchUser() {
    //   this.$store.dispatch("fetchOneUser", this.$route.params.id);
    // },
    profileUpdate() {
      this.$store.dispatch('updateUser', { id: this.payload.userID, data: this.payload });
      toast.success(`${"The User's Profile has been updated. Refreshing...."}`, {
          autoClose: 5000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })      
        location.reload()


    },
    profilePictureUpdate() {

      this.$store.dispatch('updateUser', {id: this.payload.userID, data: this.payload.UserImg});

    },
    userDeletion(userID) {
      try {
        
        this.$store.dispatch("deleteUser", userID);

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
    imageAddition() {

      try {
   this.$store.dispatch("PostMessage", this.payloadPosts)
   console.log(this.payloadPosts)


    } catch(e) {

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

    },
    replyUpdation() {
      this.$store.dispatch('updateReply', { id: this.payload.commentID, data: this.payloadReply.Reply });
      
      console.log( "Id" + this.payload.commentID, "Data" + this.payloadReply.Reply)    

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

    },
    Users() {

return this.$store.state.users
},

  },
  mounted() {
    // this.fetchUser();
    console.log(this.user)
    this.fetchPosts();
    console.log(this.post)
    this.fetchReplies();
    console.log(this.Replies)
    this.$store.dispatch("fetchUsers")

  }
}



</script>

<style></style>