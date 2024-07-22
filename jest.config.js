const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(config);
