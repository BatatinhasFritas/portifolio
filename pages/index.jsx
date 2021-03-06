import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { Header } from '../components/header/header'
import Skills from '../components/skills/Skills'
import Schooling from '../components/schooling/Schooling'

import { useState } from 'react'

export default function Home() {

  const [theme, setTheme] = useState('light-theme');

  return (
    <div className={styles.container + ' ' + theme} id="container">
      <Head>
        <title>Portifolio Isaque Alcantara</title>
        <meta name="description" content="Generated by create next app" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <Header theme={theme} setTheme={setTheme} />

      <main>
        <section id='home' className={styles.home}>
          
          <div className={styles["text-container"]}>
            <h1>Isaque<strong>Alcantara</strong></h1>
            
            <p>
            Resolvo seu problema com um pouco de JavaScript e criatividade.
            </p>
          </div>
          <a href='mailto:alcantara.isaque167@gmail.com' className={styles.button}>fale comigo</a>
        </section>

        <Skills theme={theme}/>

        <Schooling/>
      </main>

      <footer id='contact'>
        <h2>contato</h2>
        <span>Alcantara.isaque167@gmail.com</span>
        <h2>Social Media</h2>
        <div className={styles["social-media-icons"]}>
          <a href="https://www.linkedin.com/in/isaque-alcantara-6a02b7225/" target="_blank"><img src={`/linkedin-${theme}.svg`} alt="logtipo do linkedin" /></a>
          <a href="https://www.instagram.com/isaque.cara/" target="_blank"><img src={`/instagram-${theme}.svg`} alt="logtipo do linkedin" /></a>
          <a href="https://github.com/BatatinhasFritas/" target="_blank"><img src={`/github-${theme}.svg`} alt="logtipo do linkedin" /></a>
          <a href="https://twitter.com/IsaqueAlcantarD/" target="_blank"><img src={`/twitter-${theme}.svg`} alt="logtipo do linkedin" /></a>
        </div>
      </footer>
    </div>
  )
}
