<script setup>
import { ref, onMounted } from 'vue';

const movies = ref([]);

const fetchMovies = () => {
    fetch('/api/v1/movies', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        movies.value = data.movies;
    })
    .catch(error => {
        console.log(error);
    });
};

onMounted(() => {
    fetchMovies();
});
</script>

<template>
  <div v-if="movies.length === 0">
  No movies found.
</div>

<div v-else class="row">
  <div class="col-md-4 mb-3" v-for="movie in movies" :key="movie.id">
    <div class="card h-100">
      
      <img 
        :src="movie.poster" 
        class="card-img-top" 
        alt="poster"
      >

      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.description }}</p>
      </div>

    </div>
  </div>
</div>
  <div class="container mt-4">
    <h2>Movies</h2>
  </div>
</template>