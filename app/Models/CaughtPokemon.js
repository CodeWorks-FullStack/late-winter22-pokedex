export class CaughtPokemon {
  constructor(data) {
    // TODO
    this.name = data.name
  }

  get Template() {
    return `<div>
      ${this.name} CAUGHT
    </div>`
  }
}
