import { ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { NodeType } from '../util/Types';
import { ExpandIcon } from './ExpandIcon';
import { NodeTypeIcon } from './NodeTypeIcon';

interface Props {
  name: string;
  type: NodeType;
  visibleChildren: boolean;
  handleClick: () => void;
}
export const NodeItem: React.FC<Props> = ({
  name,
  type,
  visibleChildren,
  handleClick,
}) => {
  return (
    <>
      {type !== NodeType.ROOT && (
        <>
          <ListItemButton onClick={handleClick}>
            <NodeTypeIcon type={type} />
            <ListItemText primary={name} />
            <ExpandIcon type={type} visibleChildren={visibleChildren} />
          </ListItemButton>
        </>
      )}
    </>
  );
};
