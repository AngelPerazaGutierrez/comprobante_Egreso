<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="container registro">
          <form @submit.prevent="enviarFormulario">
            <h3>Inicio de Sesión</h3>
            <div class="form-group">
              <label for="email">Email:</label>
              <input v-model="formulario.email" type="email" id="email" name="email" required placeholder="Correo electrónico">
            </div>
            <div class="form-group">
              <label for="password">Contraseña:</label>
              <input v-model="formulario.password" type="password" id="password" name="password" required placeholder="Contraseña">
            </div>
            <div class="form-group">
              <button type="submit">Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

  

<script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  props: {
      msg: String
    },
  data() {
    return {
      formulario: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async enviarFormulario() {
      try {
        const respuesta = await axios.post('http://localhost:3000/login', this.formulario);
        console.log('Respuesta del servidor:', respuesta.data);       
      } catch (error) {
        console.error('Error al enviar el formulario:', error);        
      }
    }
  }
};
</script>

<style>

.container.registro {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.form-group button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
}
.form-group button:hover {
  background-color: #0056b3;
}
</style>

