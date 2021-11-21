import React from 'react'
import Link from 'next/link'
import styles from './postCard.module.css'
import Image from "next/image"
import Morevert from './Morevert'
import DateConvertor from './DateConvertor'


import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Paper, Stack} from '@mui/material';

// var ViewType = Object.freeze({
//     NEWS: 0,
//     WIKI: 1
// });
// typeScript 에서는 바꾸기 https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/

export default function ViewCard({props, view}) {  
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

    // var isWiki = true;
    // var isWiki = false;
    // var viewType = ViewType.NEWS;
    // var viewType = ViewType.WIKI;
    // console.log(viewType)
    // console.log(props)
    const more_links_exist = more_links.length!=0;

    return (
        <Card sx={{ maxWidth: 766 }} square > 
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop: '8px', paddingLeft: '16px', paddingRight: '8px', paddingBottom: '0px', '& .MuiCardHeader-avatar': {
                    marginRight: '8px',
                  }}} variant="contained"
                avatar={
                    // <Avatar>
                    <Avatar
                    sx={{ width: 24, height: 24, paddingRight:0, marginRight:0 }}
                    >
                    <Link href={publisherURL}>
                        <a>
                            <div className={styles.publisherImgBoarder}>
                                {publisherImgURL == ""
                                ? <Image className={styles.publisherImg}
                                    src="/images/default_publisher.png" 
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                />
                                : <Image className={styles.publisherImg}
                                    
                                    src={publisherImgURL}
                                    // src={contentsImgURL}
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                />}
                            </div>
                        </a>
                    </Link>
                    </Avatar>
                }
                title = {
                    <div className={styles.publishInfo}>
                        <Link href={publisherURL}>
                            <a>
                                <div className={styles.publisher}>{publisher}</div>
                            </a>
                        </Link>
                        { viewType != "WIKI" &&
                            <hr className={styles.verticalDivider}></hr>
                        }
                        { date != "" &&
                            <div className={styles.date}>{converted_date}</div>
                        }
                    </div>
                }
                action = {
                    <Morevert props = {{
                        "open": open, 
                        "anchorEl": anchorEl, 
                        "handleClick": handleClick, 
                        "handleClose": handleClose
                    }}
                    />
                }
            />
            <CardContent sx={{ m: 0, p: 0, paddingLeft: '16px', paddingRight: '16px', marginBottom: '15px', 
            "&:last-child": {paddingBottom: 0}}} variant="contained" >
                <Link href={postURL}>
                    <a>
                        <div className={styles.title}>{title}</div>
                        { viewType == "WIKI" && <Divider 
                            sx={{mt: 1.25, mb: 1.25, color: 'gray.light' }} // theme.spacing value (the default for the value is 8px
                        />}
                        <div className={styles.contentsInfo}>
                            <div className={styles.contents}>{contents}</div>
                            {contentsImgURL != "" && <div className={styles.contentsImgBoarder}>
                                <Image className={styles.contentsImg}
                                    src={contentsImgURL}
                                    width='87px'
                                    height='87px'
                                /> 
                            </div>}
                        </div>
                    </a>
                </Link>
            </CardContent>   
            <Paper 
              className="group_option_tag_wrap" 
              style={{overflow: 'auto', paddingBottom: 18}}
              elevation='0'
              square
            >
                <Stack direction="row" spacing={1} style= {{paddingLeft:18, paddingRight:18}}> 
                {tags&&tags.map((item) => (
                    <Link href={item.tagURL}>
                    <a>
                    <Button className={styles.tagButton} variant="contained" disableElevation 
                    sx={{'&:hover': {backgroundColor: '#f4f7f8'}}}>#{item.tag_name}
                    </Button>
                    </a>
                    </Link>
                ))}
                </Stack>
            </Paper>
            
            {/* {more_links_exist&&<div className={styles.linkArea}>
                <div className={styles.linkLine}>
                    {more_links&&more_links.map((item) => (
                        <>
                        <Link href={item.link_url}>
                            <a>
                            {item.link_name}\n
                            </a>
                        </Link>
                        
                        </>
                    )

                    )}
                </div>
            </div>} */}
        </Card>
    )
}