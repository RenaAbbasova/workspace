global.TextDecoder = require('util').TextDecoder;

// Import the functions to test
const { fetchData, displayContent, displayError, setupEventListeners } = require('./ejer7');

// Mock the global fetch API
global.fetch = jest.fn();

describe('fetchData', () => {
    let consoleErrorMock;

    // Setup before any tests run
    beforeAll(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    // Cleanup after all tests are done
    afterAll(() => {
        console.log.mockRestore();
        consoleErrorMock.mockRestore();
    });

    // Prepare the DOM before each test
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="article-content"></div>
            <button id="fetch-button">Fetch Article</button>
            <input id="article-id" value="1" />
        `;
        setupEventListeners(); // Set up event listeners for the button
    });

    // Clear the fetch mock after each test
    afterEach(() => {
        fetch.mockClear();
    });

    // Test for successful data fetch
    test('fetches data successfully for a valid article ID (1)', async () => {
        const mockData = { title: 'Sample Title', body: 'Sample content' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        await fetchData(1);
        expect(document.getElementById('article-content').innerHTML).toContain(mockData.title);
    });

    // Test for HTTP error
    test('handles HTTP error gracefully for article ID 9999', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 404,
        });

        await fetchData(9999);
        expect(document.getElementById('article-content').innerHTML).toContain('Error HTTP: 404');
    });

    // Test for network error
    test('handles network error gracefully when fetching data', async () => {
        fetch.mockRejectedValueOnce(new Error('Network Error'));

        await fetchData(1);
        expect(document.getElementById('article-content').innerHTML).toContain('Error de red');
    });


    // Test for displayContent function
    test('displayContent updates the DOM correctly', () => {
        const mockData = { title: 'Sample Title', body: 'Sample content' };
        displayContent(mockData);
        expect(document.getElementById('article-content').innerHTML).toContain(mockData.title);
    });

    // Test for displayError function
    test('displayError updates the DOM with an error message', () => {
        const errorMessage = 'Error de red';
        displayError(errorMessage);
        expect(document.getElementById('article-content').innerHTML).toContain(errorMessage);
    });

    // Test to check if clicking the button fetches the correct article
    test('fetches data when button is clicked', async () => {
        const mockData = { title: 'Clicked Title', body: 'Clicked content' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        // Simulate clicking the button
        document.getElementById('fetch-button').click();
        
        // Wait for the fetchData to resolve
        await fetchData(document.getElementById('article-id').value);
        
        // Check that displayContent is called with the right data
        expect(document.getElementById('article-content').innerHTML).toContain(mockData.title);
    });

    // Test to check if initial data fetch is called
    test('initial fetchData call on page load', async () => {
        const mockData = { title: 'Initial Title', body: 'Initial content' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        // Trigger the initial fetch
        await fetchData(1);
        
        // Check that the content div was updated
        expect(document.getElementById('article-content').innerHTML).toContain(mockData.title);
    });
    // This test will specifically cover the lines you're interested in
    test('setupEventListeners and fetchData(1) are called on DOMContentLoaded', async () => {
        // Mock the fetch response
        const mockData = { title: 'Initial Title', body: 'Initial content' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        // Simulate DOMContentLoaded event to trigger the setup
        document.dispatchEvent(new Event('DOMContentLoaded'));

        // Verify that fetchData was called with the initial value of 1
        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');

        // Check that the content div was updated with the mock data
        await fetchData(1);
        expect(document.getElementById('article-content').innerHTML).toContain(mockData.title);
    });   
});  







  
    





