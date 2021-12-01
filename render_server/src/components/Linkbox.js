import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function BasicSelect() {
  const [href, sethref] = React.useState('');

  const handleChange = (event) => {
    sethref(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Keyword</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={href}
          label="href"
          onChange={handleChange}
        >
          <MenuItem value={'http://localhost:4000/?id=Bulguksa'}>불국사</MenuItem>
          <MenuItem value={'http://localhost:4000/?id=Paris'}>파리</MenuItem>
          <MenuItem value={'https://www.google.com/'}>google</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" href={href}>
        Link
      </Button>
    </Box>
  );
}
