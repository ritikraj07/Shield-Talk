// Importing ts-jest's preset creator to handle TypeScript files smoothly
import { createDefaultPreset } from 'ts-jest';

// Getting the default transform config from ts-jest (for .ts files)
const tsJestTransformCfg = createDefaultPreset().transform;

/** 
 * Jest Configuration
 * This tells Jest how to run and process your TypeScript tests 
 */
const config: import('jest').Config = {
  // Use Node.js as the test environment (good for backend apps)
  testEnvironment: 'node',

  // Use ts-jest's default way to transform TypeScript files
  transform: {
    ...tsJestTransformCfg,
  },

  // OPTIONAL: add paths to test files (default looks for .test.ts/.spec.ts anywhere)
  // testMatch: ['**/__tests__/**/*.test.ts'],

  // OPTIONAL: collect coverage reports (can be turned on as needed)
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
};

// Exporting the config as default (needed for TypeScript-based config files)
export default config;
