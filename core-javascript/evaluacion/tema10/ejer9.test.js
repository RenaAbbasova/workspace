const { formatearMS } = require('./ejer9');



describe('Timer Functionality Tests', () => {
    // Test the format of the formatearMS function
    test('Correctly formats milliseconds to MM:SS', () => {
        // Test 0 milliseconds
        expect(formatearMS(0)).toBe('00:00');

        // Test 30 seconds (30000 ms)
        expect(formatearMS(30000)).toBe('00:30');

        // Test 1 minute (60000 ms)
        expect(formatearMS(60000)).toBe('01:00');

        // Test 1 minute and 30 seconds (90000 ms)
        expect(formatearMS(90000)).toBe('01:30');

        // Test 2 minutes (120000 ms)
        expect(formatearMS(120000)).toBe('02:00');

        // Test edge case: 1 second before 1 minute (59999 ms)
        expect(formatearMS(59999)).toBe('00:59');
    });
});
