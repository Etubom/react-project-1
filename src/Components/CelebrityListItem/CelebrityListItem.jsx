import styles from './styles.module.css'

const CelebrityListItem = ({ data }) => {
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
