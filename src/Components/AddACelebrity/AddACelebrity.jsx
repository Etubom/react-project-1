import {useState} from "react"
import styles from './styles.module.css'


const AddACelebrity = () => {
    const [name, setName]=useState('')
    const [job, setJob]=useState('')
    const [country, setCountry]=useState('')
    const [age, setAge]=useState('')
    const [netWorth, setNetWorth]=useState('')
    const [validationCheck, setValidationCheck]=useState(false)

    const handleSubmit = (event )=> {
        event.preventDefault();
        setValidationCheck(true)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
             <input
              type="text" 
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className={styles.formInput}
            />
            <br/>
            <input
              type="text" 
              value={job}
              placeholder="Job"
              onChange={(e) => setJob(e.target.value)}
              className={styles.formInput}
            />
            <br/>
            <input
              type="text" 
              value={country}
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
              className={styles.formInput}

            />
            <br/>
            <input
              type="text" 
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              className={styles.formInput}

            />
            <br/>
            <input
              type="text" 
              value={netWorth}
              placeholder="Net Worth"
              onChange={(e) => setNetWorth(e.target.value)}
              className={styles.formInput}

            />
             <br/>
             <div className={styles.submitBtn}>
                <button type="submit">{"Add User"}</button>
             </div>
            {
            validationCheck && !name && 
            <p className={styles.formError}>Please insert a name value</p>
            }
             {
            validationCheck && !job && 
            <p className={styles.formError}>Please insert a job value</p>
            }
             {
            validationCheck && !country && 
            <p className={styles.formError}>Please insert a country value</p>
            }
             {
            validationCheck && !age &&
             <p className={styles.formError}>Please insert a age value</p>
            }
             {
            validationCheck && !netWorth && 
            <p className={styles.formError}>Please insert a net worth value</p>
            }
            </form>
        </div>
    )

} 

export default AddACelebrity