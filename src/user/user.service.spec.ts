import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Crete new User', async () => {
    const user = await service.create({
      userName: 'waleed',
      password: 'passw0rd',
      refreshToken: '',
    });
    console.log(user);
    // expect(service).toBeDefined();
  });
});
