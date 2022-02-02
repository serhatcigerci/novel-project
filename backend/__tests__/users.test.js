/* eslint-disable */
const request = require('supertest')
const app = require('../src/app')

describe('Users endpoints', () => {
  it('post request to /users should create a user', async () => {
    const userToCreate = {
      name: `SomeName${Date.now()}`,
      age: 27,
      bio: 'Been There. Done That.',
    }
    const createdUser = (await request(app).post('/users').send(userToCreate)).body
    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
    expect(createdUser.bio).toBe(userToCreate.bio)
  })
  it('get request to /users should list users', async () => {
    const userList = (await request(app).get('/users')).body
    const usersExist = userList.length > 0
    expect(usersExist).toBe(true)
  })
})