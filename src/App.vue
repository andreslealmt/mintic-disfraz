<template>
  <NavBar></NavBar>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    
  </div>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import NavBar from './components/NavBar.vue';
export default {
  components:{
    NavBar
  },
  setup() {
    
  },
}
</script>
