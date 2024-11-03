const { fetchData, displayContent } = require('./ejer6');
global.fetch = require('jest-fetch-mock');

describe('fetchData', () => {
    beforeEach(() => {
        fetch.resetMocks();
        jest.clearAllMocks();
    });

    test('should log status and call displayContent on successful response', async () => {
        // Mock a successful fetch response
        fetch.mockResponseOnce(JSON.stringify({ id: 1, title: 'Mock title', body: 'Mock body' }), { status: 200 });
        
        // Mock console.log and console.error
        console.log = jest.fn();
        console.error = jest.fn();

        // Spy on displayContent
        const displayContent = jest.fn();
        
        // Call fetchData with displayContent as a parameter
        await fetchData(displayContent);

        // Verify the status is logged
        expect(console.log).toHaveBeenCalledWith('Status de la petición:', 200);

        // Verify displayContent was called with the correct data
        expect(displayContent).toHaveBeenCalledWith({ id: 1, title: 'Mock title', body: 'Mock body' });
    });

    test('should log an error when response is not ok', async () => {
        // Mock a failed fetch response
        fetch.mockResponseOnce('', { status: 404 });

        console.log = jest.fn();
        console.error = jest.fn();

        await fetchData();

        expect(console.log).toHaveBeenCalledWith('Status de la petición:', 404);
        expect(console.error).toHaveBeenCalledWith('Error HTTP:', 404);
    });

    test('should log network error on fetch failure', async () => {
        // Mock a network error
        fetch.mockRejectOnce(new Error('Network Error'));

        console.log = jest.fn();
        console.error = jest.fn();

        await fetchData();

        expect(console.error).toHaveBeenCalledWith('Error de red:', new Error('Network Error'));
    });
    test('should handle unexpected JSON structure', async () => {
        // Mock a response with unexpected structure
        fetch.mockResponseOnce(JSON.stringify({ unexpected: 'data' }), { status: 200 });
    
        const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
        // Call the function
        await fetchData();
    
        // Expect console.error to be called with 'Content div not found' if displayContent is called
        expect(consoleError).toHaveBeenCalledWith('Content div not found');
    
        // Restore the console.error function
        consoleError.mockRestore();
    });
    
    
}); 


describe('displayContentOriginal', () => {
    test('should display content correctly when valid data is provided', () => {
        // Set up the mock DOM
        document.body.innerHTML = '<div id="article-content"></div>'; // Ensure the div is in the DOM
        const validData = { id: 1, title: 'Test Title', body: 'Test Body' };

        // Call the function to display content
        displayContent(validData); // Call displayContent directly

        // Check that the inner HTML was set correctly
        const contentDiv = document.getElementById('article-content');
        expect(contentDiv.innerHTML).toBe(`<pre>${JSON.stringify(validData, null, 2)}</pre>`);
    });
});

 




