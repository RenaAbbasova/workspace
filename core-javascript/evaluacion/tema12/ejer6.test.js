const getValuesInRange = require('./ejer6'); 

describe('getValuesInRange', () => {
    test('returns values within the specified range', () => {
        const set = new Set([5, 10, 15, 20, 25, 30]);
        expect(getValuesInRange(set, 10, 20)).toEqual([10, 15, 20]);
    });

    test('returns an empty array if no values are in range', () => {
        const set = new Set([1, 2, 3]);
        expect(getValuesInRange(set, 10, 20)).toEqual([]);
    });

    test('returns all values if the range covers the entire set', () => {
        const set = new Set([5, 10, 15, 20]);
        expect(getValuesInRange(set, 5, 20)).toEqual([5, 10, 15, 20]);
    });

    test('returns values when min and max are the same', () => {
        const set = new Set([0, 5, 10, 15]);
        expect(getValuesInRange(set, 10, 10)).toEqual([10]);
    });

    test('returns an empty array if min is greater than max', () => {
        const set = new Set([5, 10, 15, 20]);
        expect(getValuesInRange(set, 20, 10)).toEqual([]);
    });

    test('returns correct values when range includes negative numbers', () => {
        const set = new Set([-10, -5, 0, 5, 10]);
        expect(getValuesInRange(set, -5, 5)).toEqual([-5, 0, 5]);
    });

    test('returns values that match the boundary values', () => {
        const set = new Set([5, 10, 15, 20]);
        expect(getValuesInRange(set, 5, 15)).toEqual([5, 10, 15]);
        expect(getValuesInRange(set, 20, 20)).toEqual([20]);
    });

    test('handles sets with only boundary values', () => {
        const set = new Set([5]);
        expect(getValuesInRange(set, 5, 5)).toEqual([5]);
        expect(getValuesInRange(set, 4, 6)).toEqual([5]);
    });

    test('handles large sets', () => {
        const largeSet = new Set(Array.from({ length: 1000 }, (_, i) => i)); // Set of 0 to 999
        expect(getValuesInRange(largeSet, 500, 600)).toEqual(Array.from({ length: 101 }, (_, i) => i + 500));
    });
    test('returns an empty array if no float values are in range', () => {
        const floatSet = new Set([1.1, 2.2, 3.3, 4.4, 5.5]);
        expect(getValuesInRange(floatSet, 5.6, 6.0)).toEqual([]);
    });
}); 


