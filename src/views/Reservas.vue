<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12">
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Status</th>
                        <th scope="col">Fecha Inicio</th>
                        <th scope="col">Fecha Final</th>
                        <th scope="col">Disfraz</th>
                        <th scope="col">Cancelar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="reserva in reservacion" :key="reserva">
                        <td>{{reserva.status}}</td>
                        <td>{{reserva.startDate.substr(0,15)}}</td>
                        <td>{{reserva.devolutionDate.substr(0,15)}}</td>
                        <td>{{reserva.costume.name}}</td>
                        <td><button class="btn btn-danger" @click="cancelar(reserva.idReservation)">Cancelar</button> </td>
                        </tr>    
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
import { useStore } from 'vuex'

export default {
    name:'Reservas',    
    setup() {


        const store = useStore();
        const reservacion = ref([]);

        const usuario = store.state.usuario;
        const url = store.state.url;

        const cargarReservas= async () => {

            try {
                //console.log(usuario.usuario.idClient)
                const res = await fetch(`${url}`+'/api/Client/'+usuario.usuario.idClient);
                const datos = await res.json();
                //console.log(datos.reservations[0].costume.name)
                reservacion.value = datos.reservations;
                
            } catch (error) {
                console.log(error)
            }
        }

        const cancelar = async (id) => {
            console.log(id)
            try {
                const res = await fetch(`${url}`+'/api/Reservation/'+id,{
                    method:'DELETE'
                });
                const datos = await res.text(); 
                console.log(datos)
                cargarReservas();   
            } catch (error) {
                console.log(error)
            }
            
        }

        onMounted(() => {
            cargarReservas();
        });


        return {
            cargarReservas,reservacion, cancelar
        }

        
    },
}
</script>