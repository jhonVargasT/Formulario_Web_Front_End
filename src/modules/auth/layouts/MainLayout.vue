<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="row col-12">
        <div
          class="column col-9"
          style="
            background-image:  v-bind:src(imagen );

            width: 1100px;
            height: 740px;
          "
        >
          <div class="row q-mb-md bg-succes justify-end">
            <div class="col-5">
              <span
                class="text-weight-bolder text-uppercase text-justify custom-style-titulo"
                v-html="titulo"
              >
              </span>
            </div>
          </div>
          <div class="row q-mb-md bg-succes justify-end">
            <div class="col-5 text-justify custom-style-des">
              <span v-html="descripcion"></span>
            </div>
          </div>
          <div class="row q-mb-md custom-div-esp"></div>
          <div class="row q-mb-md">
            <div class="col custom-style-contac">
              <span v-html="nota"></span>
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
import { ref } from "vue";
import useMainLayout from "../composables/useMainLayout";

export default {
  name: "MainLayout",

  setup() {
    const imagen = ref();
    const titulo = ref();
    const descripcion = ref();
    const nota = ref();
    return {
      imagen,
      titulo,
      descripcion,
      nota,
    };
  },

  mounted() {
    const { getProyecto } = useMainLayout();
    getProyecto().then(
      (data) => (
        (this.imagen = data.imgPortada),
        (this.titulo = data.tituloProyecto),
        (this.descripcion = data.descripcionProyecto),
        (this.nota = data.nota)
      )

      // (this.formData = data.data.formulario.descripcionProyecto)
    );
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
