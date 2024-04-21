import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppModal } from '../UI/Dumb/Modal';

export const BreweryProfile: React.FC<any> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <AppModal onClose={() => navigate(-1)} open={true}>
      <Typography>hello</Typography>
    </AppModal>
  );
};
