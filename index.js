const app = require('./app')
const http = require('http')
const socketIo = require('socket.io')
const port = 3001

const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', socket => {
  console.log('a user connected')

  socket.on('chat', data => {
    console.log(data)
    io.emit('chat', data)
  })
  socket.on('typing', () => {
    console.log('User typing')
    socket.broadcast.emit('typing')
  })
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`))
