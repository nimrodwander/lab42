import { v4 as uuid } from 'uuid';
import { Node, NodesDict } from './Types';

//creates a flat object from the json tree
//the function stops if it reaches a folder with no sub folders or it reaches a file
export const treeNormalizer = (
  children: any[],
  parentID: string,
  rootNode: NodesDict
) => {
  //stop condition
  if (!children || children.length === 0) {
    return;
  }

  //inseting all child nodes at the current level
  for (let i: number = 0; i < children.length; i++) {
    //generate id
    const id = uuid();

    //insert children ids
    const parent = rootNode[parentID];
    parent?.childrenIDs.push(id);

    //create children object
    let current: Node = {
      id: id,
      visibleChildren: false,
      type: children[i].type,
      name: children[i].name,
      childrenIDs: [],
    };
    rootNode[id] = current;

    //reccursion
    treeNormalizer(children[i].children, id, rootNode);
  }
};
