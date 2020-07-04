import { Test } from '@nestjs/testing';
import { ApiUserShellController } from './user.controller';

describe('ApiUserShellController', () => {
  let controller: ApiUserShellController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiUserShellController],
    }).compile();

    controller = module.get(ApiUserShellController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
