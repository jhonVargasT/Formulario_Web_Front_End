<template>
  <div class="row justify-center custom-div-ini"></div>
  <span class="row justify-center login100-form-title"> INGRESO </span>
  <span class="row justify-center login100-form-title" v-html="logTitulo">
  </span>
  <div class="row justify-center">
    <div class="col-9">
      <span v-show="cabLogAct" v-html="cabLog"> </span>
    </div>
  </div>

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

          <div>
            <div class="row justify-center">
              <span v-show="finLogAct" v-html="finlog"> </span>
            </div>
            <div class="row justify-center" v-show="reg">
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
    const reg = ref(false);
    const { loginUser, getFormLog } = useAuth();
    const router = useRouter();
    const cabLog = ref();
    const finlog = ref();
    const cabLogAct = ref();
    const finLogAct = ref();
    const logTitulo = ref();
    const lastChar = ref();
    const userForm = ref({
      name: "010101",
      password: "jh@ll104499",
    });

    return {
      getFormLog,
      cabLogAct,
      finLogAct,
      logTitulo,
      lastChar,
      reg,
      cabLog,
      finlog,
      isPwd: ref(true),
      userForm,
      onSubmit: async () => {
        const { ok, message } = await loginUser(userForm.value);
        if (!ok) Swal.fire("Error", message, "error");
        else {
          router.push({ name: "index" });
        }
      },
    };
  },
  mounted() {
    const { getFormLog } = useAuth();
    const url = window.location.href;
    this.lastChar = url.substr(url.length - 3); // => "1"
    getFormLog(this.lastChar).then(
      (data) => (
        (this.finlog = data.logInfe),
        (this.cabLog = data.logSup),
        (this.logTitulo = data.logTitulo),
        (this.cabLogAct = data.infoSup === "1" ? true : false),
        (this.finLogAct = data.infoInfe === "1" ? true : false)
      )
    );
  },
};
</script>
<style scoped>
.custom-div-ini {
  height: 5vh;
}
.login100-form-title {
  font-family: Ubuntu-Bold;
  font-size: 20px;
  color: chocolate;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  display: block;
}
</style>
