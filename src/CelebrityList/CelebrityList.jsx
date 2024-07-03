import { useState } from 'react'
import CelebrityForm from '../Components/CelebrityForm/CelebrityForm'
import CelebrityListDisplay from '../Components/CelebrityListDisplay/CelebrityListDisplay'
import jsonData from '../assets/data.json'

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
      <CelebrityForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        failedValidation={failedValidation}
        isSubmitting={isSubmitting}
      />
      <CelebrityListDisplay data={data} />
    </>
  )
}

export default CelebrityList
