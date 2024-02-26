export interface Node {
  
  //node id
  id: string;
  
  //determines if the node/ folder is open/ clode
  visibleChildren: boolean;
  
  //either folder/ file
  type: NodeType;
  
  //the name of the folder/ file
  name: string;
  
  //holds a reference to its child nodes in the array
  childrenIDs: string[];
}

//the type of the normallized tree object/ flat nodes object
export type NodesDict = Record<string, Node>;

export enum NodeType {
  ROOT = 'root',
  FOLDER = 'folder',
  FILE = 'file',
}

export enum CollapseModes {
  COLLAPSE = 'collapse',
  PRESERVE = 'preserve',
}
