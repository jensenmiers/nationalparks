import React,{useState} from 'react';

function ReviewForm({setReviewForm}) {

    const [formData,setFormData] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        setReviewForm(formData)
    }

    function handleChange(e) {
        setFormData(e.target.value);
    }

    
    return(
        <div>
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} 
                value={formData} 
                type='text' 
                name='review' 
                placeholder='Review this' />
            <input 
                value='1'
                type='radio'
                name='rate'
                id='star1'  />
            <label for='star1'>1</label>
            <input 
                value='2'
                type='radio'
                name='rate'
                id='star2'  />
            <label for='star2'>2</label>
            <input 
                value='3'
                type='radio'
                name='rate'
                id='star3'  />
            <label for='star3'>3</label>
            <input 
                value='4'
                type='radio'
                name='rate'
                id='star4'  />
            <label for='star4'>4</label>
            <input 
                value='5'
                type='radio'
                name='rate'
                id='star5'  />
            <label for='star5'>5</label>
            <button type='submit'> Add Review </button>
        </form>
        
        </div>
    )
}

export default ReviewForm; 