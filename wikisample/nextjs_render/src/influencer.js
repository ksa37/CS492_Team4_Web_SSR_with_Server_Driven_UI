import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Links_list from '../src/Links_list';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Influencer(props) {
  const {
    name,
    type,
    place,
    fans,
    blogdetails,
    title,
    content,
    date,
    etc,
    image,
    ...other
  } = props;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Card sx={{ minWidth: 750, mx:'5px', my: '10px'}}>
      <Box>
        <Grid sx={{ maxWidth: 750}} container spacing={2}>
        <Grid item xs={0.5}>
          <Avatar sx = {{ width: 24, height: 24, ml: '5px', my: '5px', display:'inline-block'}} alt="" src="/static/images/avatar/avatar_1.png"/>
        </Grid>
        <Grid item xs={1.5}>
          <Item> {name} </Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item> {type} </Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item> {place} </Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item> {fans} </Item>
        </Grid>
        <Grid item xs={8}>
          <Item> {blogdetails} </Item>
        </Grid>
      </Grid>
      </Box>
    </Card>
  );
}

{/* <Card sx={{ maxWidth: 750, mx:'5px', my: '10px'}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Link href={header_href} underline="none" sx={{ fontSize: 14 }} color="#424242">
            <Box component="span" sx={{ display: 'inline-block', mr: '5px'}}>
              <Avatar alt={header_href} src={header_src} sx={{ width: 16, height: 16 }} />
            </Box>
            {header_title}
          </Link>
        }
        subheader={
          <Link href={header_href} underline="none" sx={{ fontSize: 18}}>
            {subheader_title}
          </Link>
        }
      />
      <Divider variant="middle"/>
      <CardContent>
        <Links_list content_links={content_links} />
        <Typography>
          {content_description}
        </Typography>
        <Typography color="gray" sx={{ fontSize: 14}}>
          {content_time}
        </Typography>
      </CardContent>
    </Card> */}