import io from "socket.io-client"

const id_user = JSON.parse(localStorage.getItem('user_data'))?.id|| null

const auto_connect_option = Boolean(localStorage.getItem('isLogged')) || false
const URL_SOCKET = "http://localhost:4000"

const socket = io(URL_SOCKET, { query: { id_user }, autoConnect: auto_connect_option  })

socket.onAny((event, ...args) => {
    console.log(event, args);
});

export default socket