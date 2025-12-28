import { PartialType } from '@nestjs/mapped-types';
import { CreateInssDto } from './create-inss.dto';

export class UpdateInssDto extends PartialType(CreateInssDto) {}
