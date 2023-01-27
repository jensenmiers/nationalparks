import { useState } from 'react'
import Checkbox from './Checkbox'

function Filter({ }){

    const parkTypes = ['National Monument', 'National Park']

    const [formData, setFormData] = useState({})

    function updateFormData(e){
        setFormData({...formData, [e.target.name]: e.target.checked})
    }

    // const includedTypes = Object.entries(formData).reduce((acc, elem), {
    //     if(elem[])
    // })

    const typeBoxes = parkTypes.map(type => {
        return (
            <Checkbox type={type} 
                formData={formData} 
                onChangeCheck={updateFormData} 
            />
        )
    })

    return (
        <div>
            {typeBoxes}
            <button onClick={console.log}>Apply filter</button>
        </div>
    )

}
export default Filter