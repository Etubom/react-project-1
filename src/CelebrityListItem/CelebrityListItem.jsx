
const CelebrityListItem = (props) => {
    return(
        
        props.map((item ) => {

        <><p>`Name : ${item.name}`</p><p>`Job : ${item.job}`</p><p>`Country: ${item.country}`</p><p>`Age: ${item.age}`</p><p>`Net Worth: ${item.netWorth}`</p></>
        })
        
    )
}

export default CelebrityListItem