import axios, { AxiosInstance, AxiosResponse } from 'axios'
import config from '../config/config'

class ApiClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: config.baseUrl,
      timeout: 5000,
    })
  }

  async get(endpoint: string) {
    return this.client.get(endpoint)
  }

  async post(endpoint: string, data: any) {
    return this.client.post(endpoint, data)
  }

  async patch(endpoint: string, data: any): Promise<AxiosResponse> {
    return this.client.patch(endpoint, data)
  }
}

export default new ApiClient()