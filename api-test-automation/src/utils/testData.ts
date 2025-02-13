import { faker } from '@faker-js/faker'

export default {
  validEmail: 'eve.holt@reqres.in',
  validPassword: 'cityslicka',
  invalidEmail: faker.internet.email(),
  invalidPassword: faker.internet.password(),
}