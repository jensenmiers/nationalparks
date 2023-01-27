
function ReviewListItem( {review} ) {

    return (
        <div className='reviewListItem'>
            {/* <ul> */}
                <p className='reviewDetailText'> {`${review.reviewText}`} </p> 
                <p className='reviewDetailText'>{`Rating: ${review.reviewNum} stars `}</p>    
            {/* </ul> */}
        </div>
    )

}

export default ReviewListItem