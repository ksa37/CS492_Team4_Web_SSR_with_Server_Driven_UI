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

export default function Card_wiki(props) {
  const {
    header_href,
    header_src,
    header_title,
    subheader_title,
    content_links,
    content_description,
    content_time,
    ...other
  } = props;
  const link_list = ""
  return (
    <Card sx={{ maxWidth: 750, mx:'5px', my: '10px'}}>
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
    </Card>
  );
}
