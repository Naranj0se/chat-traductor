import express from 'express'
import { createServer } from 'http'
import { Server as SocketServer } from 'socket.io'
import { getInboxChatsById, getMessagesForIdRoom, AddMessage, LoginAuth, updatedLastestMessage, getContactById, getNewInbox } from './controllers/Inbox.js'


import { UsernameRoutes, ContactsRoutes, AuthRoutes } from './routes/index.routes.js'

import cors from 'cors'

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use('/users', UsernameRoutes)
app.use('/contacts', ContactsRoutes)
app.use('/auth', AuthRoutes)

const server = createServer(app).listen(port)
const io = new SocketServer(server, { cors: { origin: "*"}})


io.use((socket, next) => {
  socket.id_user = parseInt(socket.handshake.query.id_user)

  next()
})

io.on('connection', socket => {

  //io.sockets.sockets.forEach((value, key) => {
  //  console.log(value.id_user)
  //})

    socket.on("socket:new_room", async data => {
      const { participants, id_room } = data
      const { id_user_adding, id_user_added } = participants

      const participantsArray = Object.keys(participants).map(key => participants[key]);

      const new_inbox = await getNewInbox(data)
      const { inbox_adding, inbox_added } = new_inbox
      
      io.to(`contacts-${id_user_adding}`).emit('socket:new_room', {id_room, inbox: inbox_adding})
      io.to(`contacts-${id_user_added}`).emit('socket:new_room', {id_room, inbox: inbox_added})
    })

    socket.on("contact:added", async data => {
      const id = data.participants.id_user_adding
      const res = await getContactById(data)

      io.to(`contacts-${id}`).emit("contact:added", res)
    })

    socket.on("socket:new_listen", id_room => socket.join(id_room))

    socket.on('inbox:initial_load', async id => {
      const res = await getInboxChatsById(id)
      if(res.length !== 0) {
        const rooms = res.map(r => r.id_room)
        socket.join(rooms)
      }
      socket.join(`contacts-${id}`)
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
