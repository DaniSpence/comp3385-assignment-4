<template>
  <div class="container mt-4">
    <h2 class="mb-4">Login</h2>

    <!-- Success -->
    <div v-if="successMessage" class="alert alert-success">
      {{ successMessage }}
    </div>

    <!-- Errors -->
    <div v-if="errorMessage" class="alert alert-danger">
      {{ errorMessage }}
    </div>

    <form @submit.prevent="login">
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" v-model="email">
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password">
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const successMessage = ref('');
const errorMessage = ref('');

const router = useRouter();

const login = () => {
  fetch('/api/v1/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.access_token) {
    
      localStorage.setItem('token', data.access_token);
      successMessage.value = data.message;
      errorMessage.value = '';
      router.push('/movies');

    } else {
      errorMessage.value = data.error || 'Login failed';
      successMessage.value = '';
    }
  })
  .catch(err => console.log(err));
};
</script>