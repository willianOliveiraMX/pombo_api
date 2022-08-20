import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { PlatformsController } from './platforms.controller';
import { PlatformsService } from './platforms.service';

describe('PlatformsController', () => {
  let controller: PlatformsController;

  beforeEach(async () => {
    const actualDate = new Date();

    const mockWorkspace = {
      id: 1,
      name: 'New place',
      description: 'lorem inpsum',
      updatedat: null,
      createdat: null,
      isvalid: true,
      created_by: 1,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PlatformsService,
          useValue: {
            findAll: jest.fn(() => {
              const usersList = [mockWorkspace];
              return Promise.resolve(usersList);
            }),
            findOne: jest.fn(() => {
              return Promise.resolve(mockWorkspace);
            }),
            create: jest.fn((createDto: CreatePlatformDto) => {
              return Promise.resolve({
                id: 2,
                name: createDto.name,
                createdat: actualDate,
                updatedat: null,
                isvalid: true,
              });
            }),
            update: jest.fn((id: string, updateDto: UpdatePlatformDto) => {
              return Promise.resolve({
                ...mockWorkspace,
                ...updateDto,
              });
            }),
          },
        },
      ],
      controllers: [PlatformsController],
    }).compile();

    controller = module.get<PlatformsController>(PlatformsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
