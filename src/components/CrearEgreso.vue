<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="container registro">
          <form id="comprobante_egreso" @submit.prevent="enviarFormulario">
            <h3>Comprobante de egreso Virtual</h3>
            <div class="form-group">              
              <input v-model="formulario.fecha" type="date" id="fecha" name="fecha" required>
            </div>
            <div class="form-group">
              <label for="ciudad"></label>
              <select v-model="formulario.ciudad" id="ciudad" name="ciudad" required>
                <option value="Bogota" selected>Bogotá</option>
                <option value="Medellin">Medellín</option>
                <option value="Cali">Cali</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Otras ciudades">Otra ciudad</option>
              </select>
            </div>
            <div class="form-group">
              <label for="nit">NIT/CC</label>
              <input v-model="formulario.nit" type="number" id="nit" name="nit" required maxlength="12" max="999999999999" placeholder="Numero de identificacion tributaria">
            </div>
            <div class="form-group">
              <label for="tercero">Tercero</label>
              <input v-model="formulario.tercero" type="text" id="tercero" name="tercero" required placeholder="A favor de">
            </div>
            <div class="form-group">
              <label for="concepto">Por concepto</label>
              <input v-model="formulario.concepto" type="text" id="concepto" name="concepto" required placeholder="Descripción del concepto">
            </div>
            <div class="form-group">
              <label for="banco">Banco</label>
              <select v-model="formulario.banco" id="banco" name="banco" required>
                <option value="Banco_bogota" selected>Banco de Bogota</option>
                <option value="Davivienda">Davivienda</option>
                <option value="Bancolombia">Bancolombia</option>
                <option value="BBVA">BBVA</option>
                <option value="Banco_popular">Banco Popular</option>
                <option value="Nequi">Nequi</option>
                <option value="Daviplata">Daviplata</option>
                <option value="Otro_banco">Otro banco</option>
              </select>
            </div>
            <div class="form-group">
              <label for="tipo_cuenta">Tipo de cuenta</label>
              <select v-model="formulario.tipo_cuenta" id="tipo_cuenta" name="tipo_cuenta" required>
                <option value="ahorros" selected>Ahorros</option>
                <option value="corriente">Corriente</option>
              </select>
            </div>
            <div class="form-group">
              <label for="numero_cuenta">Numero de cuenta</label>
              <input v-model="formulario.numero_cuenta" type="number" id="numero_cuenta" name="numero_cuenta" required maxlength="12" max="999999999999" placeholder="Numero cuenta">
            </div>
            <div class="form-group">
              <label for="valor">Valor</label>
              <input v-model="formulario.valor" type="number" id="valor" name="valor" required maxlength="12" max="999999999999" placeholder="$ valor a pagar">
            </div>
            <div class="form-group pb-2">
              <label for="adjuntos">Adjuntar archivos en .zip</label>
              <input ref="adjuntos" type="file" id="adjuntos" name="adjuntos">
            </div>
            <div class="form-group">
              <button type="submit">Guardar y Enviar</button>
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
  data() {
    return {
      formulario: {
        fecha: '',
        ciudad: 'Bogota',
        nit: '',
        tercero: '',
        concepto: '',
        banco: 'Banco_bogota',
        tipo_cuenta: 'ahorros',
        numero_cuenta: '',
        valor: ''
      }
    };
  },
  methods: {
    async enviarFormulario() {
      const formData = new FormData();
      for (let key in this.formulario) {
        formData.append(key, this.formulario[key]);
      }

      // Añadir el archivo adjunto si existe
      const adjunto = this.$refs.adjuntos.files[0];
      if (adjunto) {
        formData.append('adjuntos', adjunto);
      }

      try {
        const respuesta = await axios.post('http://localhost:3000/endpoint', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Respuesta del servidor:', respuesta.data);
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    }
  }
};
</script>

<style>

</style>
