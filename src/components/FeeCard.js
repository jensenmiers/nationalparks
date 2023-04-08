function feeCard({ feeObj }){
    return(
        <div className='feeCard'>
            <h3>{feeObj.title}: ${feeObj.cost}</h3>
            <p>{feeObj.description}</p>
        </div>
    )
}

export default feeCard;