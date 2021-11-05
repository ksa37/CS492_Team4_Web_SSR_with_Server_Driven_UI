import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/card'
import styles from './news.module.css'

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>news</title>
            </Head>
            <div className={styles.news}>
                <hr className={styles.divider}></hr>
                <div className={styles.newsHeader}>
                    <div className={styles.viewName}>뉴스</div>
                    <div className={styles.viewOptions}>
                        <div className={styles.viewSort}>관련도순</div>
                        <div className={styles.viewSort}>최신순</div>
                    </div>
                </div>
                <hr className={styles.divider}></hr>
            </div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}