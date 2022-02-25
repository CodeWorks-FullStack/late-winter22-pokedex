import { ProxyState } from "../AppState.js";
import { caughtPokemonsService } from "../Services/CaughtPokemonsService.js";
import { Pop } from "../Utils/Pop.js";

export class CaughtPokemonsController {
  constructor() {
    console.log('its working');
    ProxyState.on('caughtPokemon', _drawCaughtPokemon)
    this.getCaughtPokemon()
  }

  async getCaughtPokemon() {
    try {
      await caughtPokemonsService.getCaughtPokemon()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }
}

function _drawCaughtPokemon() {
  let template = ''
  ProxyState.caughtPokemon.forEach(p => template += p.Template)

  document.getElementById('caught-pokemons').innerHTML = template
}

