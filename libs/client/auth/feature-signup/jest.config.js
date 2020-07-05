module.exports = {
  name: 'client-auth-feature-signup',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/client/auth/feature-signup',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
