import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuidv4 } from 'uuid';
import { Brand  } from './interfaces/brand.interface';
@Injectable()
export class BrandsService {
  private brands: Brand[]=[];

  create({brand}: CreateBrandDto):Brand {
    const newBrand:Brand = {
      id: uuidv4(),
      brand: brand
    };
    this.brands.push(newBrand);

    return newBrand;
  }

  findAll():Brand[] {
    return this.brands
  }

  findOne(id:string):Brand {
    const brand = this.brands.find( (brands) => brands.id == id );
    if(!brand) throw new NotFoundException('El Elemento no fue encontrado');
    return brand;
  }

  update(id:string, {brand}: UpdateBrandDto):Brand {
    const car:Brand =  this.findOne(id);
    car.brand = brand;
    return car;
  }

  remove(id: string) {
    const car = this.findOne(id);
    this.brands = this.brands.filter( (brand) => {
        return brand.id != id 
    });
  }

  popullateBrands(brands: Brand[]){
    this.brands = brands;
  }
}
