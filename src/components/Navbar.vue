<template>
    <nav class="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent'
  };
  </script>
  
  <style scoped>
  .navbar {
    
    background-color: #007bff;
    color: white;
    padding: 10px;
    margin-left: 15%;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin-right: 20px;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  