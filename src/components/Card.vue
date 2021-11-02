<template>
<div class="col-sm-4">   
    <div class="card mt-5 my-5 tarjeta">
        <img :src="card.imagen" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{card.name}}</h5>
            <p class="card-text"><span class="detalle">Marca: </span> {{card.brand}}</p>
            <p class="card-text"><span class="detalle">Año: </span> {{card.year}}</p>
            <p class="card-text"><span class="detalle">Descripción: </span> {{card.description}}</p>
            
            
            
            <span class="detalle">Estado: </span>  
                            <span class="rojo" v-if="card.reserva">
                                 Reservado
                            </span> 
                            <span v-else class="reservado">
                               Disponible 
                            </span>
                <br>
                <router-link :to="'/detalle/'+card.id" class="card-link">Ver</router-link>
        </div>                
    </div>
    </div> 
</template>

<script>
export default {
    props:['card'],
    name:'Card',
    setup() {
        
    },
}
</script>
<style>
.tarjeta{
    width: 50vh;
    height: 40vw;         
}

.tarjeta:hover {
    /* cursor: pointer; */
    box-shadow: 5px 8px 8px 4px #b6ddda;
}

img{
    height: 15vw;
    padding: 15px;
}

.detalle {
    color: cadetblue;
}

.col-sm-4 {
    margin-left: 3vw;
}

.rojo {
    color: red;
}


</style>