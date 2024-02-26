import { Collapse, List } from '@mui/material';
import React from 'react';
import { setVisibiltyByID, toggleNode } from '../state/fileSystem/actions';
import {
  selectChildrenList,
  selectCollapseMode,
  selectNodeData,
} from '../state/fileSystem/selectors';
import { useDispatchApp, useSelectorApp } from '../state/hooks';
import { CollapseModes, Node } from '../util/Types';
import { NodeItem } from './NodeItem';

interface Props {
  id: string;
}

export const NodesList: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatchApp();
  const collapseMode = useSelectorApp((state) => selectCollapseMode(state));
  const nodeData = useSelectorApp((state) => selectNodeData(state, id));
  const childrenList = useSelectorApp((state) => selectChildrenList(state, id));

  const mapChildren = () => {
    let childrenElements: JSX.Element[] = [];
    childrenList.forEach((child: Node) =>
      childrenElements.push(<NodesList id={child.id} />)
    );
    return childrenElements;
  };

  const handleClick = (): void => {
    if (collapseMode === CollapseModes.COLLAPSE) {
      const dispatchObj = setVisibiltyByID({
        visibility: false,
        IDs: nodeData.childrenIDs,
      });
      dispatch(dispatchObj);
    }
    dispatch(toggleNode(id));
  };

  return (
    <List
      id={id}
      sx={{ paddingLeft: '1%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <NodeItem
        name={nodeData.name}
        type={nodeData.type}
        visibleChildren={nodeData.visibleChildren}
        handleClick={handleClick}
      />
      <Collapse in={nodeData.visibleChildren} timeout="auto" unmountOnExit>
        {mapChildren()}
      </Collapse>
    </List>
  );
};
