module.exports = {
  name: "web-devops-workshop",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/web-devops-workshop/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
