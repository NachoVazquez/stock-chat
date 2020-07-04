import { Test } from '@nestjs/testing';
import { ApiSharedUserDomainUserService } from './api-shared-user-domain-user.service';

describe('ApiSharedUserDomainUserService', () => {
  let service: ApiSharedUserDomainUserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiSharedUserDomainUserService],
    }).compile();

    service = module.get(ApiSharedUserDomainUserService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
