import { Injectable } from '@nestjs/common';
import { CreateMinimalismDto } from './dto/create-minimalism.dto';
import { UpdateMinimalismDto } from './dto/update-minimalism.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Minimalism, MinimalismDocument } from './schemas/minimalism.schema';

@Injectable()
export class MinimalismService {
  constructor(
    @InjectModel(Minimalism.name)
    private minimalismModel: Model<MinimalismDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createMinimalismDto: CreateMinimalismDto) {
    return 'This action adds a new minimalism';
  }

  findAll() {
    return `This action returns all minimalism`;
  }

  findOne(id: number) {
    return `This action returns a #${id} minimalism`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateMinimalismDto: UpdateMinimalismDto) {
    return `This action updates a #${id} minimalism`;
  }

  remove(id: number) {
    return `This action removes a #${id} minimalism`;
  }
}
