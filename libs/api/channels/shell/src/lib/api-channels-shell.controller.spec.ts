import { Test } from '@nestjs/testing';
import { ApiChannelsShellController } from './api-channels-shell.controller';

describe('ApiChannelsShellController', () => {
  let controller: ApiChannelsShellController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiChannelsShellController],
    }).compile();

    controller = module.get(ApiChannelsShellController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
