import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import styles from './SelectBox.module.css'
// import { makeStyles } from '@mui/styles';

// const useStyles = theme => ({
//   root: {
//     "& .MuiOutlinedInput-input": {
//       color: "green"
//     },
//     "& .MuiInputLabel-root": {
//       color: "green"
//     },
//     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//       borderColor: "green"
//     },
//     "&:hover .MuiOutlinedInput-input": {
//       color: "red"
//     },
//     "&:hover .MuiInputLabel-root": {
//       color: "red"
//     },
//     "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//       borderColor: "red"
//     },
//     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
//       color: "purple"
//     },
//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "purple"
//     },
//     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       borderColor: "purple"
//     }
//   },
// //   overrides: {
// //     MuiSelect: {
// //   select: {
// //       '&:before': {
// //           // borderColor: color,
// //       },
// //       '&:after': {
// //           borderColor: "var(--naver_green)",
// //       },
// //       "&:focus": {
// //         backgroundColor: "var(--naver_green)",
// //         borderColor: "var(--naver_green)"
// //       },
// //   },
// // }
// // }
// });

// const useStyles = makeStyles({
//   customOutline: {
//     "& .MuiOutlinedInput-notchedOutline": {
//       borderColor: "var(--naver_green)"
//     }
//   }
// });

export default function BasicSelect() {
  const [href, sethref] = React.useState('');

  const handleChange = (event) => {
    sethref(event.target.value);
  };
  
  // const classes = useStyles();

  return (
    <Box className={styles.wrap} sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
       {/* classes={{ root: classes.customOutline }}> */}
        <InputLabel id="demo-simple-select-label">Select the keyword</InputLabel>
        <Select
          // className={classes.select}
          // className={classes.root}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={href}
          label="href"
          onChange={handleChange}
        >
          <MenuItem value={'http://localhost:4000/?id=Bulguksa'}>불국사</MenuItem>
          <MenuItem value={'http://localhost:4000/?id=Paris'}>파리</MenuItem>
          <MenuItem value={'http://localhost:4000/?id=WorkLaterDrinkNow'}>술꾼도시여자들</MenuItem>
          <MenuItem value={'https://www.google.com/'}>google</MenuItem>
        </Select>
      </FormControl>
      <Button className={styles.linkBtn} variant="contained" href={href}>
        Link
      </Button>
    </Box>
  );
}
