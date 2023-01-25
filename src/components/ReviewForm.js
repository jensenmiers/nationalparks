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
            <button type='submit'> Add Review </button>
        </form>
        
        </div>
    )
}

export default ReviewForm; 