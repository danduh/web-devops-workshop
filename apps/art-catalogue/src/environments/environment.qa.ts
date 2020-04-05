const envVar = require('./base.environment.json');

export const environment = function() {
    return {
        production: false,
        authUrl: 'http://some-qa.url',
        mainTitle: 'QA',
        envVar
    };
}();
