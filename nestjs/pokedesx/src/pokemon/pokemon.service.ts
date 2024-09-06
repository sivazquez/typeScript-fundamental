import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly PokemonModel: Model<Pokemon>
  ){}
  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();
    try{
      const pokemon = await this.PokemonModel.create(createPokemonDto);
      return pokemon;
    }catch(error){
      this.handleException(error);
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(search: string):Promise<Pokemon> {
    let pokemon:Pokemon;
    if( !isNaN(+search) ) pokemon = await this.PokemonModel.findOne({ no:search});
    if( !pokemon && isValidObjectId(search))  pokemon = await this.PokemonModel.findById(search);
    if(!pokemon) pokemon = await this.PokemonModel.findOne({ name:search.toLowerCase().trim()});

    if(!pokemon) throw new NotFoundException('No se encontro el registro');
    return pokemon
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    let pokemon = await this.PokemonModel.findById(id);
    if(!pokemon) throw new BadRequestException('Registro no encontrado');
    if(updatePokemonDto.name){
      pokemon.name = updatePokemonDto.name;
    }
    if(updatePokemonDto.no){
      pokemon.no = updatePokemonDto.no;
    }

    try{
      await pokemon.save()
      return pokemon;
    }catch(error){
      this.handleException(error);
    }
  }
    

  async remove(id: string) {
    try{
      let {deletedCount} = await this.PokemonModel.deleteOne({'_id':id});
      if( deletedCount === 0 ){
        throw new NotFoundException('No se encontro el registro');
      }
     /*let pokemon = await this.PokemonModel.findById(id);
      if(!pokemon){
        throw new NotFoundException('No se encontro el registro');
      }else{
        //await pokemon.deleteOne();
        //await this.PokemonModel.findByIdAndDelete(id);
        
      }*/
    }catch(error){
      this.handleException(error);
    }
  }

  private handleException( error:any ){
    console.log(error.status);
    if(error.code === 11000){
      throw new BadRequestException(`El registro con ${ JSON.stringify(error.keyValue)} ya existe, no es posible registarlo`);
    }
    if(error.status === 404){
      throw new NotFoundException('No se encontro el registro');
    }
    throw new InternalServerErrorException('Estamos teniendo problemas intenta más tarde');
  }
}
