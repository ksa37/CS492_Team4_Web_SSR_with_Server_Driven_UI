import React from 'react'
import Link from '@mui/material/Link';
import styles from './postCard.module.css'
import MoreVert from './morevert'
import DateConvertor from './DateConvertor'
import Image from 'material-ui-image'

import { Card, CardContent, CardHeader, Divider } from '@mui/material';

var ViewType = Object.freeze({
    NEWS: 0,
    WIKI: 1
});
// typeScript 에서는 바꾸기 https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/

export default function PostCard({props, view}) {  
    const { publisherURL, publisherImgURL, publisher, date, postURL, title, contents, contentsImgURL } = props
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
    // console.log(view)
    // console.log(props)

    return (
        <Card sx={{ maxWidth: 766 }} square > 
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop: '8px', paddingLeft: '16px', paddingRight: '8px' }} variant="contained"
                avatar={
                    <Link href={publisherURL} underline="none">
                        <a>
                            <div className={styles.publisherImgBoarder}>
                                {publisherImgURL == ""
                                ? <Image className={styles.publisherImg}
                                    src="/images/default_publisher.png" 
                                    style={{
                                        width:'100%',
                                        height:'100%',
                                        objectFit:'contain',
                                    }}
                                />
                                : <Image className={styles.publisherImg}
                                    
                                    src={publisherImgURL}
                                    style={{
                                        width:'100%',
                                        height:'100%',
                                        objectFit:'contain',
                                    }}
                                />}
                            </div>
                        </a>
                    </Link>
                }
                title = {
                    <div className={styles.publishInfo}>
                        <Link href={publisherURL} underline="none">
                            <a>
                                <div className={styles.publisher}>{publisher}</div>
                            </a>
                        </Link>
                        { viewType != ViewType.WIKI &&
                        // { viewType != "WIKI" &&
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
                        "handleClose": handleClose
                    }}
                    />
                }
            />
            <CardContent sx={{ m: 0, p: 0, paddingLeft: '16px', paddingRight: '16px', marginBottom: '10px' }} variant="contained" >
                <Link href={postURL} underline="none">
                    <a>
                        <div className={styles.title}>{title}</div>
                        { viewType == ViewType.WIKI && <Divider 
                        // { viewType == "WIKI" && <Divider 
                            sx={{mt: 1.25, mb: 1.25, color: 'gray.light' }} // theme.spacing value (the default for the value is 8px
                        />}
                        <div className={styles.contentsInfo}>
                            <div className={styles.contents}>
                                <p>{contents}</p>
                            </div>
                            {contentsImgURL != "" && <div className={styles.contentsImgBoarder}>
                                <Image className={styles.contentsImg}
                                    src={contentsImgURL}
                                    style={{
                                        width:'88px',
                                        height:'100%',
                                        objectFit:'contain',
                                    }}
                                /> 
                            </div>}
                        </div>
                    </a>
                </Link>
            </CardContent>                      
        </Card>
    )
}
