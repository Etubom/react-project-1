import { useContext } from 'react'
import CelebrityForm from '../Components/CelebrityForm/CelebrityForm'
import CelebrityListDisplay from '../Components/CelebrityListDisplay/CelebrityListDisplay'
import { CelebrityContext } from '../Context/CelebrityProvider'

const CelebrityList = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    failedValidation,
    isSubmitting,
    data,
  } = useContext(CelebrityContext)

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
