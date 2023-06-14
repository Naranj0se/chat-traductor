import { useState, useEffect } from "react"

function useListInbox() {
    const [ listInbox, setListInbox ] = useState([])

    useEffect(()=> {
      setListInbox(provitionalsChats);
    }, [])

    const provitionalsChats = [
        {
          id_chat: 1,
          lastUpdated: "6:00 PM",
          username: "Mikael",
          summary: "Soy estoico, UwU",
          count: 5,
          avatarURL: "/naranjo.jpg"
        },
        {
          id_chat: 2,
          lastUpdated: "6:00 PM",
          username: "Naranjo",
          summary: "Soy hedonista, xd",
          count: 0,
          avatarURL: "/naranjo.jpg"
        },
        {
          id_chat: 3,
          lastUpdated: "6:00 PM",
          username: "Juan",
          summary: "Soy un caballo en un balcón",
          count: 5,
          avatarURL: "/naranjo.jpg"
        },  
        
      ]

    return { listInbox }
}

export default useListInbox