module.exports = {
  name: 'client-shared-layout-feature-layout',
  preset: '../../../../../jest.config.js',
  coverageDirectory:
    '../../../../../coverage/libs/client/shared/layout/feature-layout',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
