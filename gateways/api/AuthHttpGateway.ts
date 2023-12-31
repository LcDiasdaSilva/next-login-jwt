import AxiosAdapter from "../AxiosAdapter"

export default class AuthHttpGateway extends AxiosAdapter {
  constructor(urlBase: string) {
    super(urlBase)
  }

  logIn(data: any) {
    const endpoint = '/login'
    return this.post(endpoint, data)
  }

}

