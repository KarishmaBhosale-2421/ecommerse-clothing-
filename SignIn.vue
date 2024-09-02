<template>
    <div class="container mt-4">
      <h2>Sign In</h2>
      <form @submit.prevent="handleSubmit">
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
        <button type="submit" class="btn btn-primary">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignIn',
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.form)
          });
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); // Store token in local storage
            alert('Sign-in successful!');
            this.$router.push('/');
          } else {
            alert('Sign-in failed.');
          }
        } catch (error) {
          console.error('Error during sign-in:', error);
          alert('An error occurred.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  