import { Test, TestingModule } from '@nestjs/testing';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { WorkspacesController } from './workspaces.controller';
import { WorkspacesService } from './workspaces.service';

describe('WorkspacesController', () => {
  let controller: WorkspacesController;
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkspacesController],
      providers: [
        {
          provide: WorkspacesService,
          useValue: {
            findAll: jest.fn(() => {
              const usersList = [mockWorkspace];
              return Promise.resolve(usersList);
            }),
            findOne: jest.fn(() => {
              return Promise.resolve(mockWorkspace);
            }),
            create: jest.fn((createDto: CreateWorkspaceDto) => {
              return Promise.resolve({
                id: 2,
                name: createDto.name,
                createdat: actualDate,
                updatedat: null,
                isvalid: true,
              });
            }),
            update: jest.fn((id: string, updateDto: UpdateWorkspaceDto) => {
              return Promise.resolve({
                ...mockWorkspace,
                ...updateDto,
              });
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<WorkspacesController>(WorkspacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should return an array', async () => {
    expect(await controller.findAll()).toEqual([mockWorkspace]);
  });

  it('Should return', async () => {
    expect(await controller.findOne('1')).toEqual(mockWorkspace);
  });

  it('Should create', async () => {
    const mockName = 'Jon super teste';
    const mockCreatedUser = {
      id: 2,
      name: mockName,
      createdat: actualDate,
      updatedat: null,
      isvalid: true,
    };
    expect(
      await controller.create({
        name: mockName,
        created_by: '1',
        description: '',
      }),
    ).toEqual(mockCreatedUser);
  });

  it('Should update', async () => {
    expect(
      await controller.update('1', {
        id: 1,
        name: 'Ernesto pi',
        description: '',
      }),
    ).toEqual({
      id: 1,
      name: 'Ernesto pi',
      updatedat: null,
      createdat: null,
      isvalid: true,
      description: '',
      created_by: 1,
    });
  });
});
