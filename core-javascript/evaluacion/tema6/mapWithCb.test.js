const mapWithCb = require('./mapWithCb');

describe('mapWithCb Function', () => {
    let mockCallback;
    beforeEach(() => {
      mockCallback = jest.fn(); // Create a new mock function before each test
    });

    test('throws an error if first argument is not an array', () => {
        expect(() => mapWithCb('not an array', mockCallback)).toThrow('Invalid input: expected an array and a callback function.');
        expect(() => mapWithCb(123, mockCallback)).toThrow('Invalid input: expected an array and a callback function.');
        expect(() => mapWithCb({ key: 'value' }, mockCallback)).toThrow('Invalid input: expected an array and a callback function.');
        expect(() => mapWithCb(null, mockCallback)).toThrow('Invalid input: expected an array and a callback function.');
    });

    test('throws an error if second argument is not a function', () => {
        expect(() => mapWithCb([1, 2, 3, 4, 5], 'not a function')).toThrow('Invalid input: expected an array and a callback function.');
        expect(() => mapWithCb([1, 2, 3, 4, 5], 123)).toThrow('Invalid input: expected an array and a callback function.');
    });

    test('calls the given function at least once', () => {
        mapWithCb([1], mockCallback);
        expect(mockCallback).toHaveBeenCalled();
    });

    test('calls the given function a number of times equal to the length of the given array', () => {
      mapWithCb([1, 2, 3, 4], mockCallback);
      expect(mockCallback).toHaveBeenCalledTimes(4); 
    });
  
    test('calls the given function with any one item from the given array', () => {
      const inputArray = [50, 40, 10];
      mapWithCb(inputArray, mockCallback);
      expect(mockCallback).nthCalledWith(1, 50, 0, inputArray);
      expect(mockCallback).nthCalledWith(2, 40, 1, inputArray);
      expect(mockCallback).nthCalledWith(3, 10, 2, inputArray);
    });
  
  
    test('calls the given function a second time with the second item in the given array', () => {
      const inputArray = [1, 2, 3, 4];
      mapWithCb(inputArray, mockCallback);
      expect(mockCallback).nthCalledWith(2, 2, 1, inputArray);
    });
  
    test('calls the given function a final time with the final item in the given array', () => {
      const inputArray = [1, 2, 3, 4];
      mapWithCb(inputArray, mockCallback);
      expect(mockCallback).nthCalledWith(4, 4, 3, inputArray); 
    });

})