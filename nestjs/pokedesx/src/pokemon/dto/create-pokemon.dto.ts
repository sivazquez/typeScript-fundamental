import { IsInt, IsPositive,IsString,Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
    @IsInt({message: 'El campo no debe ser entero'})
    @IsPositive({message: 'El campo no debe ser positivo'})
    @Min(1,{message: 'El campo no debe ser mayor a 0'})
    no: number;

    @IsString({message: 'El campo name debe ser un string'})
    @MinLength(1,{message: 'El campo name debe de tener al menos 1 caracter'})
    name: string;
}
