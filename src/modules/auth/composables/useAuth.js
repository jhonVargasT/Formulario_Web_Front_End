import { computed } from "vue";
import { useStore } from "vuex";
import formularioApi from "../../../api/formularioApi";
const useAuth = () => {
  const store = useStore();

  const getFormLog = async (form) => {
    try {
      const { data } = await formularioApi.get("/formulario", {
        params: { form: form },
      });
      const { formulario } = data;
      return formulario;
    } catch (error) {
      return { ok: false, message: error.message };
    }
  };
  const createUser = async (user) => {
    const resp = await store.dispatch("auth/createUser", user);
    return resp;
  };

  const loginUser = async (user) => {
    const { success, message } = await store.dispatch("auth/signUser", user);
    return { ok: success, message: message };
  };

  /*const checkAuthStatus = async () => {
    const resp = await store.dispatch("auth/checkAuthentication");
    return resp;
  };

  const logout = () => {
    store.commit("auth/logOut");
  };*/

  return {
    createUser,
    loginUser,
    getFormLog,
    //checkAuthStatus,
    //logout,
    authStatus: computed(() => store.getters["auth/currentState"]),
    username: computed(() => store.getters["auth/username"]),
  };
};

export default useAuth;
