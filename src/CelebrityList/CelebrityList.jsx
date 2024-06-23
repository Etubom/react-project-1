import {useState} from "react"
import CelebrityListItem from "../Components/CelebrityListItem/CelebrityListItem"
import AddACelebrity from "../Components/AddACelebrity/AddACelebrity"
import './index.css'
const CelebrityList = () => {
    const [name, setname]=useState('')
    const [job, setJob]=useState('')
    const [country, setCountry]=useState('')
    const [age, setAge]=useState('')
    const [netWorth, setNetWorth]=useState('')



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
    <>
        <div className="myForm">
            <AddACelebrity
            name={name}
            job={job}
            country={country}
            age={age}
            networth={netWorth}
            />
        </div>
        <div className="container">
            {data.map((celebrity, index) => (
                <CelebrityListItem key={index} data={celebrity} />
            ))}
        </div>
    </>
 )
}

export default CelebrityList