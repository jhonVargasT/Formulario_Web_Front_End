// export const myAction = async ({ commit }) => {

import formularioApi from "../../../api/formularioApi";

// }

export const createUser = async ({ commit }, user) => {
  const { name, email, password } = user;

  try {
    //registrar el usuario
    await formularioApi.post("/register", {
      name,
      email,
      password,
      volverSecureToken: true,
    });

    // obtener  los datos
    /*const { data } = await formularioApi.post("/login", {
      email,
      password,
      volverSecureToken: true,
    });*/
    //console.log(data);
    // const { message, success } = data;
    //delete user.password;
    //commit("loginUser", { user, token });
    return { ok: true };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};

export const signUser = async ({ commit }, user) => {
  const { name, password } = user;
  const url = window.location.href;
  const form = url.substr(url.length - 3); // => "1";
  try {
    //registrar el usuario
    const { data } = await formularioApi.post("/login", {
      name,
      password,
      form,
      volverSecureToken: true,
    });

    const { message, success, token, user, formulario, proyecto } = data;
    console.log(data);
    // delete user.password;
    if (success) {
      commit("loginUser", { proyecto, formulario, user, token });
      return { success: true, message: message };
    } else return { success: false, message: message };
  } catch (error) {
    return { ok: false, message: error.message };
  }
};

export const checkAuthentication = async ({ commit }, user) => {
  const idToken = localStorage.getItem("idToken");
  const refreshToken = localStorage.getItem("idToken");

  if (!idToken) {
    commit("logOut");
    return { ok: false, message: "No hay token en la autenticacion" };
  }

  try {
    const { data } = await authApi.post(":lookup", { idToken });

    const { displayName, email } = data.users[0];
    const user = {
      name: displayName,
      email,
    };
    commit("loginUser", { user, idToken, refreshToken });

    return { ok: true };
  } catch (error) {
    console.log(error);
    commit("logOut");
    return { ok: false, message: error.response.data.error.message };
  }
};
