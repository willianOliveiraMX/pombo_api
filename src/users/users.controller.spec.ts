import { Test } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('Users controller test', () => {
  let usersController: UsersController;

  const mockUserData = {
    id: 1,
    name: 'Jon Do',
    updatedat: null,
    createdat: null,
    isvalid: true,
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn(() => {
              const usersList = [mockUserData];
              return Promise.resolve(usersList);
            }),
            findOne: jest.fn(() => {
              return Promise.resolve(mockUserData);
            }),
            create: jest.fn((createUserDto: CreateUserDto) => {
              return Promise.resolve({
                id: 2,
                name: createUserDto.name,
                createdat: new Date(),
                updatedat: null,
                isvalid: true,
              });
            }),
            update: jest.fn((id: string, updateUserDto: UpdateUserDto) => {
              return Promise.resolve({
                ...mockUserData,
                ...updateUserDto,
              });
            }),
          },
        },
      ],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
  });

  it('Should return an array of users', async () => {
    expect(await usersController.findAll()).toEqual([mockUserData]);
  });

  it('Should return one user', async () => {
    expect(await usersController.findOne('1')).toEqual(mockUserData);
  });

  it('Should create a new user', async () => {
    const mockUserName = 'Jon super teste';
    const mockCreatedUser = {
      id: 2,
      name: mockUserName,
      createdat: new Date(),
      updatedat: null,
      isvalid: true,
    };
    expect(
      await usersController.create({
        name: mockUserName,
        createdat: '',
      }),
    ).toEqual(mockCreatedUser);
  });

  it('Should update a user', async () => {
    expect(
      await usersController.update('1', {
        id: 1,
        name: 'Ernesto pi',
      }),
    ).toEqual({
      id: 1,
      name: 'Ernesto pi',
      updatedat: null,
      createdat: null,
      isvalid: true,
    });
  });
});
