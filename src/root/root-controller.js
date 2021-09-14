export function rootController(rootService, req, res) {
  function listLeaves() {
    res.send(rootService.listLeaves());
  }

  function addLeaf() {
    res.send({leafId: rootService.createLeaf()});
  }

  function findLeaf(uuid) {
    res.send({leaf: rootService.findLeaf(uuid)});
  }

  return {listLeaves, addLeaf, findLeaf};
}

