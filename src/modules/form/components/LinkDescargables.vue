<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn-dropdown rounded icon="las la-users-cog">
      <q-list>
        <q-list v-for="links in linkDescargable" :key="links.id">
          <q-item
            clickable
            v-close-popup
            tag="a"
            target="_blank"
            :href="links.url"
          >
            <q-item-section avatar>
              <q-avatar
                :icon="links.icon"
                :color="links.color"
                text-color="white"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label> {{ links.name }} </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar
              icon="las la-address-card"
              color="green-5"
              text-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Contactenos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar
              icon="las la-clipboard-list"
              color="primary"
              text-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Reglas de consistencia</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar
              icon="las la-ticket-alt"
              color="secondary"
              text-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Ticket de atencion</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar
              icon="las la-door-open"
              color="red-10"
              text-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Salir</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "LinkDescargables",
  setup() {
    const links = ref([
      {
        id: 1,
        name: "Videos tutorial",
        url: "https://stackoverflow.com/questions/74166871/vue-js-make-multiple-arrays-from-one-array-of-json-based-on-a-property",
        icon: "las la-video",
        color: "red-11",
      },
      {
        id: 2,
        name: "Guia de instrucciones",
        url: "http://censos.inei.gob.pe/renamu/2021/formulario01/",
        icon: "las la-chalkboard-teacher",
        color: "purple-11",
      },
      {
        id: 3,
        name: "Descargar formulario 2023",
        url: "https://vuejs.org/guide/essentials/component-basics.html#defining-a-component",
        icon: "las la-file-pdf",
        color: "lime-5",
      },
      {
        id: 4,
        name: "Renamu 2015-2022",
        url: "https://stackoverflow.com/questions/65060870/how-can-i-push-to-an-array-in-vue-3",
        icon: "las la-file-archive",
        color: "teal-13",
      },
    ]);

    return {
      linkDescargable: links,
      onItemClick() {
        // console.log('Clicked on an Item')
      },
    };
  },
});
</script>
