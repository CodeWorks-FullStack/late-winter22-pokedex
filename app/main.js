import { CaughtPokemonsController } from "./Controllers/CaughtPokemonsController.js";
import { WildPokemonsController } from "./Controllers/WildPokemonsController.js";

class App {
  wildPokemonController = new WildPokemonsController()
  caughtPokemonController = new CaughtPokemonsController()

}

window["app"] = new App();
