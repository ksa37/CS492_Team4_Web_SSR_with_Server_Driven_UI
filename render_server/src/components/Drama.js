import React from 'react'
import Link from '@mui/material/Link';
import MoreVert from './Morevert'
import styles from './drama.module.css'
import DramaVideos from './DramaVideos';

import { Card, CardHeader, Box } from '@mui/material';

export default function Drama({props}) {
    const {header, videos} = props
    const {title, href, category, categoryURL, tablist, tablisthref} = header

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
    
    const [menu, setMenu] = React.useState({
        darkBtn: 3
    });

    const changeColor = (btn) => {
        setMenu({ darkBtn: btn });
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
        { menu.darkBtn === 3 && <DramaVideos props={videos}></DramaVideos> }
      </Card> 
    </>
    )
}