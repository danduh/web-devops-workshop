module.exports = {
  name: 'angular-cypress-unit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-cypress-unit',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
