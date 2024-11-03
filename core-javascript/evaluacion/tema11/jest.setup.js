
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'mocked data' }) // Mocked response data
    })
);

require('jest-fetch-mock').enableMocks();

