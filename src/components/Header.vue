<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">TechGadget Store</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/productos" class="nav-link">Productos</router-link>
          </li>
           <li class="nav-item">
            <router-link to="/inventario" class="nav-link">Inventario</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link">Contacto</router-link>
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

<script setup>
import { RouterLink } from 'vue-router'
</script>