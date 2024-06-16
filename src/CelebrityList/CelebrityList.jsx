
import data from "../data/data.json"
import CelebrityListItem from "../CelebrityListItem/CelebrityListItem"
const CelebrityList = () => {
    console.log('My data will be:::',data)
 return (
    <>
        <CelebrityListItem data={data}/>
        {"Random screen text"}
    </>
 )
}

export default CelebrityList