module.exports = {
  name: 'client-stock-chat-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/client/stock-chat/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
