import React from 'react'
import styles from './postCard.module.css'
import MoreVert from './Morevert'
import DateConvertor from './DateConvertor'
import Image from 'material-ui-image'

import { Card, CardContent, CardHeader, Divider, Paper, Stack} from '@mui/material';

export default function ViewCardBasic({props, view}) {  
    const { publisherURL, publisherImgURL, publisher, date, postURL, title, contents, contentsImgURL, tags, more_links} = props
    const { viewType } = view

    const now = Date.now()
    var converted_date = DateConvertor(date)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const more_links_exist = more_links.length!=0;

    return (
        <Card sx={{ maxWidth: 766 }} square > 
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop: '8px', paddingLeft: '16px', paddingRight: '8px', paddingBottom: '0px', '& .MuiCardHeader-avatar': {
                    marginRight: '8px',
                  }}} variant="contained"
                avatar={
                    <a href={publisherURL} >
                        <div className={styles.publisherImgBoarder}>
                            {publisherImgURL == ""
                            ? <Image className={styles.publisherImg}
                                src="/images/default_publisher.png" 
                                width='100%'
                                height='100%'
                                objectFit='contain'
                                alt='default'
                            />
                            : <Image className={styles.publisherImg}
                                
                                src={publisherImgURL}
                                // src={contentsImgURL}
                                width='100%'
                                height='100%'
                                objectFit='contain'
                                alt='publisher'
                            />}
                        </div>
                    </a>
                }
                title = {
                    <div className={styles.publishInfo}>
                        <a href={publisherURL}>
                            <div className={styles.publisher}>{publisher}</div>
                        </a>
                        { viewType != "WIKI" &&
                            <hr className={styles.verticalDivider}></hr>
                        }
                        { date != "" &&
                            <div className={styles.date}>{converted_date}</div>
                        }
                    </div>
                }
                action = {
                    <MoreVert props = {{
                        "open": open, 
                        "anchorEl": anchorEl, 
                        "handleClick": handleClick, 
                        "handleClose": handleClose,
                        "url": postURL,
                        "title": title
                    }}
                    />
                }
            />
            <CardContent sx={{ m: 0, p: 0, paddingLeft: '16px', paddingRight: '16px', marginBottom: '15px', 
            "&:last-child": {paddingBottom: 0}}} variant="contained" >
                <a href={postURL}>
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
                                alt='content'
                            /> 
                        </div>}
                    </div>
                </a>
            </CardContent>   
            <Paper 
              className="group_option_tag_wrap" 
              style={{overflow: 'auto', paddingBottom: 18}}
              elevation={0}
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
            
            {more_links_exist&&<div className={styles.linkArea}>
                <div className={styles.linkLine}>
                    {more_links&&more_links.map((item, index) => (
                        <a key={index} href={item.link_url}>
                        {item.link_name} <br/>
                        </a>
                    )

                    )}
                </div>
            </div>}

            <a href="https://m.search.naver.com/search.naver?sm=mtp_sly.hst&where=m&query=%ED%8C%8C%EB%A6%AC&acr=1" className={styles.linkBox}>
                <span style={{marginRight:'12px', overflow:'hidden'}}>
                    <img
                        src={"icons/link.png"}
                        height={11}
                        width={11}
                        alt='link'
                    />
                    <span> 유지니의 #파리여행 콘텐츠 더보기</span>
                    <img
                        className={styles.linkBoxForward}
                        src={'/icons/forward.svg'}
                        width={7}
                        height={11}
                        alt='forward'
                    />
                    {/* <div className={styles.linkBoxForward} /> */}
                    
                </span>
            </a>
        </Card>     
    )
}
