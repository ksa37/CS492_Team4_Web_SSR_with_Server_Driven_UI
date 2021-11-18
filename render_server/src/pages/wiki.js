import NewsCard from '../components/Newscard'
import { Box } from '@mui/material';
import Morecontent from '../components/Morecontent';

// var ViewType = Object.freeze({
//     NEWS: 0,
//     WIKI: 1
// });

export default function Wiki({props}) {
    const {wiki_posts, wiki_more} = props
    return (
        <>
        {wiki_posts&&wiki_posts.map(
            (wiki) => 
                <div>
                    <Box sx={{mb: 1.25}}>
                        <NewsCard props={wiki} view={{ "viewType": "WIKI" }}/>
                    </Box>
                </div>
        )}
        <Morecontent props={{'view_option': "",'more_link':wiki_more}}/>
        </>
    )
}