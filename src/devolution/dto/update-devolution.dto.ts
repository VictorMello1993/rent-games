import { PartialType } from '@nestjs/mapped-types';
import { CreateDevolutionDto } from './create-devolution.dto';

export class UpdateDevolutionDto extends PartialType(CreateDevolutionDto) {}
