<template>
<div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="container registro">
          <form id="comprobante_egreso">
            <h3>Comprobante de egreso Virtual</h3>
            <div class="form-group">              
              <input type="date" id="fecha" name="fecha" required>
            </div>
            <div class="form-group">
              <label for="ciudad"></label>
              <select id="ciudad" name="ciudad" required>
                <option value="Bogota" selected>Bogota</option>
                <option value="Medellin">Medellin</option>
                <option value="Cali">Cali</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Otras ciudades">Otra ciudad</option>
              </select>
            </div>
            <div class="form-group">
              <label for="tercero">Tercero</label>
              <input type="text" id="tercero" name="tercero" required placeholder="A favor de">
            </div>
            <div class="form-group">
              <label for="nit">NIT/CC</label>
              <input type="number" id="nit" name="nit" required maxlength="12" max="999999999999"
                placeholder="Numero de identificacion tributaria">
            </div>
            <div class="form-group">
              <label for="concepto">Por concepto</label>
              <input type="text" id="concepto" name="concepto" required placeholder="Descripción del concepto">
            </div>
            <div class="form-group">
              <label for="banco">Banco</label>
              <select id="banco" name="banco" required>
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
              <label for="tipo_cuenta">tipo de cuenta</label>
              <select id="tipo_cuenta" name="tipo_cuenta" required>
                <option value="ahorros" selected>Ahorros</option>
                <option value="corriente">corriente</option>
              </select>
            </div>
            <div class="form-group">
              <label for="numero_cuenta">Numero de cuenta</label>
              <input type="number" id="numero_cuenta" name="numero_cuenta" required maxlength="12" max="999999999999" placeholder=" numero cuenta">
            </div>
            <div class="form-group">
              <label for="valor">Valor</label>
              <input type="number" id="valor" name="valor" required maxlength="12" max="999999999999" placeholder="$ valor a pagar">
            </div>
            <div class="form-group pb-2">
              <label for="adjuntos">Adjuntar archivos en .zip</label>
              <input type="file" id="adjuntos" name="adjuntos">
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


export default {
    name: 'CrearEgreso',
    props: {
      msg: String
    }
  }
</script>