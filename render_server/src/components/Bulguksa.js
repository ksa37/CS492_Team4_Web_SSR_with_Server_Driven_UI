import  React from 'react'
import Link from '@mui/material/Link';
import MoreVert from './Morevert'
import styles from './Bulguksa.module.css'
import { Card, CardHeader, Box, Paper } from '@mui/material';
import Bpage0 from './Bpage0'
import Bpage1 from './Bpage1'
import Bpage2 from './Bpage2'

export default function Bulguksa({props}) {
    const {header, first_card, second_card_whole, second_card_basic, third_card_basic} = props
    const {title, href, category, tablist, tablisthref, video} = header
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
        darkBtn: 0
    });

    const changeColor = (btn) => {
        setMenu({ darkBtn: btn });
    };

    return (
        <>
            <Card className={styles.stickyHeader} sx={{ maxWidth: 768, maxHeight: 122 }} style={{backgroundColor: "#e9ecef" }} variant={variant} square>
                <CardHeader 
                    sx={{ paddingBottom: '4px', paddingRight: '8px', '& .MuiCardHeader-action': { padding: 0}}}
                    title= {
                        <div>
                            <div className={styles.name}>
                                <a className={styles.name} href={href} underline="none"> 
                                    {title}
                                </a>
                            </div>
                            <div className={styles.category}>
                                {category[0]}
                                <div className={styles.titlebar}></div>
                                {category[1]}
                            </div>
                            <div className={styles.btnmenu}>
                                {tablist.map((tab, i) => (
                                    <div key={i} className={styles.btnmenu}>
                                        {
                                            i < 3 ?
                                            <button
                                                onClick={changeColor.bind(this, i)}
                                                className={menu.darkBtn === i ?
                                                    styles.selectedMenu 
                                                    :
                                                    ((i == 0) ? styles.firstunselectedMenu : styles.unselectedMenu) }
                                                >
                                                    {tab}
                                                </button>
                                            :
                                            <a href={tablisthref[i]}>
                                                <button className={menu.darkBtn === i ?
                                                    styles.selectedMenu 
                                                    :
                                                    ((i == 0) ? styles.firstunselectedMenu : styles.unselectedMenu) }
                                                >
                                                    {tab}
                                                </button>
                                            </a>
                                        }
                                        {(i != tablist.length - 1) 
                                        && !(i === menu.darkBtn || i + 1 === menu.darkBtn) 
                                        && <div className={styles.tabbar}></div>}
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
                            "url": link,
                            "title": "경주 불국사",
                            "activeColor": "rgba(145,120,103,1)",
                            "inactiveColor": "rgba(145,120,103,0.5)"
                        }}
                        />
                    }
                    style={{ textAlign: 'left'}}
                />
            </Card>
            {
                menu.darkBtn === 0 ?
                <Card className={styles.contents} sx={{ maxWidth: 768, pb:"20px" }} style={{backgroundColor: "#e9ecef" }} variant='outlined' square>
                    <Bpage0 first_card={first_card} second_card={second_card_whole}/>
                </Card>
                :
                menu.darkBtn === 1 ?
                <Card className={styles.contents} sx={{ maxWidth: 768, pb:"20px" }} style={{backgroundColor: "#e9ecef" }} variant='outlined' square>
                    <Bpage1 first_card={first_card} second_card={second_card_basic} third_card={third_card_basic}/>
                </Card>
                :
                menu.darkBtn === 2 ?
                <Card className={styles.contents} sx={{ maxWidth: 768, pb:"20px" }} style={{backgroundColor: "#e9ecef" }} variant='outlined' square>
                    <Bpage2 first_card={first_card}/>
                </Card>
                :
                <>
                </>
            }
        </>
    )
}