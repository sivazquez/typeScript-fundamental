import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import {CARSSEED} from '../seed/seeds/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import {BRANDSSEED} from '../seed/seeds/brands.seed';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService
  ){}
  pupulateCarsDB() {
    this.CarsService.popullateCars(CARSSEED);
  }

  pupulateBrandsDB() {
    this.BrandsService.popullateBrands(BRANDSSEED);
  }
}
