<template>
  <q-page>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="row custom-div-esp"></div>
        <div class="row">
          <span class="text-weight-bolder text-h5 text-center">
            {{ nombForm }}</span
          >
        </div>
        <div class="row custom-div-esp"></div>
        <div class="row">
          <span class="text-body1 text-weight-bolder text-h5"
            >Bienvenido :</span
          >
        </div>
        <div class="row custom-div-esp"></div>
        <div>
          <div class="text-body1">{{ nombUsu }}</div>
        </div>
        <div class="row custom-div-esp"></div>
        <div class="row text-body1 text-weight-bolder">Etimado usuario :</div>
        <div class="row text-body1" v-html="saludo"></div>
        <div class="row custom-div-esp"></div>
        <div class="row custom-div-esp"></div>
        <div class="row custom-div-esp"></div>
        <div class="row custom-div-esp"></div>
        <div class="row self-center">
          <div class="col-2"></div>
          <div class="col-3">
            <q-btn color="secondary" push title="Clic para ir a nicio">
              <div class="row items-center no-wrap">
                <q-icon left name="las la-home" />
                <div class="text-center">Ir a <br />Inicio</div>
              </div>
            </q-btn>
          </div>
          <div class="col-3">
            <q-btn color="deep-orange" push>
              <div class="row items-center no-wrap">
                <q-icon left name="las la-video" />
                <div class="text-center">Video<br />Tutorial</div>
              </div>
            </q-btn>
          </div>
          <div class="col-3">
            <q-btn color="purple-11" push>
              <div class="row items-center no-wrap">
                <q-icon left name="las la-chalkboard-teacher" />
                <div class="text-center">Guia de <br />Instrucciones</div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const nombUsu = ref("010101 -MUNICIPALIDAD PROVINCIAL DE CHACHAPOYAS");
    const nombForm = ref(
      " FORMULARIO EN LINEA DE LAS MUNICIPALIDADES PROVINCIALES Y DISTRITALES"
    );
    const saludo = ref(
      '<br>Antes de iniciar con el llenado del formulario, se recomienda ver el "Video Tutorial" y descargar la "Guía de Instrucciones ", ubicados en los iconos de la parte inferior y menu de usuario.<br/>Para iniciar, hacer clic en la opción "Ir a início" .'
    );
    return {
      nombUsu,
      saludo,
      nombForm,
    };
  },
});
</script>
<style lang="scss" scoped>
.custom-div-esp {
  height: 2vh;
}
</style>
