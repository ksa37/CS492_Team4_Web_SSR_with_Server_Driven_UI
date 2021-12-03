import React from 'react'
<<<<<<< HEAD
=======
import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Paper, Stack, Typography} from '@mui/material';
>>>>>>> 4eb85f7651b68a2f7e9edd858b75bdbaf70f33f2
import Link from '@mui/material/Link';
import styles from './comments.module.css'

export default function Comments({props}){
    const {comments, link} = props

    return (
<<<<<<< HEAD
=======
        // <Paper 
        // className="group_option_tag_wrap" 
        // style={{overflow: 'auto', paddingBottom: 18}}
        // elevation={0}
        // square
        // >
        //     <Stack direction="row" spacing={1} style= {{paddingLeft:18, paddingRight:18}}> 
        //     {tags&&tags.map((item, index) => (
        //         <a key={index}  className={styles.tagButton} href={item.tagURL}>
        //             #{item.tag_name}    
        //         </a>
        //     ))}
        //     </Stack>
        // </Paper>
>>>>>>> 4eb85f7651b68a2f7e9edd858b75bdbaf70f33f2
        <div className={styles.totalComment}>
            <div className={styles.commentsWrap}>
                <div>
                    <ul className={styles.listComment}>
                        {comments&&comments.map((comment, index)=>(
                            <li key={index} className={styles.commentBx}>
                                <Link href={link} underline="none" className={styles.commentBxInner}>
                                    <div className={styles.txtArea}>
                                        <p style={{margin:'0'}}><i className={styles.icoReply}>RE</i>{comment}</p>
                                    </div>
                                </Link>
                            </li> 
                        ))}
                        <li className={styles.commentBx}>
                            <Link href={link} underline="none" className={styles.moreButton}>
                                <span className={styles.moreInfo}>
                                    <span className={styles.iconWrapper}>
                                     <img 
                                        src="/icons/forward_arrow.svg"
                                        style={{paddingTop:'10px'}}
<<<<<<< HEAD
                                        alt="forward"
=======
>>>>>>> 4eb85f7651b68a2f7e9edd858b75bdbaf70f33f2
                                     />
                                    </span>
                                    더보기 
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )


}