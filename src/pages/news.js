import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/card'

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>news</title>
            </Head>
            <h1>news</h1>
            <Card></Card>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}