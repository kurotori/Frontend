import axios from "axios";

    axios.defaults.withCredentials = true; // Essential for sending cookies across origins (if applicable)
    axios.defaults.xsrfCookieName = 'XSRF-TOKEN'; // The name of your CSRF cookie
    axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'; // The name of the header where the token will be sent

const instanciaAxios = {

    axiosBase: axios.create(
                    {
                        withCredentials : true,
                        withXSRFToken : true,
                        baseURL : 'http://127.0.0.1:8000/api/',
                    }
                ),
    axiosCSRF: axios.create(
                    {
                        baseURL : 'http://127.0.0.1:8000/sanctum/csrf-cookie'
                    }
                )

}
    

export default instanciaAxios