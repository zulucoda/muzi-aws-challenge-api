const { carFixture } = require('./__fixtures/index.fixtures');
const getMainImage = require('.');

describe('Features - Image-ML - Utils - Get Main Image - Unit Test', function() {
  test('should return the main image', () => {
    const result = getMainImage(carFixture);
    const expected = 'We about 100% sure there is a Car';
    expect(result).toEqual(expected);
  });
});