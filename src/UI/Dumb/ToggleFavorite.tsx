import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

interface Props {
  favorite: boolean;
  onfavorite: () => void;
}

export const ToggleFavorite: React.FC<Props> = ({ favorite, onfavorite }) => {
  return (
    <IconButton onClick={onfavorite}>
      {favorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
    </IconButton>
  );
};
