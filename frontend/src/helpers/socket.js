import io from "socket.io-client"

const devModeShared = true

const urlDev = devModeShared ? "http://192.168.1.116:4000" : "http://localhost:4000"

const socket = io(urlDev)

export default socket