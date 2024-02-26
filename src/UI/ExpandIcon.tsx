import { ExpandLess, ExpandMore } from '@mui/icons-material';
import React from 'react';
import { NodeType } from '../util/Types';

interface Props {
  type: NodeType;
  visibleChildren: boolean;
}

//indicates if a folder is open or close by an icon
//if a folder is used to 
export const ExpandIcon: React.FC<Props> = ({
  type,
  visibleChildren,
}) => {
  if (type === NodeType.FOLDER) {
    return visibleChildren ? <ExpandLess /> : <ExpandMore />;
  } else {
    return <></>;
  }
};
