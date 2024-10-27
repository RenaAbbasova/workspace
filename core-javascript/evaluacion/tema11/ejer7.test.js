// ejer7.test.js

// Import the functions you want to test
const { fetchData, displayContent, displayError } = require('./ejer7');

// Mock the global fetch API
global.fetch = jest.fn();

describe('fetchData', () => {
  
 
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});    // Suppresses console.log
    jest.spyOn(console, 'error').mockImplementation(() => {});  // Suppresses console.error
  });

  afterAll(() => {
    console.log.mockRestore();    // Restores original console.log
    console.error.mockRestore();  // Restores original console.error
  });

  // Setup a mock DOM environment before each test
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="article-content"></div>
      <button id="fetch-button">Fetch Article</button>
      <input id="article-id" value="1" />
    `;

    
    require('./ejer7').setupEventListeners(); // Make sure this matches your export structure
  });

  // Cleanup mocks after each test
  afterEach(() => {
      fetch.mockClear(); // Clear mock calls after each test
  });

  // Success scenario with mock data
  test('fetches data successfully for a valid article ID (1)', async () => {
    const mockData = { title: 'Sample Title', body: 'Sample content' };
    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockData,
    });

    await fetchData(1);
    expect(document.getElementById('article-content').innerHTML)
      .toContain(mockData.title);
  });

  // Failure scenario (HTTP error response)
  test('handles HTTP error gracefully for article ID 9999', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await fetchData(9999);
    expect(document.getElementById('article-content').innerHTML)
      .toContain('Error HTTP: 404');
  });

  // Network failure scenario
  test('handles network error gracefully when fetching data', async () => {
    fetch.mockRejectedValueOnce(new Error('Network Error'));

    await fetchData(1);
    expect(document.getElementById('article-content').innerHTML)
      .toContain('Error de red');
  });

  // Test for displayContent
  test('displayContent updates the DOM correctly', () => {
    const mockData = { title: 'Sample Title', body: 'Sample content' };
    displayContent(mockData);
    expect(document.getElementById('article-content').innerHTML).toContain(mockData.title);
  });

  // Test for displayError
  test('displayError updates the DOM with an error message', () => {
    const errorMessage = 'Error de red';
    displayError(errorMessage);
    expect(document.getElementById('article-content').innerHTML).toContain(errorMessage);
  });
});


