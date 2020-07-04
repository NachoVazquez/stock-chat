module.exports = {
  name: 'stock-chat',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/stock-chat',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
