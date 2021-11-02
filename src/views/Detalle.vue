<template>
    <div class="container container-detalles ">
        <div class="row">
            <div class="col-sm-12">
                <div class="card card-detalle">
                    <img :src="disfraz.imagen" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{disfraz.name}}</h5>
                        <p class="card-text">{{disfraz.description}}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class="sub-title">Marca: </span>{{disfraz.brand}}</li>
                        <li class="list-group-item"><span class="sub-title">Año: </span>{{disfraz.year}}</li>
                        <li class="list-group-item">
                            <span class="sub-title">Estado: </span>
                            <span v-if="disfraz.reserva">
                                 Reservado
                            </span> 
                            <span v-else class="reservado">
                                <button @click="reservar(disfraz.id)" type="button" class="btn btn-outline-primary">                               
                                    Reservar
                                </button>  
                            </span>
                        </li>
                    </ul>
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item"><span class="sub-title">Mensajes: </span></li>
                        <li class="list-group-item" v-for="mensaje in disfraz.messages" :key="mensaje.id">{{mensaje.messageText}}</li>
                        
                    </ul>
                    <div class="card-body">
                       <button v-if="disfraz.reserva" type="button" class="btn btn-outline-success">Reservar</button>                        
                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

import { onBeforeMount, onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';


export default {
    name:'Detalle',           
    setup() {
        const route = useRoute();
        const store = useStore();
        const url = store.state.url;

        const disfraz = ref({"id": '',"name": '',"brand": '',"imagen": '',
                "reserva": '',"year": '',"description": '',"category": {
                    "id": '',"name": '',"description": ''},
                "messages": [],"reservations": []
            });

        const reservar = async (id) => {
            console.log(id)
            // try {
            //     const res = await fetch(`${url}`+`/api/Reservar/${id}`);

            // } catch (error) {
            //     console.log(error)
            // }
        }

        const cargarDetalles = async () => {
            const id = route.params.id;
            //console.log(id)
            try {
                const res = await fetch(`${store.state.url}/api/Costume/${id}`);
                const datos = await res.json();
                disfraz.value = datos;
                console.log(datos)
            } catch (error) {
                console.log(error)
            }
        }
        

        onBeforeMount(() => {
            cargarDetalles();    
        });
        
        
        
        return {
                disfraz, reservar, url
        }
        
    },
}
</script>

<style>

.container-detalles {
   background-image: linear-gradient(to bottom right, rgb(51, 159, 202), rgb(96, 46, 179));
}

.col-sm-12 {
    display: flex;
    justify-content: center;
}

.card-detalle {
    margin-top: 10vh;
    margin-bottom: 50vh;
    width: 50vw;
}

.reservado {
    color: red;
}

.sub-title {
    color: rgb(11, 184, 86);
}





</style>