<template>
<div class="wrapper">
<NavbarComp/>
<main class="container-fluid">
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
