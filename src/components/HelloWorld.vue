<template>
  <nav class="navbar bg-body-secondary fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>
        <span class="material-symbols-outlined">
          support_agent
        </span>
        <a class="navbar-brand" href="#">Soporte</a>
      </div>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu principal</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-start flex-grow-1 ps-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mi perfil</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Acciones
              </a>
              <ul class="dropdown-menu">
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item crear_egreso_button" href="#">Crear Comprobante de egreso</a></li>
                <li><a class="dropdown-item" href="#">Comprobantes realizados en el dia</a></li>
                <li><a class="dropdown-item" href="#">comprobantes por revisar</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.offcanvas-start {
  right: auto;
  /* Cambiamos la propiedad right a auto */
  left: -100%;
  /* Posicionamos el offcanvas hacia la izquierda */
  transform: translateX(0);
  /* Aplicamos una transformación para deslizar el offcanvas desde la izquierda */
  transition: transform 0.3s ease;
  /* Añadimos una transición para suavizar el movimiento */
}

.crear-egreso {
  width: 100%;
}

.crear_egreso_button {
  background: rgb(133, 248, 210);
  font-weight: bolder;
}

.crear_egreso_button:hover {
  background: rgb(26, 228, 161);
  font-weight: bolder;
}
</style>
