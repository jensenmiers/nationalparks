import React,{useState} from 'react';

function ReviewForm({setReviewForm}) {

    const [formData,setFormData] = useState('')

    const defaultForm = ''

    const defaultRating = ''
   

    const [ratingNum, setRatingNum] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        setReviewForm({
            reviewText: formData,
            reviewNum: ratingNum})
        setFormData(defaultForm)
        setRatingNum(defaultRating)
    }

    function handleChange(e) {
        setFormData(e.target.value);
    }

    function handleRating(e) {
        setRatingNum(e.target.value)
    }
    
    return(
        <div className='reviewForm'>
        <form onSubmit={handleSubmit} >
            <h4>Reviews </h4>
            <label >Post a review: </label>
            <input onChange={handleChange} 
                value={formData} 
                type='textarea' 
                name='review' 
                placeholder='write about your experience here'
                size='100' />
            <br></br>
            <br></br>
            <label >Rate: </label>

            <label><input onChange={handleRating} 
                value='1'
                type='radio'
                name='rate'
                id='star1'  />1</label>
            <label><input onChange={handleRating} 
                value='2'
                type='radio'
                name='rate'
                id='star2'  />2</label>
            <label><input onChange={handleRating} 
                value='3'
                type='radio'
                name='rate'
                id='star3'  />3</label>
            <label><input onChange={handleRating} 
                value='4'
                type='radio'
                name='rate'
                id='star4'  />4</label>
            <label><input onChange={handleRating} 
                value='5'
                type='radio'
                name='rate'
                id='star5'  />5</label>
            <br></br>
            <br></br>

            <button type='submit'> Add Review </button>
        </form>
        
        </div>
    )
}

export default ReviewForm; 