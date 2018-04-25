//jshint strict: false
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,

  sauceKey: process.env.SAUCE_ACCESS_KEY,

  // testobject_api_key: '59CE6AD64AE24CC5B1451EB76B833F2E',
  sauceBuild: "angular-pipeline-demo: " + process.env.BRANCH_NAME + "-" + process.env.BUILD_NUMBER,

  allScriptsTimeout: 11000,

  specs: [
    'scenarios.js'
  ],

  onPrepare: function () {
        var caps = browser.getCapabilities()
        console.log(caps)
    },

  multiCapabilities: [{
        browserName: 'firefox',
        version: 'latest',
        platform: 'OS X 10.10',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    },{
        browserName: 'firefox',
        version: 'latest',
        platform: 'Windows 7',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }
  ],

  // capabilities: {
  //   'browserName': 'chrome'
  // },

  baseUrl: 'http://localhost:7225/index.html',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onComplete: function () {

      var printSessionId = function (jobName) {
          browser.getSession().then(function (session) {
              console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
          });
      }
      printSessionId("Angular/Protractor Demo Test Suite");
  }
};
