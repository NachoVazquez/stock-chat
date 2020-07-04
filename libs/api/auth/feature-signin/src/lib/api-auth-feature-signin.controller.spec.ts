import { Test } from '@nestjs/testing';
import { ApiAuthFeatureSigninController } from './api-auth-feature-signin.controller';

describe('ApiAuthFeatureSigninController', () => {
  let controller: ApiAuthFeatureSigninController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiAuthFeatureSigninController],
    }).compile();

    controller = module.get(ApiAuthFeatureSigninController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
