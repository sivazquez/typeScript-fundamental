import { Body, Controller, Delete, Get, Param,ParseUUIDPipe,Patch,Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Controller('cars')
export class CarsController {
    constructor(
        private readonly carsService: CarsService
    ){}
    @Get()
    index(){
        return this.carsService.findAll();
    }
    @Get(':id')
    getByID(@Param('id', ParseUUIDPipe) id:string){
        return this.carsService.findOneById(id);
    }

    @Post()
    // ? use de pipe en method of controller
    //? @UsePipes(ValidationPipe)
    save(@Body() request:CreateCarDTO){
        return this.carsService.save(request);
    }

    @Patch(':id')
    modify(@Param('id', ParseUUIDPipe) id:string, @Body() request:UpdateCarDTO){
        return this.carsService.update(id, request);
    }

    @Delete(':id')
    deleted(@Param('id',ParseUUIDPipe) id:string){
        return this.carsService.deleted(id);
    }

}
