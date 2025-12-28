import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IrrfService } from './irrf.service';
import { CreateIrrfDto } from './dto/create-irrf.dto';
import { UpdateIrrfDto } from './dto/update-irrf.dto';

@Controller('irrf')
export class IrrfController {
  constructor(private readonly irrfService: IrrfService) {}

  @Post()
  create(@Body() createIrrfDto: CreateIrrfDto) {
    return this.irrfService.create(createIrrfDto);
  }

  @Get()
  findAll() {
    return this.irrfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.irrfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIrrfDto: UpdateIrrfDto) {
    return this.irrfService.update(+id, updateIrrfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.irrfService.remove(+id);
  }
}
