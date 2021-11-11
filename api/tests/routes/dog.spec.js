/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  id: "481eeadb-1b13-41ab-a945-7d7fafcde4b2",
  name: 'Pug',
  altura: "23",
  weight:  "345",
};

const Dog1 = {
  weight: { imperial: '6 - 13', metric: '3 - 6' },
  height: { imperial: '9 - 11.5', metric: '23 - 29' },
  id: 1,
  name: 'Affenpinscher',
  bred_for: 'Small rodent hunting, lapdog',
  breed_group: 'Toy',
  life_span: '10 - 12 years',
  temperament: 'Stubborn, Curious, Playful, Adventurous, Active, Fun-loving',
  origin: 'Germany, France',
  reference_image_id: 'BJa4kxc4X',
  image: {
    id: 'BJa4kxc4X',
    width: 1600,
    height: 1199,
    url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg'
  }
}

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  // describe('GET /dogs', () => {
  //   it('should get 200', () =>
  //     agent.get('/dogs').expect(200)
  //   );
  // });
  describe('GET home/dogs', () => {
    it('should get 173 items', () =>
      agent.get('/home/dogs')
      .then(dogs=>  expect(dogs.body).to.have.length(173))
    );
    it('home/dogs/name-pinsher to have length 4', () =>
      agent.get('/home/dogs/name-pinscher')
      .then(dogs=> expect(dogs.body).to.have.length(4))
    );
    // it('home/dogs/id-1 to have length 1', () =>
    //   agent.get('/home/dogs/id-1')
    //   .then(dogs=> expect(dogs.body).to.have.length(1))
    // ); hace un timeout, buscar como ajustar el timeout
  });
});
