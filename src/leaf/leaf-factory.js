import {Leaf} from "./leaf.js";

export class LeafFactory {
  static async createLeaf() {
    return new Leaf(uuid);
  }
}
