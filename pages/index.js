import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    return(
    <Layout>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Kikapekiskwewin</title>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <main className={styles.main}>
        <h1>
          Kikapekiskwewin
        </h1>
        <h4 className='subhead'>Why are cultural values so important to Indigenous people involved in research with Indigenous people?</h4>
      </main>
    </Layout>
  )
}