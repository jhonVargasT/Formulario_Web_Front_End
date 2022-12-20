<template>
  <div class="q-pa">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar class="bg-white">
          <div class="col-1 q-pa-md q-gutter-sm">
            <q-img
              alt="Inei logo"
              src="http://censos.inei.gob.pe/renamu/2021/formulario01/imagenes/logo_inei.jpg"
              style="width: 160px; height: 100px"
            />
          </div>
          <div class="col-11">
            <div
              class="row text-weight-bolder text-uppercase text-justify login100-form-title"
            >
              {{ titulo }}
            </div>
            <div
              class="row text-weight-bolder text-justify login100-form-subtitle"
            >
              {{ subtitulo }}
            </div>
          </div>
        </q-toolbar>
        <q-toolbar class="bg-light-blue-10">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              round
              color="secondary"
              icon="las la-home"
              title="Clic para ir a nicio"
            />
          </div>
          <q-toolbar-title class="text-center"> </q-toolbar-title>
          <div v-if="noti">
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                round
                color="yellow-7"
                icon="las la-bell"
                title="Clic para ver notificaciones"
              />
            </div>
          </div>
          <div v-else>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                round
                color="secondary"
                icon="las la-bell"
                title="Clic para ver notificaciones"
              />
            </div>
          </div>
          <div>
            <LinkDescargables> </LinkDescargables>
          </div>
        </q-toolbar>
        <q-toolbar class="bg-blue-grey-1">
          <q-toolbar-title class="text-center text-black">
            {{ nombUsu }}
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
        <q-list>
          <q-item-label header> LISTA DE TEMAS </q-item-label>

          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "../components/EssentialLink.vue";
import LinkDescargables from "../components/LinkDescargables.vue";
const linksList = [
  {
    title: "Capitulo 01",
    link: "",
  },
  {
    title: "Capitulo 02",
    link: "",
  },
  {
    title: "Capitulo 03",
    link: "",
  },
  {
    title: "Capitulo 04",
    link: "",
  },
  {
    title: "Capitulo 05",
    link: "",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    LinkDescargables,
  },

  setup() {
    const nombUsu = ref("010101 -MUNICIPALIDAD PROVINCIAL DE CHACHAPOYAS");
    const leftDrawerOpen = ref(false);
    const titulo = ref("REGISTRO NACIONAL DE MUNICIPALIDADES 2023");
    const subtitulo = ref(
      "Formulario en Línea de las Municipalidades Provinciales y Distritales"
    );
    const noti = ref(true);
    return {
      titulo,
      subtitulo,
      nombUsu,
      LinkDescargables,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      noti,
    };
  },
});
</script>
<style scoped>
.login100-form-title {
  font-family: Ubuntu-Bold;
  font-size: 35px;
  color: chocolate;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  display: block;
}
.login100-form-subtitle {
  font-family: Ubuntu-Bold;
  font-size: 22px;
  color: rgb(0, 0, 0);
  line-height: 1.2;
  text-align: center;

  display: block;
}
</style>
