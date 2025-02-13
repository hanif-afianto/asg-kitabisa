import { expect } from 'chai'
import loginService from '../core/loginService'
import Logger from '../utils/logger'
import testData from '../utils/testData'

describe('Login API Tests', function () {
  this.retries(2)

  it('should login successfully', async () => {
    Logger.info('Logging in a valid user...')
    const response = await loginService.loginSuccessful(testData.validEmail, testData.validPassword)

    expect(response.status).to.equal(200)
    expect(response.data).to.have.property('token')
  })

  it('should fail to login with invalid credentials', async () => {
    try {
      await loginService.loginSuccessful(testData.invalidEmail, testData.invalidPassword)
    } catch (error: any) {
      expect(error.response.status).to.equal(400)
      expect(error.response.data).to.have.property('error', 'user not found')
    }
  })
})