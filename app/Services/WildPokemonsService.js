import { ProxyState } from "../AppState.js"
import { WildPokemon } from "../Models/WildPokemon.js"

const baseURL = 'https://pokeapi.co/api/v2/pokemon'


// @ts-ignore
const api = axios.create({
  baseURL
})

class WildPokemonsService { 


  async getWildPokemon(){
    const res = await api.get()
    ProxyState.wildPokemon = res.data.results.map(p => new WildPokemon(p))
  }


}

export const wildPokemonsService = new WildPokemonsService()