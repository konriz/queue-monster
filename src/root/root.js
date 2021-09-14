import {LeafFactory} from "../leaf/leaf-factory.js";

export class Root {

  #leavesList = [];

  listLeaves() {
    return this.#leavesList;
  }

  findLeaf(uuid) {
    return this.#leavesList.filter(leaf => leaf.hasId(uuid));
  }

  createLeaf(uuid) {
    return LeafFactory.createLeaf(uuid).then(this.#leavesList.push);
  }

}



