import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../context/QuizContext.jsx'
import { quizQuestions } from '../data/quiz.js'
import styles from '../styles/App.module.css'

export default function Quiz() {
  const navigate = useNavigate()
  const { answers, saveAnswer } = useQuiz()
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentQuestion = quizQuestions[currentIndex]
  const selectedAnswer = answers[currentQuestion.id]
  const progress = useMemo(() => ((currentIndex + 1) / quizQuestions.length) * 100, [currentIndex])

  function handleOptionClick(optionId) {
    saveAnswer(currentQuestion.id, optionId)

    window.setTimeout(() => {
      if (currentIndex === quizQuestions.length - 1) {
        navigate('/resultado')
        return
      }

      setCurrentIndex((index) => index + 1)
    }, 90)
  }

  function goBack() {
    if (currentIndex === 0) {
      navigate('/')
      return
    }

    setCurrentIndex((index) => index - 1)
  }

  return (
    <main className={styles.page}>
      <section className={styles.quizShell} aria-labelledby="quiz-title">
        <div className={styles.quizHeader}>
          <button className={styles.backButton} type="button" onClick={goBack}>
            Voltar
          </button>
          <span>
            {currentIndex + 1} de {quizQuestions.length}
          </span>
        </div>

        <div className={styles.progressTrack} aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>

        <div className={styles.questionBlock}>
          <p className={styles.kicker}>{currentQuestion.eyebrow}</p>
          <h1 id="quiz-title">{currentQuestion.question}</h1>
        </div>

        <div className={styles.optionsGrid}>
          {currentQuestion.options.map((option) => (
            <button
              className={`${styles.optionButton} ${
                selectedAnswer === option.id ? styles.optionButtonSelected : ''
              }`}
              key={option.id}
              type="button"
              onClick={() => handleOptionClick(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
