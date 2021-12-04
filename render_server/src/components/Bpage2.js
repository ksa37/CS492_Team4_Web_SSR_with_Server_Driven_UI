import  React from 'react'
import { Paper } from '@mui/material'
import Imagesection from "./Imagesection";
import styles from "./Imagesection.module.css";

export default function Bpage2({first_card}) {
    const {relimg, middletitle, detailinfo, buttonarea, video} = first_card
    const [id, setid] = React.useState(1);
    const btf = (first_card.relimg.imgs.length < 12 * id)
    return (
    <>
        <Paper 
            sx={{ maxWidth:746, borderRadius: '6px', mx: "9px", px: '15px', pt:"18px", pb:"21px"}}
            style= {{ background: "#ffffff" }}
        >
            <Imagesection data={relimg} id={id}/>
        </Paper>
        <Paper sx={{maxWidth:746, height: 50, mx: "9px", mb: "12px"}}
            style={{backgroundColor: '#f4f7f8'}}>
            {btf ?
                <button className={styles.btn} onClick={() => setid(1)}>
                    접기
                </button>  
                :
                <button className={styles.btn} onClick={() => setid(id + 1)}>
                    펼쳐보기
                </button>      
            }
        </Paper>
    </>)
}