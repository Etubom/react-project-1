import CelebrityListItem from '../CelebrityListItem/CelebrityListItem'
import styles from './styles.module.css'

const CelebrityListDisplay = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((celebrity, index) => (
        <CelebrityListItem key={index} data={celebrity} />
      ))}
    </div>
  )
}

export default CelebrityListDisplay
