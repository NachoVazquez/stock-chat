import { Test } from '@nestjs/testing';
import { ApiChatEngineShellController } from './api-chat-engine-shell.controller';

describe('ApiChatEngineShellController', () => {
  let controller: ApiChatEngineShellController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiChatEngineShellController],
    }).compile();

    controller = module.get(ApiChatEngineShellController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
