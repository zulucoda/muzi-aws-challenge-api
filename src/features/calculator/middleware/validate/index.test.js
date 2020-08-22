const validate = require('.');

describe('Features - Calculator - Middleware - Validate - Unit Test', () => {
  describe('validate', () => {
    const mockResponse = {
      sendStatus: jest.fn(),
    };
    const mockNext = jest.fn();
    test('when valid it should call next', () => {
      const request = {
        body: {
          a: '12',
          b: '12',
          op: '+',
        },
      };
      validate(request, mockResponse, mockNext);
      expect(mockNext).toBeCalled();
    });

    test('when invalid it should return 400 bad request', () => {
      const request = {
        body: {
          a: 'two',
          b: 'one',
          op: '+',
        },
      };
      validate(request, mockResponse, mockNext);
      expect(mockResponse.sendStatus).toBeCalledWith(400);
    });
  });
});
