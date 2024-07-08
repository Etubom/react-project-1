import { useContext } from 'react'
import CelebrityListItem from '../CelebrityListItem/CelebrityListItem'
import styles from './styles.module.css'
import { CelebrityContext } from '../../Context/CelebrityProvider'

const CelebrityListDisplay = () => {
  const { data } = useContext(CelebrityContext)
  return (
    <div className={styles.container}>
      {data?.map((celebrity, index) => (
        <CelebrityListItem key={index} data={celebrity} />
      ))}
    </div>
  )
}

export default CelebrityListDisplay
