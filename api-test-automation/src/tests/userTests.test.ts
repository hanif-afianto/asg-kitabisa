import { expect } from 'chai'
import userService from '../core/userService'
import config from '../config/config'
import Logger from '../utils/logger'
import { faker } from '@faker-js/faker'

describe('User API Tests', function () {
  this.retries(2)

  it('should retrieve a single user successfully', async () => {
    Logger.info('Fetching user data...')
    const response = await userService.getUserById(config.userId)

    expect(response.status).to.equal(200)
    expect(response.data).to.have.property('data')
  })

  it('should update a user successfully', async () => {
    Logger.info('Updating user...')
    
    const newName = faker.person.fullName()
    const newJob = faker.person.jobTitle()

    const response = await userService.updateUser(config.userId, newName, newJob)

    expect(response.status).to.equal(200)
    expect(response.data).to.have.property('name', newName)
    expect(response.data).to.have.property('job', newJob)
    })
})