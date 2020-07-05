module.exports = {
  name: 'client-chat-feature-channels',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/client/chat/feature-channels',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
