<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid d-flex justify-content-start align-items-center">
        <a class="navbar-brand Logo" href="#">Home Of The Broken Heroes</a>
        

        <input type="text" placeholder="Search for comrades..." class="form-control SearchBar" id="Searcher">
        <div class="spreader d-flex justify-content-around mt-2">
          <router-link to="/home">
        <i class="bi bi-house-door-fill IconColour h4 ml-3"></i>
      </router-link>
        <i class="bi bi-envelope-fill IconColour h4 ml-3"></i>
        <i class="bi bi-bell-fill  IconColour h4"></i>
        <button class="BGRemover" type="submit" @click.prevent="profileViewer">
        <i class="bi bi-person-fill IconColour h4"></i>
        </button>
        <router-link class="Logout" to="/">Logout</router-link>

    </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    
  </template>
<script>
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
import axios from "axios";
// import LoadingSpinner from '@/components/LoadingSpinner.vue';
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
        PostImg:"",
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
    async fetchUserData() {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId'); 

  console.log('Token:', token);
  console.log('User ID:', userId);

  if (!token) {
    toast.error("Token not found. Please log in again.", {
      autoClose: 5000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark'
    });
    return null;
  }

  if (!userId) {
    toast.error("User ID not found. Please log in again.", {
      autoClose: 5000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark'
    });
    return null;
  }

  try {
    const response = await axios.get(`https://home-of-the-broken-heroes.onrender.com/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Fetched user data:', response.data);
    return response.data;
  } catch (err) {
    console.error('Error fetching user data:', err);
    toast.error("Failed to fetch user data. Please try again later.", {
      autoClose: 5000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark'
    });
    return null;
  }
},

async profileViewer() {
  const userId = localStorage.getItem('userId'); 
  if (userId) {
    console.log('Navigating to profile...');
    this.$router.push(`/profile/${userId}`).then(() => {
      console.log('Navigation successful');
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  } else {
    toast.error("User data not found. Please log in again.", {
      autoClose: 5000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark'
    });
  }
},

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
    
    this.$store.dispatch("updateMessage", { id: this.payloadModal.postID, data: this.payloadModal })
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
      this.$store.dispatch('updateReply', { id: this.payloadReply.commentID, data: this.payloadReply});
      
      console.log( "Id" + this.payload.commentID, "Data" + this.payloadReply.Reply)    

    },
    fetchUsers() {
    this.$store.dispatch("fetchUsers")

  },

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
limited() {

  return Array.isArray(this.Post) ? this.Post.slice(0, 10) : [];

}

  },
  mounted() {
    // this.fetchUser();
    console.log(this.user)
    this.fetchPosts();
    console.log(this.post)
    this.fetchReplies();
    console.log(this.Replies)
    this.fetchUsers();
    console.log(this.users)
  }
}



</script>

<style></style>
