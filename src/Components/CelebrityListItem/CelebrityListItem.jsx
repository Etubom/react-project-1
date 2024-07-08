import { useContext } from 'react'
import styles from './styles.module.css'
import { CelebrityContext } from '../../Context/CelebrityProvider'

const CelebrityListItem = () => {
  const { data } = useContext(CelebrityContext)
  return (
    <div className={styles.celebritySection}>
      <div className={styles.celebrityName}>
        <p>{data.name}</p>
      </div>
      <p>
        <span className={styles.detailsHeading}>Job:</span> {data?.job}
      </p>
      <p>
        <span className={styles.detailsHeading}>Country:</span> {data.country}
      </p>
      <p>
        <span className={styles.detailsHeading}>Age:</span> {data.age}
      </p>
      <p>
        <span className={styles.detailsHeading}>Net Worth:</span>{' '}
        {data.netWorth}
      </p>
    </div>
  )
}
export default CelebrityListItem
