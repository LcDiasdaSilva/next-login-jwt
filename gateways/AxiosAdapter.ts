
import axios from "axios";
import AxiosAlertErrors from "./AxiosAlertErros";
const axiosAlertError = new AxiosAlertErrors()

export default class AxiosAdapter {
  api: any
  token: string | null
  constructor(baseUrl: string) {
    this.token = useCookie('token')?.value || null;
    this.api = axios.create({
      baseURL: baseUrl,
      timeout: 100000,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })


    this.api.interceptors.request.use(async (request: any) => {
      if (this.token) {
        request.headers.Authorization = `Bearer ${this.token}`
      }
      return request
    })

    this.api.interceptors.response.use((response: any) => response.data, (error: any) => {

      if (!error) return
      if (!error.response) return navigateTo('/login')
      axiosAlertError.alertShow(error)
    })

  }

  get(endpoint = '', params = {}) {
    return this.api.get(endpoint, { params });
  }

  post(endpoint = '', data = {}) {
    return this.api.post(endpoint, data);
  }

  put(endpoint = '', data = {}) {
    return this.api.put(endpoint, data);
  }

  del(endpoint = '', data = null) {
    return this.api.delete(endpoint, data);
  }

  postFile(endpoint = '', data: any) {
    const paramsKeys = Object.keys(data);
    let formData = new FormData();

    paramsKeys.forEach(item => {
      formData.append('file', data[item])
    });
    return this.api.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

}