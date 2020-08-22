const { calculate } = require('.');

describe('Features - Calculator - Unit Test', () => {
  let sendMock;
  let mockResponse;

  describe('calculate', () => {
    beforeEach(() => {
      sendMock = jest.fn();
      mockResponse = {
        send: sendMock,
        status: jest.fn(() => ({
          send: sendMock,
        })),
        json: jest.fn(),
      };
    });

    test('should + a and b and return the answer in c', () => {
      const request = {
        body: {
          a: '12',
          b: '12',
          op: '+',
        },
      };

      const expected = {
        ...request.body,
        c: 24,
      };

      calculate(request, mockResponse);

      expect(mockResponse.json).toHaveBeenCalledWith(expected);
    });
    test('should * a and b and return the answer in c', () => {
      const request = {
        body: {
          a: '2',
          b: '12',
          op: '*',
        },
      };

      const expected = {
        ...request.body,
        c: 24,
      };

      calculate(request, mockResponse);

      expect(mockResponse.json).toHaveBeenCalledWith(expected);
    });
    test('should - a and b and return the answer in c', () => {
      const request = {
        body: {
          a: '26',
          b: '2',
          op: '-',
        },
      };

      const expected = {
        ...request.body,
        c: 24,
      };

      calculate(request, mockResponse);

      expect(mockResponse.json).toHaveBeenCalledWith(expected);
    });
    test('should / a and b and return the answer in c', () => {
      const request = {
        body: {
          a: '24',
          b: '2',
          op: '/',
        },
      };

      const expected = {
        ...request.body,
        c: 12,
      };

      calculate(request, mockResponse);

      expect(mockResponse.json).toHaveBeenCalledWith(expected);
    });
    test('should return bad request for divide by 0', () => {
      const request = {
        body: {
          a: 0,
          b: 0,
          op: '/',
        },
      };

      calculate(request, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(sendMock).toHaveBeenCalledWith('error dividing numbers');
    });
    test('should return bad request for number divide by 0', () => {
      const request = {
        body: { a: 2, b: 0, op: '/' },
      };

      calculate(request, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(sendMock).toHaveBeenCalledWith('error dividing numbers');
    });
  });
});
