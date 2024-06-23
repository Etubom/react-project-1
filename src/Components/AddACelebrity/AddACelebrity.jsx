const AddACelebrity = ({name,job,country,age,netWorth}) => {

    return (
        <form>
         <input
          type="text" 
          value={name}
          placeholder="Name"
        />
        <br/>
        <input
          type="text" 
          value={job}
          placeholder="Job"

        />
        <br/>
        <input
          type="text" 
          value={country}
          placeholder="Country"

        />
        <br/>
        <input
          type="text" 
          value={age}
          placeholder="Age"

        />
        <br/>
        <input
          type="text" 
          value={netWorth}
          placeholder="Net Worth"

        />
         <br/>
        <button>{"Add User"}</button>
        </form>
    )

} 

export default AddACelebrity