import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props{

}

export const AppPagination: React.FC<Props> = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
    </Stack>
  );
}
