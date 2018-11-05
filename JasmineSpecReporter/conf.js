let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    directConnect: true,
    specs: ['./specs/testData.spec.js'],
    capabilities: {
      browserName: 'chrome'
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
            displayStacktrace: true,
            displayDuration: true
          },
          summary: {
            displayDuration: true,
            displayFailed: true,
            displayPending: true,
          }
        }))}
  };