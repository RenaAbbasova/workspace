module.exports = {
    testEnvironment: 'node',
};

// jest.config.mjs

export default {
    testEnvironment: "jsdom",
    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: ["**/ejer6.js"],
  };
  
  module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['**/ejer7.js'], // Adjust the path as necessary
    testEnvironment: 'jsdom'  // Use jsdom for DOM API compatibility in Jest tests
  };
  
  