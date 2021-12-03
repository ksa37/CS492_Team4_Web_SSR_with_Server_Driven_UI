import React from 'react'
import styles from './linkArea.module.css'

var LinkType = Object.freeze({
    VIEWBASIC: 0,
    VIEWTIMELINE: 1
  });

export default function LinkArea({props, link_view}){
    const {more_links} = props
    const {link_type} = link_view
    const more_links_exist = more_links.length!=0;
    return(
    <>
        {more_links_exist&&
        <>
        {link_type==LinkType.VIEWBASIC
        ?
        <div className={styles.linkArea}>
            <div className={styles.linkLine}>
                {more_links&&more_links.map((item, index) => (
                    <a key={index} href={item.link_url}>
                    {item.link_name} <br/>
                    </a>
                )

                )}
            </div>
        </div>
        :
        <div className={styles.linkAreaTimeLine}>
            <div className={styles.linkLine}>
                {more_links&&more_links.map((item, index) => (
                    <a key={index} href={item.link_url}>
                    {item.link_name} <br/>
                    </a>
                )

                )}
            </div>
        </div>
        }
        </>
        }
    </>
    )
}