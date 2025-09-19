import axios from "axios";

//axios.defaults.withCredentials = true; // Essential for sending cookies across origins (if applicable)
//axios.defaults.xsrfCookieName = "XSRF-TOKEN"; // The name of your CSRF cookie
//axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN"; // The name of the header where the token will be sent

const instanciaAxios = {
  axiosBase: axios.create({
    headers:{
      Accept:'application/json',
      "X-XSRF-TOKEN": getCookie("XSRF-TOKEN")
    },
    withCredentials: true,
    withXSRFToken: true,
    baseURL: "http://localhost:8000/api",
    //baseURL: "https://notas.test/api/",
  }),

  axiosCSRF: axios.create({
    withCredentials: true,
    withXSRFToken: true,
    baseURL: "http://localhost:8000/sanctum/csrf-cookie",
    //baseURL: "https://notas.test/sanctum/csrf-cookie",
  }),
};

function getCookie(cName) {
  const name = cName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default instanciaAxios;
