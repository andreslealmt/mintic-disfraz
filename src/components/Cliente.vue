<template>
    <!-- Dropdown  Usuario  -->                  

                    <div class="dropdown dropstart">
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

                            <li  @click="cerrarSesionCliente()">
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
</template>
<script>
import { useStore } from 'vuex'
export default {
    name:'Cliente',
    setup() {
        const store = useStore();

        const cerrarSesionCliente = () => store.dispatch('cerrarSesion');

        return {
            cerrarSesionCliente
        }
        
    },
}
</script>