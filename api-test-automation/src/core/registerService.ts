import apiClient from './apiClient'

class RegisterService {
  async registerSuccessful(email: string, password: string) {
    return apiClient.post('/register', { email, password })
  }

  async registerUnsuccessful(email: string) {
    return apiClient.post('/register', { email })
  }
}

export default new RegisterService()