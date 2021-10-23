<template>  
  <div class="body">
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4">        
          <Card></Card>  
        </div>
        <div class="col-sm-4">
          <Card></Card>  
        </div>
        <div class="col-sm-4">
          <Card></Card>  
        </div>
        <div class="col-sm-4">
          <Card></Card>            
        </div>
      </div>
    </div>    
  </div>

  <!-- Footer -->

</template>

<script>

import Card from './../components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>

<style>
  .body{
    height: 100%;
    background-image: url('./../assets/flores.svg');    
    background-size: 60vw 60vh;       
    /* background-color: rgb(193, 221, 211);  */
  }

</style>
