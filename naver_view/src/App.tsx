import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
// import require from
import imgA from './static/images/hotblue.jpg';
import imgB from "./static/images/blog_img1.png";
import { withStyles } from "@material-ui/core/styles";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GridToolbar from '@mui/x-data-grid-generator';

const WhiteTextTypography = withStyles({
  root: {
    color: "#CCCCCC",
    display: "inline"
  }
})(Typography);

const card_header_date = 
<Typography display="inline" > 
  awesome days<WhiteTextTypography  > | 5일 전</WhiteTextTypography>
</Typography>;
function App() {
  return (
    <div className="App">
      <Card sx={{ maxWidth: 1000 }}> 
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
        
          style={{ textAlign: 'left' }}
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
        {/* <Divider orientation="vertical" flexItem /> */}
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
  );
}

export default App;
