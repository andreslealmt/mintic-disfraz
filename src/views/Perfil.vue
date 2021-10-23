<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12">
                <div class="imagen">
                    <img class="imagen-perfil" src="https://i.pinimg.com/236x/62/b0/ec/62b0ec7da4e393b681db9a38dd27f80f.jpg" alt="">
                </div>
                <hr class="dropdown-divider">
                <div class="imagen">
                        <div class="card tarjeta-perfil" >                            
                            <div class="card-body">
                                <h5 class="card-title">Información Cuenta</h5>
                                <p class="card-text">Nombre</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Correo</li>
                                <li class="list-group-item">Edad</li>
                                <li class="list-group-item">Contraseña</li>
                            </ul>
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Actualizar</button>                               

                            </div>
                        </div>

                </div>
                
            </div>
        </div>
    </div>

    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Actualizar Perfil</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group flex-nowrap mt-3">                        
            <span class="input-group-text" id="addon-wrapping">Nombre</span>
            <input value="" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
        </div>
        <div class="input-group mb-3 mt-3">
            <span class="input-group-text" id="addon-wrapping">Correo</span>
            <input value="" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div>

        <div class="input-group flex-nowrap mt-3">                        
            <span class="input-group-text" id="addon-wrapping">Edad</span>
            <input  value="" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
        </div>

        <div class="input-group flex-nowrap mt-3">                        
            <span class="input-group-text" id="addon-wrapping">Contraseña</span>
            <input value="" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
        </div>
        

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name:'Perfil',
    setup() {
        
    },
}
</script>

<style>
.imagen{
    display: flex;
    justify-content: center;    
}

.imagen-perfil {
    border-radius: 50%;
}

.tarjeta-perfil {
    width: 60vw;
}







</style>