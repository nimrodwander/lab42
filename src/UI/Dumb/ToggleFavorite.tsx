import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

interface Props {
  onFavorite: (e: any) => void
  isFavorite: boolean;
}

export const AppToggleFavorite: React.FC<Props> = ({onFavorite, isFavorite }) => {
  return (
    <IconButton onClick={(e) => onFavorite(e)}>
      {isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
    </IconButton>
  );
};
