import React from 'react';
import logo from './logo.svg';
import './App.css';
import StandardImageList from './StandardImageList';
import ReactDOM from "react-dom";

import { red } from '@mui/material/colors';
import { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { withStyles, makeStyles, styled} from "@material-ui/core/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
import { Box, minHeight } from '@mui/system';

import imgA from './static/images/hotblue.jpg';
import imgB from "./static/images/blog_img1.png";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e9ecef"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#e9ecef"
    },
    // text: {
    //   primary: "#ffffff"
    // }
  }
});


const WhiteTextTypography = withStyles({
  root: {
    color: "#CCCCCC",
    display: "inline",
    fontSize: 16
  }
})(Typography);

const card_header_date = 
<Typography display="inline" style={{fontSize: 16}} > 
  awesome days<WhiteTextTypography  > | 5일 전</WhiteTextTypography>
</Typography>;

const card_header_title = 
<Typography variant="h2" display="inline" style={{fontSize: 17}} > 
  <b>이미지</b>
</Typography>;


// const useStyles = makeStyles(theme => ({
//   marginAutoContainer: {
//     width: 500,
//     height: 80,
//     display: 'flex',
//     backgroundColor: 'gold',
//   },
//   marginAutoItem: {
//     margin: 'auto'
//   },
//   alignItemsAndJustifyContent: {
    
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// }))


// className="App" 

const itemData = [
  {
    img: imgA,
    tag_name: 'Breakfast',
  },
  {
    img: imgA,
    tag_name: 'Burger',
  },
  {
    img: imgA,
    tag_name: 'Camera',
  },
  {
    img: imgA,
    tag_name: 'Coffee',
  },
  {
    img: imgA,
    tag_name: 'Hats',
  },
  {
    img: imgA,
    tag_name: 'Honey',
  },
  {
    img: imgA,
    tag_name: 'Basketball',
  },
  {
    img: imgA,
    tag_name: 'Fern',
  },
  {
    img: imgA,
    tag_name: 'Mushrooms',
  },

];

function App() {
  const [light, setLight] = React.useState(true);
  // const classes = useStyles()
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
    
    <div className="App" >
      <Grid 
        container
        justifyContent="center"
        alignItems="center"
        direction="column" 
      >

      <div className="section_view">
        <Card sx={{ maxWidth: 766}} variant='outlined' square > 
          <CardHeader
            avatar={
              <Avatar src={imgA} alt="awesome days" />
            
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title = {card_header_date}
          
            style={{ textAlign: 'left', height:48}}
          />
          <CardContent>
            <Typography variant="body1" gutterBottom align="left">
              [프랑스 여행 D+7] 파리 여행 마지막날 간 곳들(팡테온,튈르리정원, 퐁피두센터)
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
            여행기간 : 170603-170610 프랑스여행/파리여행/파리볼거리/파리관광지/팡테온/튈르리정원/퐁피두센터 어느덧 여행의 마지막날. 
            여행의 마지막날은 언제나 울적하다.ㅠㅠ 그래서 더욱...
            </Typography>
            <CardMedia
            component="img"
            sx={{
              width:87,
              height:87,
            }}
            image={imgB}
            alt="[프랑스 여행 D+7] 파리 여행 마지막날 간 곳들(팡테온,튈르리정원, 퐁피두센터)"
            />
            <Stack direction="row" spacing={1} m={2} pt={3}>
              <Chip label="#파리여행" component="a" href="#basic-chip" clickable />
              <Chip
                label="#파리관광지"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
              />
            </Stack>
          </CardContent>                      
        
          <Divider />
          {/* <hr/> */}
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
              <ExpandMoreIcon />
          </CardActions>
        </Card>
      </div>


      <div className="section_image">
        <Card sx={{ maxWidth: 766}} variant='outlined' square>
          <CardHeader 
            className="api_title_area"
            title= {card_header_title}
            style={{ textAlign: 'left'}}
          />
          <Paper 
            className="group_option_tag_wrap" 
            style={{height: 83, overflow: 'auto', backgroundColor: '#f5f7f8'}}
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              style={{minHeight:66}}
             
            >
            <Stack direction="row" spacing={1} style= {{paddingLeft:12, paddingRight:12}}>
            {itemData.map((item) => (
              <Chip 
                key={item.tag_name}
                avatar={<Avatar src={item.img} />}
                label={item.tag_name}
                variant="outlined"
                style={{backgroundColor: "#ffffff"}}
              />
            ))}
              {/* <Chip
                avatar={<Avatar alt="Natacha" src={imgA} />}
                label="Avatar"
                variant="outlined"
                style={{backgroundColor: "#ffffff"}}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src={imgA} />}
                label="Avatar"
                variant="outlined"
                style={{backgroundColor: "#ffffff"}}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src={imgA} />}
                label="Avatar"
                variant="outlined"
                style={{backgroundColor: "#ffffff"}}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src={imgA} />}
                label="Avatar"
                variant="outlined"
                style={{backgroundColor: "#ffffff"}}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src={imgA} />}
                label="Avatar"
                variant="outlined"
                style={{backgroundColor: "#ffffff"}}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src={imgA} />}
                label="Avatar"
                variant="outlined"
                style={{backgroundColor: "#ffffff"}}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src={imgA} />}
                label="Avatar"
                variant="outlined"
                style={{backgroundColor: "#ffffff"}}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src={imgA} />}
                label="Avatar"
                variant="outlined"
              />
              <Chip
                avatar={<Avatar alt="Natacha" src={imgA} />}
                label="Avatar"
                variant="outlined"
              />
              <Chip
              avatar={<Avatar alt="Natacha" src={imgA} />}
              label="Avatar"
              variant="outlined"
              /> */}
            </Stack>
            </Grid>
          </Paper>
          <StandardImageList />
          <Paper style={{height: 50, overflow: 'auto', backgroundColor: '#f4f7f8'}}>
            <Typography style={{height:48, fontSize: 16, verticalAlign:'center'}}>
              이미지 더보기 <ArrowForwardIcon sx={{mt:2}} style={{height: 16, width: 20}}/>
            </Typography>
          </Paper>
        </Card>
      </div>  
      </Grid>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
