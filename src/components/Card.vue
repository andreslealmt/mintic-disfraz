<template>
    <div class="card mt-5 my-5 tarjeta">
        <img src="https://s1.eestatic.com/2017/02/24/social/carnavales-la_jungla_-_social_196241196_29782962_1024x576.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Card',
    setup() {
        
    },
}
</script>
<style>
.tarjeta{
    width: 50vh;
    height: 30vw;    
}

.tarjeta:hover {
    /* cursor: pointer; */
    box-shadow: 5px 10px 8px 10px #888888;
}

img{
    height: 15vw;
}

</style>