<template>  
  <div class="body">
    <div class="container">
      <div class="row">
        
             
          <Card v-for="item in cards" :key="item.id" :card="item"></Card>  
              
      </div>
    </div>    
  </div>

  <!-- Footer -->

</template>

<script>

import Card from './../components/Card.vue';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from '@vue/runtime-core';

export default {
  name: 'Home',
  components: {
    Card
  },
  setup(){

    const store = useStore();

    const cards = computed(() => store.state.cards);

    

    onMounted(() =>{
      store.dispatch('cargarCards')
    });


 

    return{cards}
  }
}
</script>

<style>
  .body{
    height: 100%;
    background-image: url('./../assets/flores.svg');    
    background-size: 100% 100%;       
    background-image: linear-gradient(to bottom right, rgb(51, 159, 202), rgb(96, 46, 179));
  }

  

</style>
