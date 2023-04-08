import { useState } from 'react'
import Checkbox from './Checkbox'

function Filter({ parkTypeList, setTypesToDisplay, buttonLabel }){

    const DEFAULT = Object.fromEntries(parkTypeList.map(arr => [arr[0], true]))
    const DEFAULTFALSE = Object.fromEntries(parkTypeList.map(arr => [arr[0], false]))

    const [formData, setFormData] = useState(DEFAULT)
    const [isHidden, setIsHidden] = useState(true)

    function updateFormData(e){
        setFormData({...formData, [e.target.name]: e.target.checked})
    }

    const typeBoxes = parkTypeList.map(type => {
        return (
            <Checkbox key={type[0]}
                type={type} 
                formData={formData} 
                onChangeCheck={updateFormData} 
            />
        )
    })

    return (
        <div className="typeFilter">
            <div className="showFilterButtonContainer"><button className="filterButton" onClick={()=>setIsHidden(!isHidden)}>{isHidden ? `Filter by ${buttonLabel}` : "Hide filter"}</button></div>
            {isHidden? null : <div><div className="typeCheckboxContainer">{typeBoxes}</div>
            <div className="typeFilterButtonContainer">
                <div className="typeFilterButton" ><button onClick={(e)=>{
                    setFormData(DEFAULTFALSE)
                    //setTypesToDisplay([])
                }}>Clear</button></div>
                <div className="typeFilterButton"><button  onClick={(e)=>{
                    setFormData(DEFAULT)
                    //setTypesToDisplay(Object.keys(DEFAULT))
                }}>Select All</button></div>
                <div className="typeFilterButton" ><button onClick={()=>setTypesToDisplay(Object.entries(formData).filter(pair => pair[1]).map(pair => pair[0]))}>Apply filter</button></div>

            </div>
            </div>
            }
        </div>
    )

}
export default Filter