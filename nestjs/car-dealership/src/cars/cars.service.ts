import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {
 
    private cars:Car[] = [
        // {
        //     id: uuidv4(),
        //     brand: "Toyota",
        //     model: "Hilux"
        // },
        // {
        //     id:uuidv4(),
        //     brand: "Nissan",
        //     model:"Versa"
        // },
        // {
        //     id:uuidv4(),
        //     brand:"Mazda",
        //     model: "Mazda 2"
        // }
    ];

    findAll(){
        return this.cars;
    }

    findOneById( id:string){
        const car =  this.cars.find( car => car.id === id);
        
        if( !car) throw new NotFoundException('El Elemento no fue encontrado');

        return car;
    }

    save( {model, brand}: CreateCarDTO):CreateCarDTO{
        const car:Car = {
            id:uuidv4(),
            brand,
            model
        }
        this.cars.push(car);
        return car;
    }

    update( 
        id:string, 
        {model,brand}: UpdateCarDTO) {
        const car = this.cars.find( (e) =>{
            if(e.id === id){
                e.brand = brand;
                e.model = model
            }
            return e;
        });
        return car;
    }

    deleted(id: string){
        this.findOneById(id);
        this.cars.splice(this.cars.findIndex(d => d.id === id), 1);
    }   

    popullateCars(cars: Car[]){
        this.cars = cars;
    }
}
