import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';


@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post('cars')
  createCars() {
    return this.seedService.pupulateCarsDB();
  }
  @Post('brands')
  createBrands() {
    return this.seedService.pupulateBrandsDB();
  }
}
