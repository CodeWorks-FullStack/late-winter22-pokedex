
export class WildPokemon {
  constructor(data) {
    // TODO
    this.name = data.name
  }

  get Template() {
    return `<div>
     WILD ${this.name}
    </div>`
  }
}
