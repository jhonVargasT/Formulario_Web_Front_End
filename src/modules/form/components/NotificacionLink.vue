<template>
  <div class="q-pa-md">
    <q-btn-dropdown rounded icon="las la-users-cog">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar
              icon="las la-address-card"
              color="cyan-10"
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

export default defineComponent({
  name: "NotificacionLink",
  setup() {
    return {
      onItemClick() {
        // console.log('Clicked on an Item')
      },
    };
  },
});
</script>
