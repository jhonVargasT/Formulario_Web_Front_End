<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="row col-12">
        <div
          class="column col-9"
          style="
            background-image: url('https://img.freepik.com/foto-gratis/fondo-pinceladas-azules_125540-809.jpg?t=st=1670702293~exp=1670702893~hmac=bdb466f0ba8a2bf340ef3262800bf66f765b0c460918bb9b3266112b1822fed8');
            width: 1100px;
            height: 740px;
          "
        >
          <div class="row q-mb-md bg-succes justify-end">
            <div class="col-5">
              <span
                class="text-weight-bolder text-uppercase text-justify custom-style-titulo"
              >
                {{ titulo }}
              </span>
            </div>
          </div>
          <div class="row q-mb-md bg-succes justify-end">
            <div class="col-5 text-justify custom-style-des">
              <span>{{ descripcion }}</span>
            </div>
          </div>
          <div class="row q-mb-md custom-div-esp"></div>
          <div class="row q-mb-md">
            <div class="col custom-style-contac">
              <span>{{ contacto }}</span>
            </div>
          </div>
        </div>
        <div class="col-3 column">
          <router-view></router-view>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue-demi";
export default {
  name: "MainLayout",

  setup() {
    const titulo = ref(
      "EL INEI EJECUTA EL RENAMU 2023 DEL 30 DE MAYO AL 15 DE JULIO"
    );
    const descripcion = ref(
      'El formulario debe ser diligenciado por el Alcalde o funcionario municipal designado. Eta informacion es amparada por la ley N° 27563 del 25/11/2001, que crea el Registro Nacional de Municipalidades a cargo del INEI, Decreto supremo N° 033-2002-PCM y Resolucion Jefatural N° 093-2023-INEI publicado en el Diario oficial "El Peruano" el 12/05/2021, que aprueba la ejecución del RENAMU 2022'
    );

    const contacto = ref(
      "En caso de no disponer de Usuario y Clave de acceso, solicítelo al correo renamu@inei.gob.pe o a los telefonos móviles 991685938/994603270/991681389"
    );
    return {
      titulo,
      contacto,
      descripcion,
    };
  },
};
</script>
<style lang="scss" scoped>
.custom-div-esp {
  height: 40vh;
}
.custom-style-titulo {
  font-family: Ubuntu-Bold;
  font-size: 40px;
  color: chocolate;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  display: block;
}
.custom-style-des {
  font-family: Ubuntu-Bold;
  font-size: 15px;
  color: rgb(2, 2, 2);
  line-height: 1.2;
  display: block;
}
.custom-style-contac {
  border-start-end-radius: 250px 100px;
  direction: rtl;
  font-family: Ubuntu-Bold;
  font-size: 20px;
  color: rgb(104, 103, 103);
  line-height: 1.2;
  text-align: left;
  text-transform: uppercase;

  display: block;
}
</style>
