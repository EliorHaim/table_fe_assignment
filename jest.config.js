// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Ensure jest.setup.js is included
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        // Handle module aliases (if any) defined in jsconfig.json or next.config.js
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    collectCoverage: true, // Enable coverage reports
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/.next/**',
        '!jest.config.js',
    ],
};

module.exports = createJestConfig(customJestConfig);
