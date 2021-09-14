export class Leaf {
  #id;

  constructor(id) {
    this.#id = id;
  }

  hasId(uuid) {
    return this.#id === uuid;
  }
}
