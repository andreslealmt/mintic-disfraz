<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="agregar mt-5">
                    <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalagregardisfraz">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                        </svg>
                        Agregar Disfraz
                    </button>
                </div>
                
                


                <table class="table table-striped mt-5">
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Año</th>
                        <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="disfraz in disfraces" :key="disfraz.id">
                        <th scope="row">{{disfraz.name}}</th>
                        <td>{{disfraz.brand}}</td>
                        <td>{{disfraz.description}}</td>
                        <td>{{disfraz.year}}</td>
                        <td>{{disfraz.reserva}}</td>
                        <td> 
                            <button type="button" class="btn btn-outline-warning">                               
                                Cancelar
                            </button>
                        </td>
                        <td>                            
                            <button type="button" class="btn btn-outline-primary">                               
                                Completar
                            </button>                        
                        </td>
                        <td>
                            <button @click="eliminarDisfraz(disfraz.id)" type="button" class="btn btn-outline-danger">                               
                                eliminar
                            </button> 
                        </td>
                        <td>
                            <button @click="CargarModalDisfraz(disfraz.id)" type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#modalactualizardisfraz">                               
                                Editar
                            </button> 
                        </td>
                        </tr>                      
                    </tbody>
                    </table>
            </div>
        </div>

         

        <!-- moddal agregar disfraz -->
       <div class="modal fade" id="modalagregardisfraz" tabindex="-1" aria-labelledby="modalagregardisfraz" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> Agregar Disfraz</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">


                <div class="input-group flex-nowrap">                    
                    <input v-model="disfraz.name"  type="text" class="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <br>
                <div class="input-group flex-nowrap">                    
                    <input v-model="disfraz.brand" type="text" class="form-control" placeholder="Marca" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <br>
                <div class="input-group flex-nowrap">                    
                    <input v-model="disfraz.year" type="text" class="form-control" placeholder="Año" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <br>
                <div class="input-group flex-nowrap">                    
                    <input v-model="disfraz.imagen" type="text" class="form-control" placeholder="Imagen" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <br>
                <div class="input-group flex-nowrap">                    
                    <input v-model="disfraz.description" type="text" class="form-control" placeholder="Descripcion" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <br>
                <label for="">Categoria</label>
                <select v-model="id" class="form-select" aria-label="Default select example">
                    <option value=""></option>
                    <option :value="categoria.id" v-for="categoria in categorias" :key="categoria.id">
                        {{categoria.name}}    
                    </option>               
                </select>
                <div class="error-categoria">
                    <i>{{mensaje}}</i>
                </div>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" @click="guardarDisfraz()">Guardar</button>
            </div>
            </div>
        </div>
        </div>


         <!-- moddal Actualizar disfraz -->
       <div class="modal fade" id="modalactualizardisfraz" tabindex="-1" aria-labelledby="modalactualizardisfraz" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> Actualizar Disfraz</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">


                <div class="input-group flex-nowrap">                    
                    <input v-model="disfrazUpdate.name"  type="text" class="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <br>
                <div class="input-group flex-nowrap">                    
                    <input v-model="disfrazUpdate.brand" type="text" class="form-control" placeholder="Marca" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <br>
                <div class="input-group flex-nowrap">                    
                    <input v-model="disfrazUpdate.year" type="text" class="form-control" placeholder="Año" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <br>
                <div class="input-group flex-nowrap">                    
                    <input v-model="disfrazUpdate.description" type="text" class="form-control" placeholder="Descripcion" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <br>
                <label for="">Categoria</label>
                <select v-model="idUpdate" class="form-select" aria-label="Default select example">
                    <option value=""></option>
                    <option :value="categoria.id" v-for="categoria in categorias" :key="categoria.id">
                        {{categoria.name}}    
                    </option>               
                </select>
                <div class="error-categoria">
                    <i>{{mensaje}}</i>
                </div>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" @click="actualizarDisfraz()">Actualizar</button>
            </div>
            </div>
        </div>
        </div>

    </div>
</template>
<script>
import { computed, ref } from '@vue/reactivity';

import { useStore } from 'vuex';
import { onMounted } from '@vue/runtime-core';

export default {
    name:'Disfraces',
    setup() {

        const store = useStore();
        const id = ref();
        const idUpdate = ref();
        const disfraces = computed(() => store.state.cards);
        const categorias = ref();
        const disfraz = ref({});
        const disfrazUpdate = ref({});
        const mensaje = ref();

        const url = store.state.url;

        const CargarModalDisfraz = async (id) => {

            try {
                const res = await fetch(`${url}`+`/api/Costume/${id}`);
                const datos = await res.json();
                disfrazUpdate.value = datos;
                idUpdate.value = datos.category.id;
                console.log(idUpdate.value)

            } catch (error) {
                console.log(error)
            }
        }

        const guardarDisfraz = async () => {
            console.log(id.value)
            if(!id.value){
                console.log('debe elegir categoria')
                mensaje.value = 'Debe elegir una categoria'
                return
            }
            disfraz.value.category = {id:id}
            try {
                const res = await fetch(`${url}`+'/api/Costume/save',{
                    method:'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                     // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(disfraz.value)
                });
                const datos = await res.json();
                disfraz.value = {};
                console.log(datos)
                store.dispatch('cargarCards');
            } catch (error) {
                console.log(error)
            }
        }

        const actualizarDisfraz = async () => {
           
            disfrazUpdate.value.category = {id:idUpdate}
            try {
                const res = await fetch(`${url}`+'/api/Costume/update',{
                    method:'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                     // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(disfrazUpdate.value)
                });
                const datos = await res.json();
                console.log(datos)
                store.dispatch('cargarCards');
            } catch (error) {
                console.log(error)
            }
        }
        
        

        const cargarCategorias = async () => {
             
            try {
                const res = await fetch(`${url}`+'/api/Category/all');                
                categorias.value = await res.json();                
            } catch (error) {
                console.log(error)
            }
        }

        const eliminarDisfraz = async (id) => {
            try {
                const res = await fetch(`${url}`+'/api/Costume/'+id,{
                    method:'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                     // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                const datos = await res.text();
                store.dispatch('cargarCards');

            } catch (error) {
                console.log(error)
            }
        }

        onMounted(() => {
            store.dispatch('cargarCards');
            cargarCategorias();
        });
        return {
            disfraces, disfraz, guardarDisfraz, categorias, eliminarDisfraz,
            id, mensaje, disfrazUpdate, idUpdate, actualizarDisfraz, CargarModalDisfraz
        }
        
    },
}
</script>

<style>

.bi-plus-circle {
    color: seagreen;
    height: 9vh;
    width: 9vw;
}

.bi-plus-circle:hover {
    color: white;
}

.agregar {
    display: flex;
    justify-content: center;
}

.error-categoria {
    color: red;
}

</style>