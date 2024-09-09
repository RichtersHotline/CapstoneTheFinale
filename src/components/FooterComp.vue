<template>
    <footer class="container-fluid footerstyle">
  <div class="footerCon">
  <p class="text-left me-1">HOTBH &copy; <span>{{cYear}}</span> </p>  
  <router-link class="me-1 txt" to="/about">About</router-link>
  <router-link class="me-1 txt" to="/contact">Contact</router-link>
  <router-link class="me-1 txt" to="/signup">signup</router-link>
  <router-link class="me-1 txt" to="/profile">profile</router-link>  </div>
  
    </footer>
  
  </template>
  
  <script>
  export default {
  data() {
  
      return {
    cYear: new Date().getUTCFullYear()
  
  
      }
  
  
  
  },
  
  
  }
  </script>
  
  <style>
  
  </style>