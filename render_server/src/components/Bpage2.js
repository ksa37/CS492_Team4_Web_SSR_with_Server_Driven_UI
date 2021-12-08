import  React from 'react'
import { Divider, Paper } from '@mui/material'
import Imagesection from "./Imagesection";
import styles from "./Imagesection.module.css";
import ForwardIcon from '../../public/icons/forward.svg'; 

export default function Bpage2({first_card}) {
    const {relimg, middletitle, detailinfo, buttonarea, video} = first_card
    const [id, setid] = React.useState(1);
    const btf = (first_card.relimg.imgs.length < 12 * id)
    return (
    <>
        <Paper 
            sx={{ maxWidth:746, borderRadius: '6px', mx: "11px", px: '15px', pt:"18px", pb:"21px", borderRadius: '8px 8px 0 0'}}
            style= {{ background: "#ffffff" }}
        >
            <Imagesection key={id} data={relimg} id={id}/>
        </Paper>
        <Divider sx={{ mx: "11px", background: "#ECF0F2" }}/>
            {btf ?
                <a onClick={() => setid(1)}>
                    <Paper 
                        variant="elevation"
                        sx={{ py: "12px", mb: "21px", mx: "11px", borderRadius: '0 0 8px 8px'}}
                        style={{backgroundColor: "#FAFBFB" }}>
                        <div className={styles.viewAll}>
                            접기 
                            <ForwardIcon className={styles.iconUp} data-testid="up" style={{ stroke: "#8A8D8F", width: '9px', height: '16px' }}/>
                        </div>
                    </Paper> 
                </a>  
                :
                <a onClick={() => setid(id + 1)}>
                    <Paper 
                        variant="elevation"
                        sx={{ py: "12px", mb: "21px", mx: "11px", borderRadius: '0 0 8px 8px'}}
                        style={{backgroundColor: "#FAFBFB" }}>
                        <div className={styles.viewAll}>
                            펼쳐보기 
                            <ForwardIcon className={styles.iconDown} data-testid="down" style={{ stroke: "#8A8D8F", width: '9px', height: '16px' }}/>
                        </div>
                    </Paper> 
                </a>      
            }
    </>)
}