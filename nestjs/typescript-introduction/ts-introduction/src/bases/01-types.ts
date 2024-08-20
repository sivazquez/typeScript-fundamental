import { PokemoapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapterFetch, PokeApiAdpter } from '../api/pokeapi.adapter';

interface Pokemon {
    id: number,
    name: string
}

export const bulbasour: Pokemon = {
    id: 1,
    name: "Bulbasour"
}

export const charmander: Pokemon = {
    id: 2,
    name: "Charmander"
}

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasour, charmander);

class PokemonClass implements HttpAdapter {
    constructor(
        public name: string,
        public  id: number,
        private readonly http: HttpAdapter
    ){}
    
    async get<T>(): Promise<T>{
        //const {data} = await axios.get<PokemoapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}/`);
        const data = await this.http.get<T>(`https://pokeapi.co/api/v2/pokemon/${this.id}/`);
        console.log(data);
        return data;
    }; 
    async getData(): Promise<PokemoapiResponse>{
        //const {data} = await axios.get<PokemoapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}/`);
        const data = await this.http.get<PokemoapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}/`);
        console.log(data.name);
        return data;
    }; 

}

const pokeapiAdapter = new PokeApiAdpter();
const pokeapiAdapterFetch = new PokeApiAdapterFetch();

export const limber = new PokemonClass( 'Limber',6,pokeapiAdapter);
