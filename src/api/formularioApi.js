import axios from "axios";

const formularioApi = axios.create({
  baseURL: "http://localhost:8000/api",
});

// console.log( process.env.NODE_ENV ) // TEST durante testing,

export default formularioApi;
