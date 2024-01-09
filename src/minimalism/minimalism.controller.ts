// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MinimalismService } from './minimalism.service';
import { CreateMinimalismDto } from './dto/create-minimalism.dto';
import { UpdateMinimalismDto } from './dto/update-minimalism.dto';

@Controller('minimalism')
export class MinimalismController {
  constructor(private readonly minimalismService: MinimalismService) {}

  @Post()
  create(@Body() createMinimalismDto: CreateMinimalismDto) {
    return this.minimalismService.create(createMinimalismDto);
  }

  @Get()
  findAll() {
    return this.minimalismService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.minimalismService.findOne(+id);
  }

  @Patch(':id')
  // eslint-disable-next-line prettier/prettier
  update(@Param('id') id: string, @Body() updateMinimalismDto: UpdateMinimalismDto) {
    return this.minimalismService.update(+id, updateMinimalismDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.minimalismService.remove(+id);
  }
}
