import { Box, Button, Card, CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { AppBreweryItem } from '../../util/types';
import { AppToggleFavorite } from './ToggleFavorite';

interface Props {
  data: AppBreweryItem;
  imageUrl: string;
  onFavorite: (e: any) => void;
  onClick: () => void;
}

export const AppCard: React.FC<Props> = ({
  data,
  imageUrl,
  onFavorite,
  onClick,
}) => {
  return (
    <Card key={data.id}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} alt="img" />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <AppToggleFavorite
              isFavorite={data.isFavorite}
              onFavorite={onFavorite}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {data.address_1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onClick}>
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

/*
 <Chip icon={<LocationOnIcon />} label={data.address_1} />
          <Chip icon={<StoreIcon />} label={data.name} />*/
