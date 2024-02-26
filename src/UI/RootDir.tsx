import { selectRootID } from '../state/fileSystem/selectors';
import { useSelectorApp } from '../state/hooks';
import { NodesList } from './NodesList';

export const RootDir: React.FC = () => {
  const rootID = useSelectorApp((state) => selectRootID(state));
  return <NodesList id={rootID} />;
};
