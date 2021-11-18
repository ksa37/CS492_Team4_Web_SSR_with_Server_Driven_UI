import NewsCard from '../components/Newscard'
import { Box } from '@mui/material';

var ViewType = Object.freeze({
    NEWS: 0,
    WIKI: 1
});

export default function Wiki({props}) {
    const {wiki_posts, wiki_more} = props
    return (
        <>
        {wiki_posts&&wiki_posts.map(
            (wiki) => 
                <div>
                    <Box sx={{mt: 1}}>
                        <NewsCard props={wiki} view={{ "viewType": "WIKI" }}/>
                    </Box>
                </div>
        )}
        </>
    )
}