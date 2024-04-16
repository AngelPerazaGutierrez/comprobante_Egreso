<template>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Usuario">
      <input type="password" v-model="password" placeholder="Contraseña">
      <button type="submit">Iniciar sesión</button>
    </form>
  </template>
  
<script>
  export default {
    name: 'LoginForm',
    props: {
      msg: String
    }
  }
</script>

  <!-- export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        //preguntar como enviar los datos de inicio de sesión al servidor
        console.log('Nombre de usuario:', this.username);
        console.log('Contraseña:', this.password);
      }
    }
  }
  </script> -->
  