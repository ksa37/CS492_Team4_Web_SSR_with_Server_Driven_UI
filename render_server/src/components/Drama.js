import React from 'react'
import Link from '@mui/material/Link';
import MoreVert from './Morevert'
import styles from './drama.module.css'
import HeaderMenuButton from './HeaderMenuButton';
import DramaVideos from './DramaVideos';
import ForwardIcon from '../../public/icons/forward.svg'; 

import { Card, CardHeader, Box, Divider, Paper } from '@mui/material';

export default function Drama({props}) {
    const {header, videos} = props
    const {title, href, category, categoryURL, tablist, tablisthref} = header
    const {showMore, videoData} = videos

    // for ... button in header
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    var link; 
    if (typeof window !== "undefined") {
        link = window.location.href;
        // console.log(link);
    }

    // for header
    const [offset, setOffset] = React.useState(0);
    React.useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
    }, []);

    var variant;
    if (offset) variant ='elevation';
    else variant ='none';
    // console.log(offset); 
    
    const [menu, setMenu] = React.useState({
        darkBtn: 3
        // darkBtn: 0
    });

    const changeColor = (btn) => {
        setMenu({ darkBtn: btn });
    };

    // for '펼쳐보기'
    const [viewAll, setViewAll] = React.useState(true);
    const setViewAllClick = (event) => {
        setViewAll(!viewAll);
        // console.log(viewAll)
    };

    return (
        <>
        <Card className={styles.stickyHeader}  sx={{ maxWidth: 768, maxHeight: 122}} style={{backgroundColor: "#F1EDEB" }} variant={variant} square >
        <CardHeader
            sx={{ paddingBottom: '4px', paddingRight: '8px', '& .MuiCardHeader-action': { padding: 0}
            }}
            title= {
                <div>
                    <div className={styles.dramaName}>
                        <a className={styles.dramaName} href={href} underline="none"> 
                            {title}
                        </a>
                    </div>
                    { (offset == 0) &&
                        <div className={styles.dramaCategory}>
                            <Link className={styles.dramaCategory} href={categoryURL} underline="none"> 
                                {category}
                            </Link>
                        </div>
                    }
                    <div className={styles.btnmenu}>
                        {tablist.map((btn, i) => (
                            <div key={i} className={styles.btnmenu}>
                            <button
                                onClick={changeColor.bind(this, i)}
                                className={ 
                                    menu.darkBtn === i 
                                    ? styles.selectedMenu 
                                    : ((i == 0) ? styles.firstunselectedMenu : styles.unselectedMenu) }
                            >
                            {btn}
                            </button>
                            {(i != tablist.length - 1) 
                            && !(i === menu.darkBtn || i + 1 === menu.darkBtn) 
                            && <div className={styles.verticalDivider}></div>}
                            </div>
                        ))}
                    </div>
                    <Box sx={{m: 0.5}}/>
                </div>
            }
            
            action = {
                (offset == 0) &&
                <MoreVert props = {{
                    "open": open, 
                    "anchorEl": anchorEl, 
                    "handleClick": handleClick, 
                    "handleClose": handleClose,
                    "url": "https://m.tving.com/app.tving?path=/episode/landing&epiCd=P001518829",
                    "title": "술꾼도시여자들 공식영상",
                    "activeColor": "rgba(145,120,103,1)",
                    "inactiveColor": "rgba(145,120,103,0.5)"
                }}
                />
            }
            style={{ textAlign: 'left'}}
        />
        </Card>
        <Card className={styles.contents} sx={{ maxWidth: 768 }} style={{backgroundColor: "#F1EDEB" }} variant='outlined' square>
        <Paper
            sx={{ px: "15px", py: "21px", mx: "11px", maxWidth:746, borderRadius: '8px 8px 0px 0px' }}>
            {/* {tablist.map((btn, i) => (
                (menu.darkBtn === i) && 
                <Paper 
                    key={i}
                    sx={{ maxWidth: 716, height: 464, borderRadius: '6px'}}
                    style= {{ background: "#D2C9C4" }}
                > {btn}
                </Paper>
            ))} */}
            {
                menu.darkBtn === 3 &&
                videoData.map((data, i) => {
                    // mockdata.map((data, i) => {
                    if (viewAll && i < 4) {
                        return ( <DramaVideos key={i} props={data} info={{"viewAll": viewAll}}></DramaVideos> )
                    }
                    if (!viewAll && i < 8) {
                        return ( <DramaVideos key={i} props={data} info={{"viewAll": viewAll}}></DramaVideos> )
                    }
                })
            }
            {menu.darkBtn === 3 && !viewAll && 
                <a className={styles.showMore} href={showMore}>
                    공식영상 더보기
                    <ForwardIcon className={styles.icon} style={{ stroke: "#B3B4B6", width: "7px", height: "11px" }}/>
                </a>
            }
        </Paper>
        { menu.darkBtn === 3 && 
            <div>
                <Divider sx={{ mx: "11px", background: "#ECF0F2" }}/>
                    <a onClick={setViewAllClick} style={{ cursor: "pointer" }} >
                        <Paper 
                            variant="elevation"
                            sx={{ py: "12px", mb: "21px", mx: "11px", borderRadius: '0 0 8px 8px'}}
                            style={{backgroundColor: "#FAFBFB" }}>
                                {viewAll ?
                                <div className={styles.viewAll}>
                                    펼쳐보기 
                                    <ForwardIcon className={styles.iconDown} style={{ stroke: "#8A8D8F", width: '9px', height: '16px' }}/>
                                </div>
                                :<div className={styles.viewAll}>
                                    접기 
                                    <ForwardIcon className={styles.iconUp} style={{ stroke: "#8A8D8F", width: '9px', height: '16px' }}/>
                                </div>
                                }
                        </Paper> 
                    </a>
            </div>
        }     
      </Card>
    </>
    )
}