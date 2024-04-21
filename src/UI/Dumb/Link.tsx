import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  path: string;
  title: string;
  onClick: (path: string) => void;
}

export const LinkItem: React.FC<Props> = ({ path, title, onClick }) => {
  return (
      <Typography
        onClick={() => onClick(path)}
        variant="h6"
        fontSize={16}
        component="div"
        sx={{ flexGrow: 1, cursor: "pointer" }}
      >
        {title}
      </Typography>
  );
};
