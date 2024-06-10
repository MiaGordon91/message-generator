/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta',  // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: { metaObjectReplacement: { url: 'https://www.url.com' } }
            }
          ]
        }
      }
    ],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '__mocks__'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};