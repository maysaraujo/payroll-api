import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InssService } from './inss.service';
import { CreateInssDto } from './dto/create-inss.dto';
import { UpdateInssDto } from './dto/update-inss.dto';

@Controller('inss')
export class InssController {
  constructor(private readonly inssService: InssService) {}

  @Post()
  create(@Body() createInssDto: CreateInssDto) {
    return this.inssService.create(createInssDto);
  }

  @Get()
  findAll() {
    return this.inssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inssService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInssDto: UpdateInssDto) {
    return this.inssService.update(+id, updateInssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inssService.remove(+id);
  }
}
