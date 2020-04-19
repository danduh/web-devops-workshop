// jest.config.js
module.exports = {
    moduleFileExtensions: [
        "js",
        "json",
        "ts"
    ],
    // moduleNameMapper: {
    //     "@api-interfaces": "<rootDir>/../../../libs/api-interfaces"
    // },
    rootDir: "src",
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.spec.json'
        }
    },
    coverageReporters: ['html', 'lcovonly', 'text-summary', 'json-summary', 'cobertura'],
    "testRegex": ".spec.ts$",
    "transform": {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    "coverageDirectory": "../../../test-results/coverage/art-api/",
    "testEnvironment": "node"
};
