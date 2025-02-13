import {ReportGenerator, HtmlReporter} from 'wdio-html-nice-reporter';
let reportAggregator: ReportGenerator;

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    framework: 'jasmine',
    reporters: ['spec']
}
