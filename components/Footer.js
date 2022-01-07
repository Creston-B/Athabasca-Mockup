import React, { Component } from 'react'
import styles from '../styles/Home.module.scss'
import Image from 'next/dist/client/image'

export default class FooterComponent extends Component {
  render() {
    return(
    <footer className={styles.footer}>
      <span>Creston Barker - <a href="mailto:creston@barkerdev.com">creston@barkedev.com</a></span>
      <a href='https://opensource.org/licenses/MIT'>MIT license 2020</a>
      <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </footer>
    )
  }
}

