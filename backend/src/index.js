import express from 'express'
import { createServer } from 'http'
import { Server as SocketServer } from 'socket.io'
import { getInboxChatsById, getMessagesForIdRoom, AddMessage, LoginAuth, updatedLastestMessage } from './controllers/Inbox.js'

const app = express()
const port = process.env.PORT || 4000

app.get('/api/hola', function (req, res) {
  return res.status(200).send("Hello World!");
});

const server = createServer(app)
const io = new SocketServer(server, { cors: { origin: "*"}})

io.listen(port);

io.on('connection', socket => {

    socket.on('sending_initial_info', async id => {
      const res = await getInboxChatsById(id)
      const rooms = res.map(r => r.id_room)
      socket.join(rooms)
      socket.emit('sending_initial_info', res)
    })

    socket.on('loading_message', async id_room => {
      const res = await getMessagesForIdRoom(id_room)
      socket.emit('loading_message', res)
    })

    socket.on('client_message', async body => {
      const { id_room, message, id_user } = body
      const res = await AddMessage({id_room, message, id_user})
      const new_message = res[0]

      socket.to(id_room).emit('client_message', new_message)
    })

    socket.on('auth:login', async body => {
      const res = await LoginAuth(body)
      socket.emit('auth:login', res)
    })

    socket.on('message:read', async body => {
      const res = await updatedLastestMessage(body)
    })
})
