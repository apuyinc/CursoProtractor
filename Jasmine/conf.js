exports.config = {
    directConnect: true,
    specs: ['./jasmine.spec.js'],

    suites: {
      jasmine: './jasmine.spec.js',
      otherTests: ['./Calculator/*.js', 
              './MiPrimerTest/*.js']
    },

    capabilities: {
      browserName: 'chrome'
    }
  };