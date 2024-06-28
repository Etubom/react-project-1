import { useState } from 'react'
import CelebrityListItem from '../Components/CelebrityListItem/CelebrityListItem'
import jsonData from '../assets/data.json'
import styles from './styles.module.css'

const CelebrityList = () => {
  const [failedValidation, setFailedValidation] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    job: '',
    country: '',
    age: '',
    netWorth: '',
  })
  const [isSubmitting, setSubmitting] = useState(false)
  const [data, setData] = useState(jsonData)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    setFailedValidation(false)
    setSubmitting(false)
  }

  const checkFormData = (formObject) => {
    for (let formObjectKey in formObject) {
      if (formObject[formObjectKey] === '') {
        return true
      }
    }
    return false
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (checkFormData(formData)) {
      setFailedValidation(true)
      return
    } else {
      setData((prevData) => [...prevData, formData])
      setFormData({
        name: '',
        job: '',
        country: '',
        age: '',
        netWorth: '',
      })
      setFailedValidation(false)
      setSubmitting(true)
    }
  }

  return (
    <>
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
            <p className={styles.formError}>Please insert a age value</p>
          )}
          {failedValidation && !formData.netWorth && (
            <p className={styles.formError}>Please insert a net worth value</p>
          )}
        </form>
      </div>
      <div className={styles.container}>
        {data.map((celebrity, index) => (
          <CelebrityListItem key={index} data={celebrity} />
        ))}
      </div>
    </>
  )
}

export default CelebrityList
