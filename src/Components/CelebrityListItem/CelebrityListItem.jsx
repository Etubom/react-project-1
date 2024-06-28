import './index.css'
const CelebrityListItem = ({ data }) => {
  return (
    <div className="celebrity-section">
      <div className="celebrity-name ">
        <p>{data.name}</p>
      </div>
      <div className="celebrity-details">
        <p>
          <span className="details-heading">Job:</span> {data.job}
        </p>
        <p>
          <span className="details-heading">Country:</span> {data.country}
        </p>
        <p>
          <span className="details-heading">Age:</span> {data.age}
        </p>
        <p>
          <span className="details-heading">Net Worth:</span> {data.netWorth}
        </p>
      </div>
    </div>
  )
}

export default CelebrityListItem
