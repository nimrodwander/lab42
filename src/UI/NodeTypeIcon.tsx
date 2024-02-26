import { Folder } from '@mui/icons-material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { ListItemIcon } from '@mui/material';
import React from 'react';
import { NodeType } from '../util/Types';

interface Props {
  type: NodeType;
}

//sets the node item icon to display folder/ file icon
export const NodeTypeIcon: React.FC<Props> = ({ type }) => {
  return (
    <ListItemIcon>
      {type === NodeType.FOLDER && <Folder /> }
      {type === NodeType.FILE && <InsertDriveFileOutlinedIcon />}
    </ListItemIcon>
  );
};
