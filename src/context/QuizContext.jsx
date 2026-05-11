import { createContext, useContext, useMemo, useState } from 'react'

const QuizContext = createContext(null)

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({})

  function saveAnswer(questionId, optionId) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: optionId,
    }))
  }

  function resetQuiz() {
    setAnswers({})
  }

  const value = useMemo(
    () => ({
      answers,
      saveAnswer,
      resetQuiz,
    }),
    [answers],
  )

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export function useQuiz() {
  const context = useContext(QuizContext)

  if (!context) {
    throw new Error('useQuiz deve ser usado dentro de QuizProvider')
  }

  return context
}
