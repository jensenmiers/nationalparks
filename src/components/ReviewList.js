import React from 'react';
import ReviewListItem from './ReviewListItem';

function ReviewList ({reviews}) {

    const reviewList = reviews.map(review => <ReviewListItem review={review} /> );

    return (
        <div>
            <p>User reviews:</p>
            {reviewList}
        </div>
        
    )

}


export default ReviewList;