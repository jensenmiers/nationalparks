
function CheckBox({ type, formData, onChangeCheck }){


    return(
        <div className="checkboxItem">
                <label>{`${type[0]} (${type[1]})`}</label>
                <input type='checkbox' 
                    value={type[0]}
                    name={type[0]} 
                    checked={formData[type[0]]===undefined ? true : formData[type[0]]}
                    onChange={onChangeCheck}
                    />
        </div>
    )
}
export default CheckBox