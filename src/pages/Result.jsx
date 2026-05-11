import { Link } from 'react-router-dom'
import heroImage from '../assets/result-hero-mother-child.png'
import productImage from '../assets/product-ipad-mobile.png'
import { useQuiz } from '../context/QuizContext.jsx'
import { CHECKOUT_URL, resultProfiles } from '../data/quiz.js'
import styles from '../styles/App.module.css'

export default function Result() {
  const { answers } = useQuiz()
  const profile = resultProfiles[answers.behavior]

  if (!profile) {
    return (
      <main className={styles.resultPage}>
        <section className={styles.resultShell}>
          <p className={styles.resultLabel}>Diagnóstico do seu filho</p>
          <h1>Vamos começar pelo diagnóstico?</h1>
          <p className={styles.subtitle}>
            Para gerar seu perfil, responda às 4 perguntas rápidas do quiz.
          </p>
          <Link className={styles.primaryButton} to="/quiz">
            Iniciar Diagnóstico
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className={styles.resultPage}>
      <section className={styles.resultHero} aria-labelledby="result-title">
        <img src={heroImage} alt="" />
        <div className={styles.resultHeroContent}>
          <p className={styles.resultPill}>Diagnóstico do seu filho</p>
          <h1 id="result-title">
            {profile.headlineStart}
            <span>{profile.headlineAccent}</span>
          </h1>
        </div>
      </section>

      <section className={styles.resultShell} aria-label="Resultado do diagnóstico">
        <article className={styles.diagnosisCard}>
          <span className={styles.softIcon} aria-hidden="true">↯</span>
          <p>{profile.description}</p>
        </article>

        <article className={styles.meaningCard}>
          <span className={styles.meaningIcon} aria-hidden="true">!</span>
          <div>
            <h2>O que isso significa na prática?</h2>
            <p>
              Entender o que está acontecendo é o primeiro passo. O segundo é saber exatamente o
              que fazer — com a linguagem certa, para a idade certa, nos momentos mais difíceis.
            </p>
          </div>
        </article>

        <section className={styles.nextStepBlock} aria-label="O que vem depois">
          <p className={styles.nextStepLabel}>O que vem depois</p>
          <p className={styles.nextStepLead}>
            Você acabou de entender o que está acontecendo com ele. A maioria das mães nunca chega
            até aqui.
          </p>
          <p className={styles.nextStepText}>
            Mas entender não é suficiente. Quando ele explodir de novo, quando perguntar pelo pai,
            quando você não souber o que dizer — você vai precisar de mais do que intuição. Vai
            precisar de direção.
          </p>
          <p className={styles.nextStepClosing}>
            Foi por isso que eu criei um manual prático — com linguagem direta, para mães reais,
            nos momentos mais difíceis.
          </p>
        </section>

        <section className={styles.manualShowcase} aria-label="Oferta do manual">
          <div className={styles.productFrame}>
            <img src={productImage} alt="Ser Mãe Depois do Abandono - Manual Prático" />
          </div>

          <div className={styles.manualOffer}>
            <h2>Ser Mãe Depois do Abandono</h2>
            <p className={styles.manualSubtitle}>Manual Prático — Psi Seissa Pinheiro</p>

            <ul className={styles.manualBullets}>
              <li>
                O que dizer quando ele perguntar pelo pai — com exemplos reais para cada situação
                e faixa etária
              </li>
              <li>
                Como proteger seus filhos emocionalmente sem precisar ser perfeita nem dar conta de
                tudo sozinha
              </li>
              <li>
                O que realmente afeta uma criança na ausência do pai — e o que está sob o seu
                controle a partir de hoje
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.checkoutBand} aria-label="Comprar manual">
          <div className={styles.priceBox}>
            <span>por apenas</span>
            <strong>R$ 27,00</strong>
          </div>
          <div className={styles.checkoutAction}>
            <a className={styles.resultCta} href={CHECKOUT_URL} target="_blank" rel="noreferrer">
              Quero o Manual Agora →
            </a>
            <p className={styles.resultSecure}>Acesso imediato • Pagamento seguro</p>
          </div>
        </section>
      </section>
    </main>
  )
}
