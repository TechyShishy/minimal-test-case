import { PartialType } from '@nestjs/mapped-types';
import { CreateMinimalismDto } from './create-minimalism.dto';

export class UpdateMinimalismDto extends PartialType(CreateMinimalismDto) {}
