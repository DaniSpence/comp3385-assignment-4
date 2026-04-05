<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">COMP3385</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/movies">Movies</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/movies/create">Add Movie</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>

          <li class="nav-item" v-else>
            <a href="#" class="nav-link" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isLoggedIn = ref(false);

const checkAuth = () => {
  isLoggedIn.value = !!localStorage.getItem('token');
};

checkAuth();

watch(
  () => route.fullPath,
  () => {
    checkAuth();
  }
);

const logout = () => {
  fetch('/api/v1/logout', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })
  .then(() => {
    localStorage.removeItem('token');
    checkAuth();
    router.push('/login');
  })
  .catch(() => {
    localStorage.removeItem('token');
    checkAuth();
    router.push('/login');
  });
};
</script>