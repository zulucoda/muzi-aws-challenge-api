const { calculate } = require('.');

describe('Features - Calculator - Unit Test', () => {

    const mockResponse = {
        send: jest.fn(),
        status: jest.fn(),
        json: jest.fn()
    }

   describe('add', () => {

     test('should + a and b and return the answer in c', () => {
         const request = {
             body: {
                 a: "12",
                 b: "12",
                 op: "+"
             }
         }

         const expected = {
             ...request.body,
             c: 24
         }

         calculate(request, mockResponse);

        expect(mockResponse.json).toHaveBeenCalledWith(expected);
     });
     test('should * a and b and return the answer in c', () => {
         const request = {
             body: {
                 a: "2",
                 b: "12",
                 op: "*"
             }
         }

         const expected = {
             ...request.body,
             c: 24
         }

         calculate(request, mockResponse);

        expect(mockResponse.json).toHaveBeenCalledWith(expected);
     });
     test('should - a and b and return the answer in c', () => {
         const request = {
             body: {
                 a: "26",
                 b: "2",
                 op: "-"
             }
         }

         const expected = {
             ...request.body,
             c: 24
         }

         calculate(request, mockResponse);

        expect(mockResponse.json).toHaveBeenCalledWith(expected);
     });
     test('should / a and b and return the answer in c', () => {
         const request = {
             body: {
                 a: "24",
                 b: "2",
                 op: "/"
             }
         }

         const expected = {
             ...request.body,
             c: 12
         }

         calculate(request, mockResponse);

        expect(mockResponse.json).toHaveBeenCalledWith(expected);
     });
   });
});