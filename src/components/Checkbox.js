import useState from 'react'

function CheckBox({ type, formData, onChangeCheck }){


    return(
        <div>
                <label>{type}</label>
                <input type='checkbox' 
                    value={type}
                    name={type} 
                    checked={formData[type] || true }
                    onChange={onChangeCheck}
                    />
        </div>
    )
}
export default CheckBox