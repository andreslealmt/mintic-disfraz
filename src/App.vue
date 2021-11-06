<template>
  <NavBar></NavBar>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    
  </div>
  <router-view/>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { useStore } from 'vuex';

export default {
  components:{
    NavBar,
    Footer
  },
  setup() {

    const store = useStore();

    store.dispatch('leerUsuario');
    
  },
}
</script>
