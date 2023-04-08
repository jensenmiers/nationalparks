import {useState, createContext} from 'react'

const ParkContext = createContext()

function ParkProvider({children}){
    const [parks, setParks] = useState([])
    const value = [parks, setParks]

    return(
        <ParkContext.Provider value={value}>
            {children}
        </ParkContext.Provider>
    )
}
export {ParkProvider, ParkContext}