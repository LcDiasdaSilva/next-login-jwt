import AxiosAdapter from "../AxiosAdapter"

export default class UserHttpGateway extends AxiosAdapter {
  constructor(urlBase: string) {
    super(urlBase)
  }

  getUserMe(params: any) {
    const endpoint = '/api/users/me'
    return this.get(endpoint, params)
  }

  

  

  

  

}

