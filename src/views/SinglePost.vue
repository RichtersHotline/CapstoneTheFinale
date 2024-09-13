<template>
  <h1>Viewing Post...</h1> 
  <div v-if="posts.length">
    <div v-for="post in posts" :key="post.postID">
      <h5 class="UserMessage">{{ post.Msg }}</h5>
      <img :src="post.PostImg" class="PostImg" loading="lazy">

    </div>
  </div>
  <div v-else>
    <p>No posts found.</p>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.post;
    }
  },
  created() {
    this.$store.dispatch('fetchOnePost', this.$route.params.id);
  }
}
</script>
