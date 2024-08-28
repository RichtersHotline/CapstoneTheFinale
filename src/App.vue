<template>
<div class="wrapper">
<NavbarComp v-if="!$route.meta.hideNavbarComp"/>
<main class="container-fluid bgColour">
<router-view/>

</main>

</div>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'

export default {
components: {

  NavbarComp

  }


}
</script>
<style src="./assets/Styles/Style.css">



</style>
