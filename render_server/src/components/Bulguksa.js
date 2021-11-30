import  React from 'react'
import Link from '@mui/material/Link';
import MoreVert from './Morevert'
import styles from './Bulguksa.module.css'
import { Card, CardHeader, Box, Paper } from '@mui/material';

export default function Bulguksa({props}) {
    const {header, first_card, second_card} = props
    const {title, href, subtitle, tablist, tablisthref} = header
    const {relimg, middletitle, detailinfo, buttonarea} = first_card
    const middletitle2 = second_card.middletitle
    const scrollbox = second_card.scrollbox
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
                                <Link className={styles.name} href={href} underline="none"> 
                                    {title}
                                </Link>
                            </div>
                            <div className={styles.category}>
                                {subtitle[0]}
                                <hr className={styles.verticalDivider}></hr>
                                {subtitle[1]}
                            </div>
                            <div className={styles.btnmenu}>
                                {tablist.map((tab, i) => (
                                    <div key={i} className={styles.btnmenu}>
                                    <a href={tablisthref[i]}>
                                    <button
                                        className={ 
                                            menu.darkBtn === i 
                                            ? styles.selectedMenu 
                                            : ((i == 0) ? styles.firstunselectedMenu : styles.unselectedMenu) }
                                    >
                                    {tab}
                                    </button>
                                    </a>
                                    {(i != tablist.length - 1) && <hr className={styles.verticalDivider}></hr>}
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
                 <Paper 
                    sx={{ maxWidth:746, borderRadius: '8px', mx: "auto", pt: '10px', pb: '20px' }}
                    style= {{ background: "#e9ecef" }}>
                    <Paper 
                        sx={{ maxWidth:716, borderRadius: '6px', mx: "9px", mb: '12px'}}
                        style= {{ background: "#ffffff" }}
                    >
                        <div className={styles.relimg}>
                            <span className={styles.child}>
                                <span><img className={styles.childimg} src='/images/Bulguksa/imgnum.png' alt='num'/></span>
                                <span className={styles.childnum}>{relimg.imgs.length}</span>
                            </span>
                            <div className={styles.scroll}>
                                <ul className={styles.scrollul}>
                                    {relimg.imgs&&relimg.imgs.map((img, index)=> {
                                        if(index < 10)
                                        {
                                            return (
                                                <li key={index} className={styles.scrollli}>
                                                    <a href={relimg.href}>
                                                        <div className={styles.scrollthumb}>
                                                            <img 
                                                                src={img}
                                                                height= "168px"
                                                                alt="불국사"
                                                            />
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.middletitle}>
                            <a className={styles.morelink} href={middletitle.href}>
                                <h3 className={styles.morelinktitle}>{middletitle.text}</h3>
                                <img className={styles.morelinkicon} src='/images/Bulguksa/more.png' alt='more'></img>
                            </a>
                        </div>
                        <div className={styles.detailinfo}>
                            <dl className={styles.infotxt}>
                                {detailinfo&&detailinfo.map((info, index)=> {
                                    if(info.length === 2)
                                    {
                                        return (
                                            <div key={index} className={styles.infogroup}>
                                                <dt className={styles.infogroupdt}><span className={styles.bar}/>{info[0]}</dt>
                                                <dd className={styles.infogroupdd}>{info[1]}</dd>
                                            </div>
                                        )
                                    }
                                    else if(info.length === 3)
                                    {
                                        return (
                                            <div key={index} className={styles.infogroup}>
                                                <dt className={styles.infogroupdt}><span className={styles.bar}/>{info[0]}</dt>
                                                <dd className={styles.infogroupdd}><a href={info[2]}>{info[1]}</a></dd>
                                            </div>
                                        )
                                    }
                                })}
                            </dl>
                            <div className={styles.textexpand}>
                                {detailinfo[detailinfo.length-1][0]}
                            </div>
                        </div>
                        <div className={styles.buttonarea}>
                            <div className={styles.buttonbox}>
                                <ul className={styles.buttonboxul}><li className={styles.buttonboxli}><a className={styles.buttonboxa} href={buttonarea}><img className={styles.buttonareaicon} src='/images/Bulguksa/map.png' alt='button'></img>지도</a></li></ul>
                            </div>
                        </div>
                    </Paper>
                    <Paper 
                        sx={{ maxWidth:716, borderRadius: '6px', mx: "9px"}}
                        style= {{ background: "#ffffff" }}
                    >
                        <div className={styles.middletitle}>
                            <a className={styles.morelink} href={middletitle2.href}>
                                <h3 className={styles.morelinktitle}>{middletitle2.text}</h3>
                                <img className={styles.morelinkicon} src='/images/Bulguksa/more.png' alt='more'></img>
                            </a>
                        </div>
                        <div className={styles.scrollbox}>
                            <div className={styles.listinfo}>
                                <ul className={styles.scrollboxul}>
                                    {scrollbox&&scrollbox.map((scroll, index)=> {
                                        return (
                                            <li className={styles.scrollboxli} key={index}>
                                                <div className={styles.areacard}>
                                                    <a href={scroll.href}><img src={scroll.thumb} width="87px" height="87px" alt={scroll.name}></img></a>
                                                    <div className={styles.titlebox}>
                                                        <a className={styles.titleboxname} href={scroll.href}>{scroll.name}</a>
                                                        <span className={styles.titleboxsubtext}>{scroll.subtext}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </Paper>
                </Paper>
        </>
    )
}