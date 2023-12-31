interface IAuthHttp {
  logIn(IUser): Promise<AxiosResponse<string>>
}

interface IUserHttp {
  getUserMe(): Promise<AxiosResponse<any>>
}