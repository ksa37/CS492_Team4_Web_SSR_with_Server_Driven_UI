import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card_Wiki from '../../src/Card_wiki';
import Influencer from '../../src/influencer.js';


export async function getServerSideProps(context) {
  const response = await fetch('http://localhost:5000/wikis')
  const data = await response.json()
  const influencer_response = await fetch('http://localhost:5000/influencer')
  const influencer_data = await influencer_response.json()
  // console.log(data, influencer_data);
  return {
    props: {
      wikis: data,
      influencer: influencer_data
    },
  }
} 

export default function Index( wikis ) {
  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" sx={{ bgcolor: '#f0f2f5'}}>
        <ImageList cols={1} component="div">
          {
            wikis.wikis.map((wiki) => (
            <ImageListItem key={wiki.header_href}>
              <Card_Wiki header_href={wiki.header_href} header_src={wiki.header_src} header_title={wiki.header_title} subheader_title={wiki.subheader_title} content_links={wiki.content_links} content_description={wiki.content_description} content_time={wiki.content_time}/>
            </ImageListItem>
            ))
          }
        </ImageList>
      </Grid>

      <Grid container alignItems="center" justifyContent="center" sx={{ bgcolor: '#f0f2f5'}}>
        <ImageList cols={1} component="div">
          {wikis.influencer.map((each) => (
            <Influencer name={each.name} type={each.type} place={each.place} fans={each.fans} blogdetails={each.blogdetails} title={each.title} content={each.content} date={each.date} etc={each.etc} image={each.image}/>
            ))
          }
        </ImageList>
      </Grid>
    </Container>
  );
}