module.exports = {
  name: 'client-shared-layout-ui-topbar',
  preset: '../../../../../jest.config.js',
  coverageDirectory:
    '../../../../../coverage/libs/client/shared/layout/ui-topbar',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
