import * as React from 'react';
import PostCard from '../components/PostCard'
import { Box } from '@mui/material';
import MoreContent from '../components/MoreContent';

<<<<<<< HEAD:render_server/src/pages/wiki.js
var ViewType = Object.freeze({
    NEWS: 0,
    WIKI: 1
});

=======
>>>>>>> f9800ea8069ac5b5c9829c7f2cd3291ea54d8e0a:web_render/components/wiki.js
export default function Wiki({props}) {
    const {wiki_posts, wiki_more} = props
    return (
        <>
        {wiki_posts&&wiki_posts.map(
            (wiki) => 
                <div>
                    <Box sx={{mb: 1.25}}>
                        <PostCard props={wiki} view={{ "viewType": ViewType.WIKI }}/>
                    </Box>
                </div>
        )}
        <MoreContent props={{'view_option': "",'more_link':wiki_more}}/>
        </>
    )
}