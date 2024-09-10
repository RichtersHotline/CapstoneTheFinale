<template>
<div class="wrapper">
<NavbarComp v-if="!$route.meta.hideNavbarComp"/>
<main class="container-fluid bgColour">
<router-view/>

</main>
<FooterComp v-if="!$route.meta.hideNavbarComp"/>
</div>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue';
export default {
components: {

  NavbarComp,
  FooterComp

  }


}
</script>
<style src="./assets/Styles/Style.css">



</style>
