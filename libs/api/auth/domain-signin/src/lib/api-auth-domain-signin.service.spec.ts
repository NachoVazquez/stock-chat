import { Test } from '@nestjs/testing';
import { ApiAuthDomainSigninService } from './api-auth-domain-signin.service';

describe('ApiAuthDomainSigninService', () => {
  let service: ApiAuthDomainSigninService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiAuthDomainSigninService],
    }).compile();

    service = module.get(ApiAuthDomainSigninService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
