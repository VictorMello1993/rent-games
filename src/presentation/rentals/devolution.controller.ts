// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// @Controller('devolution')
// export class DevolutionController {
//   constructor(private readonly devolutionService: DevolutionService) {}

//   @Post()
//   create(@Body() createDevolutionDto: CreateDevolutionDto) {
//     return this.devolutionService.create(createDevolutionDto);
//   }

//   @Get()
//   findAll() {
//     return this.devolutionService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.devolutionService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateDevolutionDto: UpdateDevolutionDto) {
//     return this.devolutionService.update(+id, updateDevolutionDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.devolutionService.remove(+id);
//   }
// }
