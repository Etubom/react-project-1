import { useContext } from 'react'
import FormError from '../FormError/FormError'
import styles from './styles.module.css'
import { CelebrityContext } from '../../Context/CelebrityProvider'

const CelebrityForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    failedValidation,
    isSubmitting,
  } = useContext(CelebrityContext)
  return (
    <div className={styles.myForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          className={styles.formInput}
        />
        <br />
        <input
          type="text"
          name="job"
          value={formData.job}
          placeholder="Job"
          onChange={handleChange}
          className={styles.formInput}
        />
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          placeholder="Country"
          onChange={handleChange}
          className={styles.formInput}
        />
        <br />
        <input
          type="text"
          name="age"
          value={formData.age}
          placeholder="Age"
          onChange={handleChange}
          className={styles.formInput}
        />
        <br />
        <input
          type="text"
          name="netWorth"
          value={formData.netWorth}
          placeholder="Net Worth"
          onChange={handleChange}
          className={styles.formInput}
        />
        <br />
        <div className={styles.submitBtn}>
          <button disabled={isSubmitting} type="submit">
            {'Add User'}
          </button>
        </div>
        <FormError formData={formData} failedValidation={failedValidation} />
      </form>
    </div>
  )
}

export default CelebrityForm
