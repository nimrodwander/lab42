import { Box, Button, FormControl, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

interface Props{
  onSearch: (e: any) => void,
  onChange: (e: any) => void,
  value: string
}

export const SearchBox: React.FC<Props> = ({ onSearch, onChange, value }) => {
  return (
    <Box padding={15}>
      <TextField
        fullWidth
        onChange={onChange}
        value={value}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        placeholder="search"
      />
    </Box>
  );
};