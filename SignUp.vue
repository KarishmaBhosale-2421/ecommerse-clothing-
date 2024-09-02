<template>
    <div class="container mt-4">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="form.username"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="form.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="form.password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignUp',
    data() {
      return {
        form: {
          username: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.form)
          });
          if (response.ok) {
            alert('Sign-up successful!');
            this.$router.push('/signin');
          } else {
            alert('Sign-up failed.');
          }
        } catch (error) {
          console.error('Error during sign-up:', error);
          alert('An error occurred.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  