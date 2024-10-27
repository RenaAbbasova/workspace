const { formatearMS, startTimer, toggleTimer, timerState } = require('./ejer9'); // Adjust the path if necessary

describe('formatearMS', () => {
    test('formats milliseconds correctly to MM:SS', () => {
        expect(formatearMS(0)).toBe('00:00');
        expect(formatearMS(1000)).toBe('00:01'); // 1 second
        expect(formatearMS(60000)).toBe('01:00'); // 1 minute
        expect(formatearMS(61000)).toBe('01:01'); // 1 minute, 1 second
        expect(formatearMS(10 * 60 * 1000)).toBe('10:00'); // 10 minutes
    });

    test('handles leading zeros correctly', () => {
        expect(formatearMS(5000)).toBe('00:05'); // 5 seconds
        expect(formatearMS(5 * 60 * 1000)).toBe('05:00'); // 5 minutes
    });

    test('handles large numbers correctly', () => {
        expect(formatearMS(3600 * 1000)).toBe('00:00'); // 1 hour (MM:SS reset to 00:00)
    });
});

describe('Timer Interaction', () => {
    let mockTiempoElement;

    beforeEach(() => {
        // Set up the mock DOM element
        mockTiempoElement = document.createElement('div');
        mockTiempoElement.id = 'tiempo';
        document.body.appendChild(mockTiempoElement);

        // Initialize variables
        timerState.cronometrar = true;
        tiempoRef = Date.now();
        acumulado = 0;

        jest.useFakeTimers(); // Enable fake timers
    });

    afterEach(() => {
        document.body.removeChild(mockTiempoElement);
        jest.useRealTimers(); // Reset to real timers after test
    });
    

    
    test('click event toggles cronometrar', () => {
        startTimer(); // Start the timer to attach the click listener

        // Simulate click to stop the timer
        mockTiempoElement.click();
        expect(timerState.cronometrar).toBe(false);

        // Simulate another click to start the timer
        mockTiempoElement.click();
        expect(timerState.cronometrar).toBe(true);
    }); 

     

    test('startTimer should return early if tiempo element is missing', () => {
        // Mock the tiempo element to return null
        document.getElementById = jest.fn(() => null);

        // Mock setInterval as a spy
        const setIntervalSpy = jest.spyOn(global, 'setInterval');

        // Call startTimer
        startTimer();

        // Ensure that setInterval was never called
        expect(setIntervalSpy).not.toHaveBeenCalled();

        // Restore the spy
        setIntervalSpy.mockRestore();
    });

    test('toggleTimer correctly updates timer state', () => {
        timerState.cronometrar = true;
        toggleTimer(); // Stop the timer
        expect(timerState.cronometrar).toBe(false);

        toggleTimer(); // Start the timer
        expect(timerState.cronometrar).toBe(true);
    });
}); 





    
    



