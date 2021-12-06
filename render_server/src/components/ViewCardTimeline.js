import React from 'react'
import Link from '@mui/material/Link';
import styles from './postCard.module.css'
import Image from 'material-ui-image'
import MoreVert from './Morevert'
import DateConvertor from './DateConvertor'
import ImageScroll from './ImageScroll';
import { Card, CardHeader} from '@mui/material';
import LinkArea from './LinkArea';

var LinkType = Object.freeze({
    VIEWBASIC: 0,
    VIEWTIMELINE: 1
  });

var ScrollType = Object.freeze({
VIEWBASIC: 0,
VIEWTIMELINE: 1,
INFLUENCER: 2
});

function ViewCardTimelinePost({props}) {
    const {view, converted_date} = props
    const { publisherURL, publisherImgURL, publisher, date, postURL, title, contents, contentsImgURL, tags, more_links} = view

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
    <div className={styles.timelineContent} >
        <div className={styles.timelineLine}/>
        <div className={styles.timelineCircle}/>
        <div className={styles.timelineContentInner}>
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop:'4px',paddingBottom:'6px', '& .MuiCardHeader-avatar': {
                    marginRight: '10px', elevation: '0px'
                }}} variant="contained"
                avatar={
                    <Link href={publisherURL} underline="none">
                        <div className={styles.viewMultiImgBoarder }>
                            {publisherImgURL == ""
                            ? <Image className={styles.viewMultiImgBoarder }
                                src="/images/default_publisher.png" 
                                width='100%'
                                height='100%'
                                objectFit='contain'
                                alt="default"
                            />
                            : <Image className={styles.viewMultiImgBoarder }
                                src={publisherImgURL}
                                width='100%'
                                height='100%'
                                objectFit='contain'
                                alt="publisher"
                            />}
                        </div>
                    </Link>
                }
                title = {
                    <div className={styles.publishInfo}>
                        <Link href={publisherURL} underline="none">
                            <div className={styles.publisher}><b>{publisher}</b></div>
                        </Link>
                    </div>
                }
                subheader={<div className={styles.date}>{converted_date}</div>}
                action = {
                    <MoreVert props = {{
                        "open": open, 
                        "anchorEl": anchorEl, 
                        "handleClick": handleClick, 
                        "handleClose": handleClose
                    }}
                    />
                }
            />   
            {contentsImgURL.length > 1 &&
                <ImageScroll props={{'imgs': contentsImgURL, 'link': postURL}} scroll_view={{"scroll_type": ScrollType.VIEWTIMELINE}}/>
            }
            <div>
                <Link href={postURL} underline="none">
                    <a>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.contentsInfo}>
                        <div className={styles.contents}><p>{contents}</p></div>
                        </div>
                    </a>
                </Link>
                
            </div>
            {<LinkArea props={{"more_links":more_links}} link_view={{"link_type": LinkType.VIEWTIMELINE}}/>}
        </div>          
    </div>
    )
}

export default function ViewCardTimeline({props}) {  
    const {view_posts} = props
    view_posts&&view_posts.sort((a, b) => parseInt(a.date) < parseInt(b.date) ? 1 : -1);

    const datelist = view_posts&&view_posts.map(view_post => view_post.date)
    const datelist_converted = datelist&&datelist.map((date) => (
        DateConvertor(date)
    ))

    const date_unique = arr => {
        const counts = {};
        for (var i = 0; i < arr.length; i++) {
           counts[arr[i]] = 1 + (counts[arr[i]] || 0);
        };
        return counts;
     };

    const date_list_num = date_unique(datelist_converted)
    const dates = Object.keys(date_list_num)
    const for_each_date_num = Object.values(date_list_num)

    const slice_arr = arr => {
        var count = 0
        const sliced = [] 
        for(var i = 0; i < arr.length; i++) {
            sliced.push({'start':count, 'end':count+arr[i]})
            count += arr[i]
        }
        return sliced
    }

    const slice_date = slice_arr(for_each_date_num)
    const date_unique_num = dates.length

    return (
        <>
        { Array.from(Array(date_unique_num).keys()).map((num)=>(
            <Card key={num} sx={{ maxWidth: 766, borderTop: 'solid 1px rgb(236, 240, 242)'}} square > 
            <div className={styles.timelineDate}>
                {dates[num]}
            </div>
            {view_posts.slice(slice_date[num].start,slice_date[num].end).map((view, index)=>(
                <ViewCardTimelinePost key={index} props={{'view':view, 'converted_date': dates[num]}}/>
            ))}
            </Card> 
        ))}
        </>  
    )
}
