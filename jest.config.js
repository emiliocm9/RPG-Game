
module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  "setupFiles": [
    "jest-canvas-mock"
  ],
};