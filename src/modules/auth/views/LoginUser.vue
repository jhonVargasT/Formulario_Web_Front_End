<template>
  <div class="row custom-div-ini"></div>
  <div class="row justify-center">
    <div class="col-9">
      <span v-html="cabLog"> </span>
    </div>
  </div>
  <div class="row justify-center login100-form-title">Ingreso</div>
  <div class="row justify-center">
    <div class="col-9">
      <q-form class="q-gutter-md" @submit.prevent="onSubmit">
        <div dense>
          <q-input
            dense
            v-model="userForm.name"
            filled
            label="USUARIO"
            hint="Usuario con el que accede al sistema."
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Porfavor ingrese usuario',
            ]"
          />
          <span class="focus-input100" data-placeholder="&#xe82a;"></span>

          <q-input
            dense
            label="CONTRASEÑA"
            v-model="userForm.password"
            filled
            :type="isPwd ? 'password' : 'text'"
            hint="Contraseña para acceder al sistema."
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Porfavor ingrese contraseña',
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'las la-eye' : 'las la-eye-slash'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="row justify-center">
            <q-btn
              type="submit"
              :ripple="{ center: true }"
              color="primary"
              icon="las la-door-open"
              label="INGRESAR"
            />
          </div>

          <div v-show="reg">
            <div class="row justify-center">
              <span v-html="finlog"> </span>
            </div>
            <div class="row justify-center">
              <div class="container-login100-form-btn m-t-32">
                <router-link :to="{ name: 'register' }"
                  >¿crear cuenta?</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";
import Swal from "sweetalert2";

export default {
  setup() {
    const reg = ref(true);
    const { loginUser } = useAuth();
    const router = useRouter();
    const cabLog = ref(
      'Using text interpolation: <span style="color: red">This should be red.</span>Using v-html directive: This should be red.'
    );
    const finlog = ref(
      'Using text interpolation: <span style="color: red">This should be red.</span>Using v-html directive: This should be red.'
    );
    const userForm = ref({
      name: "010101",
      password: "jh@ll104499",
    });

    return {
      reg,
      cabLog,
      finlog,
      isPwd: ref(true),
      userForm,
      onSubmit: async () => {
        const { ok, message } = await loginUser(userForm.value);

        if (!ok) Swal.fire("Error", message, "error");
        else {
          // Swal.fire("Success", "Usuario logueado correctamente", "success");
          //para pasar a otra ruta
          router.push({ name: "index" });
        }
      },
    };
  },
};
</script>
<style scoped>
.custom-div-ini {
  height: 20vh;
}
.login100-form-title {
  font-family: Ubuntu-Bold;
  font-size: 28px;
  color: chocolate;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  display: block;
}
</style>
