import { FaMapMarkerAlt} from 'react-icons/fa'

function ZipSearch({zipSearchTerm, handleZipSearch, handleSubmitZip}){
    return(
        <div className="searchContainer">
            <FaMapMarkerAlt className="zipSearchIcon" />
            <input
                className="zipSearchBox"
                value={zipSearchTerm}
                type='text'
                id='zip'
                placeholder='Search by ZIP ...'
                onChange={(e) => handleZipSearch(e.target.value)}
            />
            <button className="zipSearchButton" onClick={()=>handleSubmitZip(zipSearchTerm)}>Find stuff near me!</button>
        </div>
    )
}

export default ZipSearch;