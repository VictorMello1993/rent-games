import { Injectable } from '@nestjs/common';

@Injectable()
export class DevolutionUseCase {
  create(createDevolutionDto: CreateDevolutionDto) {
    return 'This action adds a new devolution';
  }

  findAll() {
    return `This action returns all devolution`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devolution`;
  }

  update(id: number, updateDevolutionDto: UpdateDevolutionDto) {
    return `This action updates a #${id} devolution`;
  }

  remove(id: number) {
    return `This action removes a #${id} devolution`;
  }
}
