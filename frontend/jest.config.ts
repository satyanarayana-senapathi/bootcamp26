export default {
  transform: {
    ".+\\.(css|scss|png|jpg|svg|webp)$": "jest-transform-stub",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
};
