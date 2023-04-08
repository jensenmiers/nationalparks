import React from 'react';
import ReviewListItem from './ReviewListItem';

function ReviewList ({reviews}) {

    const reviewList = reviews.map(review => <ReviewListItem review={review} key={Date.now()}/> );

    return (
        <div className='reviewList'>
            <p><u>User reviews:</u></p>
            {reviews.length === 0 ? <p> Be the first to review this location! </p> : reviewList}
        </div>
        
    )

}


export default ReviewList;