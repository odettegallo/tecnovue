<script setup>

</script>


<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="productos.html">TechGadget Store</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="home.html" class="nav-link">Inicio</a>
          </li>
          <li class="nav-item">
            <a href="productos.html" class="nav-link active">Productos</a>
          </li>
           <li class="nav-item">
            <a href="inventario.html" class="nav-link active">Inventario</a>
          </li>
          <li class="nav-item">
            <a href="contacto.html" class="nav-link">Contacto</a>
          </li>
        </ul>
        <button id="darkModeToggle" class="btn btn-sm btn-outline-secondary ms-2">
          🌙
        </button>
        <button id="logoutBtn" class="btn btn-sm btn-outline-danger ms-2" style="display: none;">
          <i class="bi bi-box-arrow-right"></i> Cerrar Sesión
        </button>
      </div>
    </div>
</nav>
</template>


