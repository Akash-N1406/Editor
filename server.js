/**
 * Standalone Y-WebSocket server
 * Compatible with y-websocket@1.5.4 and Node.js 18/20
 */

const http = require('http')
const WebSocket = require('ws')
const { setupWSConnection } = require('y-websocket/bin/utils')

const port = process.env.PORT || 1234

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Y-WebSocket Collab Server Running')
})

const wss = new WebSocket.Server({ noServer: true })

wss.on('connection', (ws, req) => {
  setupWSConnection(ws, req)
})

server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req)
  })
})

server.listen(port, () => {
  console.log(`Y-WebSocket server running at ws://localhost:${port}`)
})
