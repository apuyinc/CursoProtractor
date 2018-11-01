exports.config = {
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    /*specs: ['./OtroSpecFile.spec.js',
            './FicheroConfJS.spec.js'],*/
    suites: {
      smoke: './smoke/*.js'
    },
    framework           : 'jasmine2',
    capabilities: {
      
      browserName: 'chrome',
      /*chromeOptions: {
        args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
      }*/
      //browserName: 'firefox'
    },
    /*onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    },*/
    params: {
      texto: "Capitole Consulting"
      //se puede sobreescribir en linea de comandos: protractor conf.js --params.texto="Jose Luis"
    }
  };