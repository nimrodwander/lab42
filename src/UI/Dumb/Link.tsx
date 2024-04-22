import Typography from '@mui/material/Typography';
import * as React from 'react';

interface Props {
  path: string;
  title: string;
  onClick: (path: string) => void;
}

export const AppLink: React.FC<Props> = ({ path, title, onClick }) => {
  return (
    <Typography
      onClick={() => onClick(path)}
      variant="h6"
      fontSize={16}
      component="div"
      sx={{ flexGrow: 1, cursor: 'pointer' }}
    >
      {title}
    </Typography>
  );
};
