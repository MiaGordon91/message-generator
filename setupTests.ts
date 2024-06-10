
// Mock implementation of import.meta.env
const mockEnv = {
  VITE_SERVER_URL: 'http://example.com', // Example mocked value for VITE_SERVER_URL
};

// Mock import.meta.env
Object.defineProperty(global, 'import.meta', {
    value: { env: mockEnv },
  });

export {};