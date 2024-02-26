import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { treeNormalizer } from '../../util/TreeNormalizer';
import { Node, NodeType, NodesDict } from '../../util/Types';
import { normallize, setVisibiltyByID, toggleNode } from './actions';

interface InitialState {
  //contains all tree nodes in a flat object
  fileSystemDict: NodesDict;

  //reference to the root id object in fileSystemDict
  rootID: string;
}

const initialState: InitialState = {
  fileSystemDict: {},
  rootID: '',
};

//manages the file system state
//such as open/ close state, nodes object
export const fileSystemReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(normallize, (state, action: any) => {
      const id = uuid();

      //create root node
      let rootNode: Node = {
        id: id,
        visibleChildren: true,
        type: NodeType.ROOT,
        name: 'root',
        childrenIDs: [],
      };

      //create a temporary object
      let fileSystemDict: NodesDict = {};

      //inserting the first object: root node
      fileSystemDict[id] = rootNode;

      //creating a reference to the root node in the nodes flat object
      state.rootID = id;

      treeNormalizer(action.payload, id, fileSystemDict);
      state.fileSystemDict = fileSystemDict;
    })

    //open or close node
    .addCase(toggleNode, (state, action: any) => {
      const id = action.payload;

      state.fileSystemDict[id].visibleChildren =
        !state.fileSystemDict[id].visibleChildren;
    })

    //setting an array of child nodes visibleChildren property to be false/ true by their ids
    .addCase(setVisibiltyByID, (state, action: any) => {
      for (let i = 0; i < action.payload.IDs.length; i++) {
        state.fileSystemDict[action.payload.IDs[i]].visibleChildren =
          action.payload.visibility;
      }
    });
});
