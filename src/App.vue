<template>
  <nav>  
     <router-link to="/"></router-link> 
     <router-link to="/about"></router-link>
     <router-link to="/crear_egreso"></router-link>
     <router-link to="/login"></router-link>
     
  </nav>
  <router-view/>
    
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 4rem;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  position: absolute;
  top: 10%;
  align-content: center;
  
  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
