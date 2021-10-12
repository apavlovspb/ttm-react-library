import React from 'react'
import styles from './styles.module.css'
import FormButton from './components/FormButton'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { FormButton }
