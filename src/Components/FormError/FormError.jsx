import { useContext } from 'react'
import styles from './styles.module.css'
import { CelebrityContext } from '../../Context/CelebrityProvider'

const FormError = () => {
  const { formData, failedValidation } = useContext(CelebrityContext)
  return (
    <>
      {failedValidation && !formData.name && (
        <p className={styles.formError}>Please insert a name value</p>
      )}
      {failedValidation && !formData.job && (
        <p className={styles.formError}>Please insert a job value</p>
      )}
      {failedValidation && !formData.country && (
        <p className={styles.formError}>Please insert a country value</p>
      )}
      {failedValidation && !formData.age && (
        <p className={styles.formError}>Please insert an age value</p>
      )}
      {failedValidation && !formData.netWorth && (
        <p className={styles.formError}>Please insert a net worth value</p>
      )}
    </>
  )
}

export default FormError
