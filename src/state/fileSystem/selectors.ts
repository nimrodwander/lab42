import { Node } from '../../util/Types';
import { RootState } from '../store';

//reusable Selectors

//selects the id of the root element
export const selectRootID = (state: RootState) =>
  state.fileSystemReducer.rootID;

  //selects the current collapse mode 1,2
export const selectCollapseMode = (state: RootState) =>
  state.modesReducer.collapseMode;

//select the a node object by id
export const selectNodeData = (state: RootState, id: string) =>
  state.fileSystemReducer.fileSystemDict[id];

//map a list of child nodes of a parent
export const selectChildrenList = (state: RootState, id: string) => {
  const childrenIDs = selectNodeData(state, id).childrenIDs;

  let childrenList: Node[] = [];
  for (let i: number = 0; i < childrenIDs.length; i++) {
    childrenList.push(state.fileSystemReducer.fileSystemDict[childrenIDs[i]]);
  }
  return childrenList;
};
