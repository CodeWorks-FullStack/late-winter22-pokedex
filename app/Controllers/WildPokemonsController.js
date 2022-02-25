import { ProxyState } from "../AppState.js";
import { wildPokemonsService } from "../Services/WildPokemonsService.js";
import { Pop } from "../Utils/Pop.js";

export class WildPokemonsController {
  constructor() {
    console.log('its working');
    ProxyState.on('wildPokemon', _drawWildPokemon)
    this.getWildPokemon()
  }

  async getWildPokemon() {
    try {
      await wildPokemonsService.getWildPokemon()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }
}
function _drawWildPokemon() {
  let template = ''
  ProxyState.wildPokemon.forEach(p => template += p.Template)

  document.getElementById('wild-pokemons').innerHTML = template

}

