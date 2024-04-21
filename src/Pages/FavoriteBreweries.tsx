import { BreweriesGrid } from '../UI/Smart/BreweriesGrid';
import { selectAllBreweries } from '../state/selectors';
import { RootState } from '../state/store';

export const FavoriteBreweries: React.FC = () => {
  return (
    <>
      <BreweriesGrid selector={selectAllBreweries} />
    </>
  );
};
