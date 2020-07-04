import { Test } from '@nestjs/testing';
import { ApiAuthFeatureSignupController } from './api-auth-feature-signup.controller';

describe('ApiAuthFeatureSignupController', () => {
  let controller: ApiAuthFeatureSignupController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiAuthFeatureSignupController],
    }).compile();

    controller = module.get(ApiAuthFeatureSignupController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
