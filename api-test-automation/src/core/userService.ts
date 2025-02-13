import apiClient from './apiClient'

class UserService {
  async getUserById(userId: number) {
    return apiClient.get(`/users/${userId}`)
  }

  async updateUser(userId: number, name: string, job: string) {
    return apiClient.patch(`/users/${userId}`, { name, job })
  }
}

export default new UserService()
