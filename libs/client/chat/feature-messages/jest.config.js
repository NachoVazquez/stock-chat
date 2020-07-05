module.exports = {
  name: 'client-chat-feature-messages',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/client/chat/feature-messages',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
