import axios from 'axios';

export interface HttpAdapter{
    get<T>( url:string ):Promise<T>
}

export class PokeApiAdapterFetch{
    async get<T>( url: string):Promise<T>{
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }
}

export class PokeApiAdpter {
    private readonly axios = axios;

    async get<T>(url: string): Promise<T> {
        const {data} = await this.axios.get<T>(url);
        return data;
    }
}