import NewsCard from '../components/Newscard'
import { Box } from '@mui/material';

export default function Wiki({props}) {
    const {wiki_posts, wiki_more} = props
    return (
        <>
        {wiki_posts&&wiki_posts.map(
            (wiki) => 
                <div>
                    <Box sx={{mt: 1}}>
                        <NewsCard props={wiki}/>
                    </Box>
                </div>
        )}
        </>
    )
}