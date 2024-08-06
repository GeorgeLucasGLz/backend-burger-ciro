const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/user');
const { expect } = require('chai');

let token;

before(async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await User.deleteMany({});

  const user = new User({ username: 'testuser', password: 'password123' });
  await user.save();
  token = await request(app)
    .post('/api/auth/login')
    .send({ username: 'testuser', password: 'password123' })
    .then(res => res.body.token);
});

after(async () => {
  await mongoose.connection.close();
});

describe('Orders API', () => {
  it('should calculate an order', async () => {
    const res = await request(app)
      .post('/api/orders/calculate')
      .set('x-auth-token', token)
      .send({
        items: [
          { price: 15.99, quantity: 2 },
          { price: 9.99, quantity: 1 }
        ],
        discount: 5.00
      });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('total');
  });
});
