import apiClient from './apiClient'

class loginService {
  async loginSuccessful(email: string, password: string) {
    return apiClient.post('/login', { email, password })
  }

  async loginUnsuccessful(email: string) {
    return apiClient.post('/login', { email })
  }
}

export default new loginService()