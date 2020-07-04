import { Test } from '@nestjs/testing';
import { ApiAuthDomainSignupService } from './api-auth-domain-signup.service';

describe('ApiAuthDomainSignupService', () => {
  let service: ApiAuthDomainSignupService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiAuthDomainSignupService],
    }).compile();

    service = module.get(ApiAuthDomainSignupService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
