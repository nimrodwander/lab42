import { Grid } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelectorApp } from '../../state/hooks';
import { RootState } from '../../state/store';
import { AppBreweriesList } from '../../util/types';
import { AppCard } from '../Dumb/Card';

interface Props {
  selector: (state: RootState) => any;
}

export const BreweriesGrid: React.FC<Props> = ({ selector }) => {
  console.log('hello');
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const selectApps = useSelectorApp(selector);
  const isLoading = useSelectorApp((state) => state.BreweriesReducer.loading);

  const onfavoriteHandler = () => {};
  const onClickHandler = (id: string) => {
    console.log(id);
    navigate(`${currentPath}/${id}`);
  };

  const mapChildren = () => {
    return selectApps.map((card: AppBreweriesList) => {
      return (
        <Grid item xs={3}>
          <Link to={currentPath + '/' + card.id}>
            {/* <AppCard
              onClick={() => onClickHandler(card.id)}
              data={card}
              onfavorite={() => onfavoriteHandler()}
            /> */}
          </Link>
        </Grid>
      );
    });
  };

  return isLoading === false ? (
    <Grid container spacing={15} padding={15}>
      {mapChildren()}
    </Grid>
  ) : (
    <></>
  );
};
