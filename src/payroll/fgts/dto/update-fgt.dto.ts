import { PartialType } from '@nestjs/mapped-types';
import { CreateFgtDto } from './create-fgt.dto';

export class UpdateFgtDto extends PartialType(CreateFgtDto) {}
