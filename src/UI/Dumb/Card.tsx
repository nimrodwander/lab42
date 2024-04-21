import { Box, Card, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { AppBreweryItem } from '../../util/types';
import { AppToggleFavorite } from './ToggleFavorite';

interface Props {
  data: AppBreweryItem;
  onFavorite: (e: any) => void;
  onClick: () => void;
}

export const AppCard: React.FC<Props> = ({
  data,
  onFavorite,
  onClick,
}) => {
  return (
    <Card onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <AppToggleFavorite isFavorite={data.isFavorite} onFavorite={onFavorite} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {data.address_1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

/*
 <Chip icon={<LocationOnIcon />} label={data.address_1} />
          <Chip icon={<StoreIcon />} label={data.name} />*/
