<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img class="logo" src="https://admin.google.com/u/1/ac/images/logo.gif?uid=104443892163288069027&service=google_gsuite" alt="">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">                
                <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
                </li>               
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                    <li @click="cambioCategoria('todo')"><a class="dropdown-item" href="#">Todo</a></li>                    
                    <li v-for="item in categorias" :key="item.id" @click="cambioCategoria(item.name)"><a class="dropdown-item" href="#">{{item.name}}</a></li>                    
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">asdf</a></li>
                </ul>
                </li>
                 <li class="nav-item left" >
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                </li>
                
               
            
            
            </ul>                 
                    <!-- Dropdown  Usuario  -->                    

                    <!-- <div class="dropdown dropstart">
                        <div class="link-usuario dropdown-toggle dropdown" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="nombre-usuario">usuario</span>    
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="rgb(129, 45, 45)" class="bi bi-person-circle icon-user" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" fill="rgb(129, 45, 45)" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>                                                  
                        </div>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                            <li>  
                                <router-link class="dropdown-item" to="/reservas">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                    </svg>
                                    Mis reservas
                                </router-link>
                            </li>
                            <li>  
                                <router-link class="dropdown-item" to="/perfil">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                    Mi perfil
                                </router-link>
                            </li>
                            
                            <hr class="dropdown-divider">

                            <li>
                                <a class="dropdown-item cerrar-sesion" >
                                    Cerrar Sesión
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-closed" viewBox="0 0 16 16">
                                        <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/>
                                        <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div> -->

                    <!-- Dropdown  Administrador  -->                    

                    <div class="dropdown dropstart">
                        <div class="link-usuario dropdown-toggle dropdown" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="nombre-usuario">Admin</span>    
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="rgb(129, 45, 45)" class="bi bi-person-circle icon-user" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" fill="rgb(129, 45, 45)" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>                                                  
                        </div>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                            <li>  
                                <router-link class="dropdown-item" to="/disfraces">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
                                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                    Disfraces
                                </router-link>
                            </li>
                            <li>  
                                <router-link class="dropdown-item" to="/categorias">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                                        <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z"/>
                                    </svg>
                                    Categorias
                                </router-link>
                            </li>                           
                            
                            <hr class="dropdown-divider">

                            <li>
                                <a class="dropdown-item cerrar-sesion" >
                                    Cerrar Sesión
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-closed" viewBox="0 0 16 16">
                                        <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/>
                                        <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div>
                          
            </div>
        </div>
    </nav>
</template>

<script>

import { useStore } from 'vuex';
import { onBeforeMount, onMounted } from '@vue/runtime-core';
import { ref } from '@vue/reactivity';

export default {
    name:'NavBar',
    setup() {
        
        const store = useStore();

        let categorias = ref();

        const cambioCategoria = (categoria) => {
            //console.log(categoria)
            store.commit('setCategoria', categoria);
        }
        

        const cargarCategorias = async () => {
            const url = store.state.url;            

            try{
                const res = await fetch(`${url}`+'/api/Category/all');
                categorias.value = await res.json();       

            }catch(error){
                console.log(error)
            }
        }

       

        onMounted(() => {
           cargarCategorias();           
        });

        return {
            categorias, cambioCategoria
        }
        
    },
}
</script>

<style>

.logo {
    width: 5vw;
    height: 5vh;
}
.nav-link {
   font-size: 20px;
   margin-left: 5vw;
}
.icon-user{    
    width: 7vw;
    height: 7vh;    
    padding-top: 3px;
    padding-bottom: 3px;
}

.left{
    margin-left: 10vw;
}

.link-usuario {
    border:1px solid red;
    
}

.link-usuario:hover {    
    cursor: pointer;
    border-radius: 10px;    
}

.link-usuario:active {
    box-shadow: 3px 3px 8px 5px #5c5c5d;
}


.nombre-usuario {
    color: whitesmoke;
    padding-left: 5px;
    padding-top: 5px;
}


.nombre-usuario:active {
    color: white;    
}

.dropdown-menu {
    margin-left: 100vw;
}

.cerrar-sesion:hover {
    cursor: pointer;
    color: blue;
}



</style>