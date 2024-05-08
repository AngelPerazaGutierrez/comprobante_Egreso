<template>
  <div class="container">
    <div class="row d-flex justify-content-end ">
      <div class="componentes card-body p-1
      " v-for="(trabajo, index) in trabajos" :key="index">
        <div class="">
          <div class="row align-items-center">
            <div class="col-3">
              <div>
                <p><strong>CCP N° </strong>{{ trabajo.id }} <strong>Fecha: </strong>{{ trabajo.fecha }}</p>                
              </div>
            </div>            
            <div class="col-7">
              <p class="text-truncated"><strong>Descripcion: </strong>{{ trabajo.concepto }}</p>
            </div>
            <div class="col-2"><strong>Ciudad: </strong>{{ trabajo.ciudad }}</div>
          </div>

          <div class="row flex-column flex-md-row text-truncated" style="font-size: 0.9em;">
            <div class="col-3">
              <div>
                <p><strong>{{ trabajo.tercero }}</strong> {{ trabajo.nit }} </p>                
              </div>
            </div>
            <div class="col-4">
              <div >
                <p>
                  Valor Pagado: <strong> {{ trabajo.valor }}</strong>
                </p>
              </div>
            </div>
            
            <div class="col-5"><Strong>Banco: </Strong>{{ trabajo.banco }} <Strong>Cuenta: </Strong> {{ trabajo.tipo_cuenta}} <Strong>Numero: </Strong> {{ trabajo.numero_cuenta }}</div>            
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },data() {
      return {
        trabajos: [{
          id: 1,
          fecha: '2024-02-24',
          ciudad: 'Bogotá',
          nit: '830060553',
          tercero: 'SERVIENTREGA',
          concepto: 'pago de nomina 1 quincena marzo',
          banco: 'BOGOTA',
          tipo_cuenta: 'Ahorros',
          numero_cuenta: '0236558',
          valor: '58899662'
        },
        {
          id: 2,
          fecha: '2024-02-24',
          ciudad: 'Bogotá',
          nit: '103366698',
          tercero: 'AVC Company',
          concepto: 'pago de nomina 1 quincena marzo',
          banco: 'BBVA',
          tipo_cuenta: 'Ahorros',
          numero_cuenta: '788954',
          valor: '6800004'
        }, { 
          id: 3,
          fecha: '2024-02-24',
          ciudad: 'Bogotá',
          nit: '830060553',
          tercero: 'SERVIENTREGA',
          concepto: 'pago de nomina 1 quincena marzo',
          banco: 'BOGOTA',
          tipo_cuenta: 'Ahorros',
          numero_cuenta: '0236558',
          valor: '58899662'
        },
        { 
          id: 4,
          fecha: '2024-02-24',
          ciudad: 'Bogotá',
          nit: '830060553',
          tercero: 'SERVIENTREGA',
          concepto: 'pago de nomina 1 quincena marzo',
          banco: 'BOGOTA',
          tipo_cuenta: 'Ahorros',
          numero_cuenta: '0236558',
          valor: '58899662'
        },
        { 
          id: 5,
          fecha: '2024-02-24',
          ciudad: 'Bogotá',
          nit: '830060553',
          tercero: 'SERVIENTREGA',
          concepto: 'pago de nomina 1 quincena marzo',
          banco: 'BOGOTA',
          tipo_cuenta: 'Ahorros',
          numero_cuenta: '0236558',
          valor: '58899662'
        },
        { 
          id: 6,
          fecha: '2024-02-24',
          ciudad: 'Bogotá',
          nit: '830060553',
          tercero: 'SERVIENTREGA',
          concepto: 'pago de nomina 1 quincena marzo',
          banco: 'BOGOTA',
          tipo_cuenta: 'Ahorros',
          numero_cuenta: '0236558',
          valor: '58899662'
        }
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  .componentes {
  
    border: solid 1px rgb(189, 188, 188);
    border-radius: 5px;
    margin: 7px;
    z-index: 3;
    position: relative;
  
  }
  
  .componentes:hover {
    -webkit-box-shadow: 11px 24px 24px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 11px 24px 24px 5px rgba(0, 0, 0, 0.75);
    box-shadow: 11px 2px 24px 5px lightgray;
  }
  
  .buton-requisitos {
    border: solid 1px black;
    font-size: 12px;
    width: 14%;
    border-radius: 45px;
    padding-left: 0;
    padding-right: 0;
  }
  
</style>
