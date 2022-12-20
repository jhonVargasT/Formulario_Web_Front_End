// export const myAction = ( state ) => {

// }

export const loginUser = (state, { user, token }) => {
  console.log(token);
  if (token) {
    localStorage.setItem("idToken", token);
    state.idToken = token;
  }

  /*if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
    state.refreshToken = refreshToken;
  }*/

  state.user = user;

  state.status = "authenticated";
};

export const logOut = (state) => {
  state.user = null;
  state.idToken = null;
  state.refreshToken = null;
  state.status = "not-authenticated";

  localStorage.removeItem("idToken");
  localStorage.removeItem("refreshToken");
};
