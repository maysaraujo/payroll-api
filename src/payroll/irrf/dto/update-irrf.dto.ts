import { PartialType } from '@nestjs/mapped-types';
import { CreateIrrfDto } from './create-irrf.dto';

export class UpdateIrrfDto extends PartialType(CreateIrrfDto) {}
