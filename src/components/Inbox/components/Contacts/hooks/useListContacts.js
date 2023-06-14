import { useState, useEffect } from "react"

function useListContacts() {
    const [ listContacts, setListContacts ] = useState([])

    useEffect(()=> {
      setListContacts(provitionalsContacts);
    }, [])

    const provitionalsContacts = [
        {
          user_id: "0VEBC8hSRoVwU0vv8dXb",
          username: "mycahfrn",
          name: "Mikael Fernandez",
          avatarURL: "/naranjo.jpg",
        },
        {
          user_id: "id1",
          username: "naranjose",
          name: "José Naranjo",
          avatarURL: "/naranjo.jpg",
        },
        {
          user_id: "id2",
          username: "jimmys",
          name: "Jimmy Stavisky",
          avatarURL: "/naranjo.jpg",
        },
        
      ]

    return { listContacts }
}

export default useListContacts