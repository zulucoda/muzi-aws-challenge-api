const validate = require('.');

describe('Features - Image ML - Middleware - Validate', () => {
  describe('when valid', () => {
    test('should call next', () => {
      const req = {
        headers: {
          'content-type': 'image/jpeg',
          'content-length': '52425',
        },
      };
      const nextMock = jest.fn();
      validate(req, {}, nextMock);
      expect(nextMock).toHaveBeenCalled();
    });
  });
  describe('when invalid', () => {
    let sendMock;
    let mockResponse;
    let nextMock;
    let jsonMock;

    beforeEach(() => {
      sendMock = jest.fn();
      nextMock = jest.fn();
      jsonMock = jest.fn();
      mockResponse = {
        send: sendMock,
        status: jest.fn(() => ({
          send: sendMock,
          json: jsonMock,
        })),
        json: jsonMock,
      };
    });

    test('should return Unsupported Media Type when content-type is not jpeg', () => {
      const req = {
        headers: {
          'content-type': 'image/png',
          'content-length': '52425',
        },
      };

      validate(req, mockResponse, nextMock);
      expect(nextMock).not.toHaveBeenCalled();
      expect(jsonMock).toHaveBeenCalledWith({
        message: 'Unsupported Media Type',
      });
      expect(mockResponse.status).toHaveBeenCalledWith(400);
    });
    test('should return Image must not exceed 5MB when content-length is greater than 5mb', () => {
      const req = {
        headers: {
          'content-type': 'image/jpeg',
          'content-length': '524254545544',
        },
      };

      validate(req, mockResponse, nextMock);
      expect(nextMock).not.toHaveBeenCalled();
      expect(jsonMock).toHaveBeenCalledWith({
        message: 'Image must not exceed 5MB',
      });
      expect(mockResponse.status).toHaveBeenCalledWith(400);
    });
  });
});
