import express from 'express'
import { createServer } from 'http'
import { Server as SocketServer } from 'socket.io'
import { getInboxChatsById, getMessagesForIdRoom, AddMessage, LoginAuth, updatedLastestMessage } from './controllers/Inbox.js'
import { initialLoadingSocket, deleteSocket } from './socket/socket.js'


import { UsernameRoutes, ContactsRoutes } from './routes/index.routes.js'

import cors from 'cors'

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use('/users', UsernameRoutes)
app.use('/contacts', ContactsRoutes)

const server = createServer(app).listen(port)
const io = new SocketServer(server, { cors: { origin: "*"}})

io.on('connection', socket => {

    socket.on('initial_loading', async id_user => {
      const id_socket = socket.id
      await initialLoadingSocket({ id_user, id_socket })
    })

    socket.on("disconnect", async () => {
      await deleteSocket(socket.id)
    })

    socket.on("room:create", async participants => {
      
    })


    socket.on('inbox:initial_load', async id => {
      const res = await getInboxChatsById(id)
      const rooms = res.map(r => r.id_room)

      socket.join(rooms)
      socket.emit('inbox:initial_load', res)
    })

    socket.on('messages:getMessagesByIdRoom', async id_room => {
      const res = await getMessagesForIdRoom(id_room)
      socket.emit('messages:getMessagesByIdRoom', res)
    })

    socket.on('messages:clientSendMessage', async body => {
      const { id_room, message, id_user } = body
      const res = await AddMessage({id_room, message, id_user})
      const new_message = res[0]
      
      socket.emit("messages:clientSendMessage", new_message)
      socket.to(id_room).emit("messages:clientSendMessage", new_message)
    })

    socket.on('auth:login', async body => {
      const res = await LoginAuth(body)
      socket.emit('auth:login', res)
    })

    socket.on('messages:readInbox', async body => {
      const res = await updatedLastestMessage(body)
      const { id_room } = body

      
      socket.emit("messages:readInbox", id_room)
      socket.to(id_room).emit("messages:readInbox", id_room)
    })
})
