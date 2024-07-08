import { useState, createContext } from 'react'
import jsonData from '../assets/data.json'

export const CelebrityContext = createContext('')
export default function CelebrityProvider({ children }) {
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
    <CelebrityContext.Provider
      value={{
        failedValidation,
        formData,
        isSubmitting,
        data,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </CelebrityContext.Provider>
  )
}
