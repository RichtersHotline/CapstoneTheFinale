<template>
    <div class="container-fluid p-0">
    <h1 class="text-center">Viewing post</h1>
    <div v-if="Posts">
        <h5 class="UserMessage">{{Posts.Msg}}</h5>
<h5>abc</h5>


    </div>
    <div v-else>
        loadin
    </div>
    
</div>
  </template>
<script>
export default {
    methods: {
    fetchSinglePost() {

        this.$store.dispatch("fetchOnePost", this.$route.params.id)

    }
        
    },
  computed: {
    User() {
      return this.$store.state.user;

    },
     Posts() {

      return this.$store.state.post;

    },
    Replies() {

      return this.$store.state.Replies

    }

  },
  mounted() {
    console.log(this.user)
    this.fetchSinglePost();
    console.log(this.post)
  }
}
</script>

<style>

</style>