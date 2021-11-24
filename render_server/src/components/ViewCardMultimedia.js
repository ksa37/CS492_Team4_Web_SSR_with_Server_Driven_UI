import React from 'react'
// import Link from 'next/link'
import Link from '@mui/material/Link';
import styles from './postCard.module.css'
// import Image from "next/image"
import MoreVert from './MoreVert'
import DateConvertor from './DateConvertor'
import Image from 'material-ui-image'

import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Paper, Stack} from '@mui/material';

export default function ViewCardMultimeda({props, view}) {  
    const { publisherURL, publisherImgURL, publisher, date, postURL, title, contents, contentsImgURL, tags, more_links} = props
    const { viewType } = view

    const now = Date.now()
    var converted_date = DateConvertor(date)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const more_links_exist = more_links.length!=0;

    return (
        <Card sx={{ maxWidth: 766 }} square > 
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop: '12px', paddingLeft: '18px', paddingRight: '10px', paddingBottom: '12px', '& .MuiCardHeader-avatar': {
                    marginRight: '11px',
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
                            />
                            : <Image className={styles.viewMultiImgBoarder }
                                
                                src={publisherImgURL}
                                // src={contentsImgURL}
                                width='100%'
                                height='100%'
                                objectFit='contain'
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
            {contentsImgURL != "" && <div className={styles.viewMultiImg}>
                <img
                    className={styles.viewMultiImg}
                    src={contentsImgURL}
                    layout="fill"
                /> 
            </div>}
            <CardContent sx={{ m: 0, p: 0, paddingLeft: '18px', paddingRight: '18px', paddingBottom: '15px', paddingTop: '14px',
            "&:last-child": {paddingBottom: 0}}} variant="contained" >
                <Link href={postURL} underline="none">
                    <div className={styles.title}>{title}</div>
                    <div className={styles.contentsInfo}>
                    <div className={styles.contents}>{contents}</div>
                    </div>
                </Link>
            </CardContent>   
            <Paper 
              className="group_option_tag_wrap" 
              style={{overflow: 'auto', paddingBottom: 18}}
              elevation='0'
              square
            >
                <Stack direction="row" spacing={1} style= {{paddingLeft:18, paddingRight:18}}> 
                {tags&&tags.map((item, index) => (
                    <a key={index}  className={styles.tagButton} href={item.tagURL}>
                        #{item.tag_name}    
                    </a>
                ))}
                </Stack>
            </Paper>
        </Card>     
    )
}
