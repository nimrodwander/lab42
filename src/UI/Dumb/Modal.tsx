import CloseIcon from '@mui/icons-material/Close';
import {Box, Dialog, DialogContent, DialogTitle, IconButton, Typography} from '@mui/material';
import React, { useState } from 'react';
import { BooleanLiteral } from 'typescript';

interface Props {
  title: JSX.Element;
  children: JSX.Element;
  onClose: () => void;
}

export const AppModal: React.FC<Props> = ({ children, onClose, title }) => {

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {title}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};