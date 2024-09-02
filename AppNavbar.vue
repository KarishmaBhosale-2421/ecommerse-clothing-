<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="Logo" style="width: 100px;">
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="SignIn.vue">Sign In</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="SignUp.vue">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar'
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  