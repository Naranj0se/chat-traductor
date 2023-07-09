import { useState, useEffect } from "react"

function useListContacts() {
    const [ listContacts, setListContacts ] = useState([])

    useEffect(()=> {
      
      setListContacts([]);
    }, [])

    
    return { listContacts }
}

export default useListContacts