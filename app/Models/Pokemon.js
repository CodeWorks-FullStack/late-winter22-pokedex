export class Pokemon {
  constructor(data) {
    // TODO
    this.name = data.name
  }

  get Template() {
    return `<div>
      ${this.name} test
    </div>`
  }
}
