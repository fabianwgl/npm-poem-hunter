const {
  expect
} = require('chai');

const {
  getRandomPoem
} = require('../src')

describe('getRandomPoem', () => {
  it('should scrap a random poem ', async () => {
    const response = await getRandomPoem()

    expect(response).to.haveOwnProperty('title');
    expect(response).to.haveOwnProperty('content');
  });
});