const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const yargs = require('yargs');

class EnvProcessor {
    baseJson;
    baseFilePath;
    options;

    constructor() {
        this.checkOptions();
    }

    checkOptions() {
        this.options = yargs
            .usage('Usage: -app <app name in angular.json>')
            .option('app', { describe: 'The App name in angular.json', type: 'string', demandOption: true })
            .option('config', {
                describe: 'The configuration name in angular json',
                type: 'string',
                demandOption: true
            })
            .option('baseJson', {
                describe: 'Path to basic json with env. If not provied will look for base.environment.json in same place where is your environment.ts',
                type: 'string',
                demandOption: false
            })
            .argv;
    }

    lookForBaseJsonPathInNG() {
        const angularJson = JSON.parse(fs.readFileSync('./angular.json'));
        const fileReplacements = angularJson.projects[this.options.app].architect.build.configurations[this.options.config].fileReplacements;
        let envPath;
        for (let i = 0; i < fileReplacements.length; i++) {
            const repls = fileReplacements[i].replace.split('/');
            if (repls.pop() === 'environment.ts') {
                envPath = repls.join('/');
                break;
            }
        }
        return envPath;
    }

    loadBaseJson() {
        if (!this.options.hasOwnProperty('baseJson')) {
            let pathToFile = this.lookForBaseJsonPathInNG();
            this.baseFilePath = path.join(__dirname, pathToFile, 'base.environment.json');
        } else {
            this.baseFilePath = path.join(__dirname, this.options.baseJson);
        }

        if (fs.existsSync(this.baseFilePath)) {
            let rawdata = fs.readFileSync(this.baseFilePath);
            this.baseJson = JSON.parse(rawdata);
        } else {
            console.error(chalk.red(`Can't find the base json file. looking at => ${this.baseFilePath}`));
            process.exit(1);
        }
    }

    mapEnvironmentVars() {
        const vars = Object.keys(process.env);
        vars.forEach((e) => {
            if (this.baseJson.hasOwnProperty(e)) {
                this.baseJson[e] = process.env[e];
            }
        });
    }

    updateJson() {
        fs.writeFileSync(this.baseFilePath, JSON.stringify(this.baseJson, 4), 'utf8');
    }

    run() {
        this.loadBaseJson();
        this.mapEnvironmentVars();
        this.updateJson();
    }
}

let proc = new EnvProcessor();
proc.run();



