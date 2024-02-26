import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useDispatchApp, useSelectorApp } from '../state/hooks';
import { CollapseModes } from '../util/Types';
import { changeCollapseMode } from '../state/modes/actions';
import { selectCollapseMode } from '../state/fileSystem/selectors';

//gathers collapse mode contol buttons
export const CollapseModesMenu: React.FC = () => {
  const dispatch = useDispatchApp();
  const collapseMode = useSelectorApp((state) => selectCollapseMode(state));

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: CollapseModes
  ) => {
    dispatch(changeCollapseMode(value));
  };

  const control = {
    value: collapseMode,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
      <Tooltip title="Collapsing Subfolders Mode">
        <ToggleButton value={CollapseModes.COLLAPSE} key="right">
          <UnfoldLessIcon />
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Preserve Subfolders Open Mode">
        <ToggleButton value={CollapseModes.PRESERVE} key="justify">
          <UnfoldMoreIcon />
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
};
