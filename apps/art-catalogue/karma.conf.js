const path = require('path');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-junit-reporter'),
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        angularCli: {
            environment: 'test'
        },
        reporters: ['junit', 'progress', 'coverage-istanbul'],
        junitReporter: {
            outputDir: path.join(__dirname, '../../test-results/'), // results will be saved as $outputDir/$browserName.xml
            outputFile: 'results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {}, // key value pair of properties to add to the <properties> section of the report
            xmlVersion: 1 // use '1' if reporting to be per SonarQube 6.2 XML format
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text-summary', 'json-summary', 'cobertura'],
            dir: path.join(__dirname, 'test-results/coverage/opc/'),
            combineBrowserReports: true,
            fixWebpackSourcePaths: true,
            thresholds: {
                emitWarning: true, // set to `true` to not fail the test command when thresholds are not met
                global: {
                    statements: 80,
                    lines: 70,
                    functions: 80
                },
            },
            verbose: false // output config used by istanbul for debugging
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        customLaunchers: {
            CsChromeHeadless: {
                base: 'Chrome',
                debug: true,
                flags: [
                    '--headless',
                    '--disable-gpu',
                    '--no-sandbox',
                    '--remote-debugging-port=9222',
                    '--disable-web-security'
                ],
            },
        },
        browsers: ['CsChromeHeadless', 'Chrome'],
        singleRun: true,
        restartOnFileChange: true
    });
};
