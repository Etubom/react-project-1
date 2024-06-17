import CelebrityListItem from "../CelebrityListItem/CelebrityListItem"
import './index.css'
const CelebrityList = () => {
    const data = [
        {
            "name": "John Mayer",
            "job": "Singer",
            "country": "USA",
            "age": "44",
            "netWorth": "40M"
        },
        {
            "name": "Dwayne Johnson",
            "job": "Actor",
            "country": "USA",
            "age": "49",
            "netWorth": "320M"
        },
        {
            "name": "Mike Tyson",
            "job": "Boxer",
            "country": "USA",
            "age": "55",
            "netWorth": "10M"
        }
    ]
 return (
    <div className="container">
    {data.map((celebrity, index) => (
        <CelebrityListItem key={index} data={celebrity} />
    ))}
    </div>
 )
}

export default CelebrityList