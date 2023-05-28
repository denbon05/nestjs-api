import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from 'src/users/users.service';

describe('UsersService', () => {
  let service: UsersService;
  const mockHttpService = {
    get: jest.fn().mockResolvedValue({
      data: [
        // Mocked response data
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
      ],
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
