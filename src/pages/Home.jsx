import { Link } from 'react-router-dom'
import styles from '../styles/App.module.css'

export default function Home() {
  return (
    <main className={styles.homePage}>
      <header className={styles.homeTop}>Psi Seissa Pinheiro</header>

      <section className={styles.homeHero} aria-labelledby="home-title">
        <div className={styles.homeContent}>
          <h1 id="home-title">Você sabe o que a ausência do pai está causando no seu filho agora?</h1>
          <p className={styles.homeSubtitle}>
            Responda 4 perguntas e descubra o que está acontecendo com ele — e o que você pode
            fazer ainda hoje.
          </p>
          <Link className={styles.homeCta} to="/quiz">
            Iniciar Diagnóstico Gratuito →
          </Link>
          <p className={styles.homeNote}>Leva menos de 1 minuto • Gratuito • Sem cadastro</p>
        </div>
      </section>
    </main>
  )
}
