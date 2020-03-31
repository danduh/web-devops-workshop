const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'jest-preset-angular',
    roots: ['apps/art-catalogue/src'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['./apps/art-catalogue/src/test.ts'],
    collectCoverage: true,
    coverageReporters: ['html'],
    reporters: [
        'default',
        ['jest-html-reporters', { 'publicPath': 'test-results/html-report' }]
    ],
    coverageDirectory: 'test-results/coverage',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: 'apps/art-catalogue/'
    }),
    globals: {
        'ts-jest': {
            tsConfig: 'apps/art-catalogue/tsconfig.spec.json',
            diagnostics: false
        }
    }
};
