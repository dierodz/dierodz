import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import ReactGA from "react-ga"
import NavMenu from '../components/NavMenu'

import styles from '../styles/Home.module.scss'

ReactGA.initialize(process.env.GA)

export default function Home() {
  const containerRef = useRef(null)
  const mainRef = useRef(null)

  const [selected, setSelected] = useState(0)
  const [page, setPage] = useState('')

  function onSelectMenu(i) {
    mainRef.current.children[i].scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    var bounding = [
      mainRef.current.children[0].getBoundingClientRect(),
      mainRef.current.children[1].getBoundingClientRect(),
      mainRef.current.children[2].getBoundingClientRect(),
      mainRef.current.children[3].getBoundingClientRect(),
    ]
    const callback = () => {
      if (bounding[3].top <= containerRef.current.scrollTop) {
        setSelected(3)
        setPage('| Contacto')
        ReactGA.pageview(
          '/contact'
        )
      }
      else if (bounding[2].top <= containerRef.current.scrollTop) {
        setSelected(2)
        setPage('| Skills')
        ReactGA.pageview(
          '/skills'
        )
      }
      else if (bounding[1].top <= containerRef.current.scrollTop) {
        setSelected(1)
        setPage('| Sobre mí')
        ReactGA.pageview(
          '/abaut'
        )
      }
      else if (bounding[0].top <= containerRef.current.scrollTop) {
        setSelected(0)
        setPage('')
        ReactGA.pageview(
          '/'
        )
      }
    }
    containerRef.current.addEventListener('scroll', callback)
    return () => containerRef.current.removeEventListener('scroll', callback)
  }, [containerRef, mainRef])

  return (
    <div className={styles.container} ref={containerRef}>
      <Head>
        <title>Diego Rodríguez {page}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu onSelect={onSelectMenu} selected={selected} />

      <main ref={mainRef} className={styles.main}>
        <section className={styles.section}>
          <div className={styles.name}>
            <img src="profile.jpg" alt="profile picture" className={styles.avatar} />
            <section>
              <h1 className={styles.title}>
                Diego Rodríguez
            </h1>
              <p className={styles.description}>
                Full Stack JavaScript Developer
            </p>
            </section>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.sectionTitle}>sobre mí</span>
          <div className={styles.card}>
            <p>
              Nací el 6 de abril de 1991 en Uruguay. Soy apasionado por la tecnología desde que tengo memoria,
              a lo largo de mi vida laboral me he encontrado con muchos retos, y ser autodidacta me ha ayudado a resolverlos.
              Trabajar en equipo y buscar el exito grupal, es algo que considero muy importante, aunque nunca descarto algún reto personal.
              Como desarrollador soy proactivo, organizado y metodico, me adapto facilmente ante cambios y estoy abierto a aprender nuevas tecnologías
              y lenguajes.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.sectionTitle}>skills</span>
          <div className={styles.card}>
            <p>
              Manejo tecnologías React JS, Redux, Electron JS, Express, Passport, GraphQL, Next JS Vercel, Node, Sass entre otras.
              Experiencia en tecnologías AWS S3 y SES, Google Firebase.
              Además de manejar herramientas de diseño como Adobe Illustrator y Corel Draw
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.sectionTitle}>contacto</span>
          <div className={[styles.card, styles.businessCard].join(' ')}>
            <img className={styles.qr} src="/qrcode.svg" alt="v-card" />
            <span>
              <label>Nombre completo:</label>
                Diego Rodríguez
              </span>
            <span>
              <label>Email:</label>
                dierodz@gmail.com
              </span>
            <span>
              <label>Telefono:</label>
                +598 97 074 788
              </span>
            <div className={styles.social}>
              <a href="https://github.com/dierodz">
                <img src="/github.svg" alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/dierodz">
                <img src="/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          <img src="/next.svg" alt="Next.js Logo" className={styles.logo} />
          <img src="/react.svg" alt="React.js Logo" className={styles.logo} />
          <img src="/sass.svg" alt="Sass Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

{/* <section className={styles.section}>
          <div className={styles.name}>
            <img src="profile.jpg" alt="profile picture" className={styles.avatar} />
            <section>
              <h1 className={styles.title}>
                Diego Rodríguez
            </h1>
              <p className={styles.description}>
                Full Stack JavaScript Developer
            </p>
            </section>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.sectionTitle}>sobre mí</span>
          <div className={styles.card}>
            <p>
              Nací el 6 de abril de 1991 en Uruguay. Soy apasionado por la tecnología, autodidacta.
              Manejo tecnologías React JS, Redux, Electron JS, Express, Passport, GraphQL, Next JS Vercel, Node, Sass entre otras.
              Experiencia en tecnologías AWS S3 y SES, Google Firebase.
              Además de manejar herramientas de diseño como Adobe Illustrator y Corel Draw
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.sectionTitle}>skills</span>
          <div className={styles.card}>
            <p>
              Nací el 6 de abril de 1991 en Uruguay. Soy apasionado por la tecnología, autodidacta.
              Manejo tecnologías React JS, Redux, Electron JS, Express, Passport, GraphQL, Next JS Vercel, Node, Sass entre otras.
              Experiencia en tecnologías AWS S3 y SES, Google Firebase.
              Además de manejar herramientas de diseño como Adobe Illustrator y Corel Draw
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.sectionTitle}>contacto</span>
          <div className={styles.card}>
            <p>
              Nací el 6 de abril de 1991 en Uruguay. Soy apasionado por la tecnología, autodidacta.
              Manejo tecnologías React JS, Redux, Electron JS, Express, Passport, GraphQL, Next JS Vercel, Node, Sass entre otras.
              Experiencia en tecnologías AWS S3 y SES, Google Firebase.
              Además de manejar herramientas de diseño como Adobe Illustrator y Corel Draw
            </p>
          </div>
        </section> */}
