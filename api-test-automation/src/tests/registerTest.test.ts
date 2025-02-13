import { expect } from 'chai'
import registerService from '../core/registerService'
import Logger from '../utils/logger'
import testData from '../utils/testData'

describe('Register API Tests', function () {
  this.retries(2)

  it('should register a user successfully', async () => {
    Logger.info('Registering a user...')
    const response = await registerService.registerSuccessful(testData.validEmail, testData.validPassword)

    expect(response.status).to.equal(200)
    expect(response.data).to.have.property('id')
    expect(response.data).to.have.property('token')
  })

  it('should fail to register a user without password', async () => {
    try {
      await registerService.registerUnsuccessful(testData.validEmail)
    } catch (error: any) {
      expect(error.response.status).to.equal(400)
      expect(error.response.data).to.have.property('error', 'Missing password')
    }
  })
})