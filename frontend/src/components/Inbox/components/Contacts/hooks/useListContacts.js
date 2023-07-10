import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../../../../store/context/user/UserContext"

function useListContacts() {
    const [ listContacts, setListContacts ] = useState([])

    const {user_data: {id}} = useContext(UserContext)

    useEffect(()=> {
      fetch(`http://localhost:4000/contacts/${id}`)
      .then((response) => response.json())
      .then((body) => {

        setListContacts(body.data)

      })
    }, [id])

    
    return { listContacts }
}

export default useListContacts