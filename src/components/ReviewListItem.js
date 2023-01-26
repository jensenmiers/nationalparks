
function ReviewListItem( {review} ) {

    return (
        <div>
            <ul>
                <li>{`${review.reviewText}  `}</li>    
                <li>{`Rating: ${review.reviewNum} of 5 `}</li>    
            </ul>
        </div>
    )

}

export default ReviewListItem