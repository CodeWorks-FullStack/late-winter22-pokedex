import { ProxyState } from "../AppState.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";

const baseURL = 'https://bcw-sandbox.herokuapp.com/api/brian/pokemon'

// @ts-ignore
const api = axios.create({
  baseURL
})



class CaughtPokemonsService {


  async getCaughtPokemon(){
    const res = await api.get()
    console.log('the caught pokemon', res.data);
    ProxyState.caughtPokemon = res.data.map(p => new CaughtPokemon(p)) // because I am getting an array  /// res.data.map() vs new X(res.data)
    
  }


}


export const caughtPokemonsService = new CaughtPokemonsService()