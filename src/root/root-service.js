import {Root} from "./root.js";
import {v4} from "uuid";

export class RootService {
  #root;

  constructor() {
    this.#root = new Root();
  }

  createLeaf() {
    const uuid = v4();
    this.#root.createLeaf(uuid);
    return uuid;
  }

  listLeaves() {
    return this.#root.listLeaves();
  }

  findLeaf(uuid) {
    return this.#root.findLeaf(uuid);
  }
}
