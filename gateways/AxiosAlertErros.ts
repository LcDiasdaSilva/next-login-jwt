import { notify } from '@kyvg/vue3-notification'

interface ErrorMessage {
  title: string;
  message: string;
  type: string
}
export default class AxiosAlertErrors {

  error: any
  errorMessage: string
  defaultMessageErros: Record<string, ErrorMessage>
  title: string
  type: string
  token: any
  constructor() {
    this.errorMessage = ''
    this.title = ''
    this.type = ''
    this.defaultMessageErros = {
      400: { title: 'Erro', message: 'Parâmetros de rota não encontrados. Entre em contato com o suporte.', type: 'error' },
      401: { title: 'Aviso', message: 'Usuário não autorizado.', type: 'warn' },
      404: { title: 'Aviso', message: 'Rota não encontrada. Entre em contato com o suporte.', type: 'warn' },
      500: { title: 'Erro', message: 'Erro no servidor. Entre em contato com o suporte.', type: 'error' }
    }
  }

  async alertShow(error: any) {
    if (error.response.data.message) this.errorMessage = error.response.data.message
    if (!this.errorMessage) this.errorMessage = this.defaultMessageErros[error.response.status]?.message
    this.title = this.defaultMessageErros[error.response.status]?.title
    this.type = this.defaultMessageErros[error.response.status]?.type
    this.alert()
    if (error.response.status === 401) {
      navigateTo('/login')
    }
  }

  alert() {
    notify({
      title: this.title,
      type: this.type,
      text: this.errorMessage,
      duration: 10000
    })
  }
}


