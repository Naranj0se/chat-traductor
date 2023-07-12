import io from "socket.io-client"

const devModeShared = false

const urlDev = devModeShared ? "http://192.168.1.116:4000" : "http://localhost:4000"

const initialState = {
    user_data: JSON.parse(localStorage.getItem('user_data')) || null
}

const id_user = initialState.user_data !== null ? initialState.user_data.id : 0

const socket = io(urlDev, { query: { id_user }, autoConnect: false  })

socket.onAny((event, ...args) => {
    console.log(event, args);
});

export default socket