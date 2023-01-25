import React from 'react';
import ReviewListItem from './ReviewListItem';

function ReviewList ({reviews}) {

    const reviewList = reviews.map(review => <ReviewListItem review={review} /> );

    return (
        <div>
            {reviewList}
        </div>
        
    )

}


export default ReviewList;