"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing ts-jest's preset creator to handle TypeScript files smoothly
const ts_jest_1 = require("ts-jest");
// Getting the default transform config from ts-jest (for .ts files)
const tsJestTransformCfg = (0, ts_jest_1.createDefaultPreset)().transform;
/**
 * Jest Configuration
 * This tells Jest how to run and process your TypeScript tests
 */
const config = {
    // Use Node.js as the test environment (good for backend apps)
    testEnvironment: 'node',
    // Use ts-jest's default way to transform TypeScript files
    transform: Object.assign({}, tsJestTransformCfg),
    // OPTIONAL: add paths to test files (default looks for .test.ts/.spec.ts anywhere)
    // testMatch: ['**/__tests__/**/*.test.ts'],
    // OPTIONAL: collect coverage reports (can be turned on as needed)
    // collectCoverage: true,
    // coverageDirectory: 'coverage',
};
// Exporting the config as default (needed for TypeScript-based config files)
exports.default = config;
//# sourceMappingURL=jest.config.js.map