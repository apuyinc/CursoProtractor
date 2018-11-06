exports.config = {
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['calculatorV2.spec.js'],
    capabilities: {
      browserName: 'chrome'
    }
  };