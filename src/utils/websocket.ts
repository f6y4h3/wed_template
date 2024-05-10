// const socket = new WebSocket('ws://locahost:8080')
import { getToken } from './auth'

class socket {
  private socketInstance: null | WebSocket = null
  private socketUrl: string = ''
  constructor(url: string = '') {
    this.socketUrl = url
    this.connect()
  }
  connect(url?: string) {
    if (url) {
      this.socketUrl = url
    }
    this.socketInstance = new WebSocket(this.socketUrl, [getToken()])
  }
  send(data: any) {
    if (this.socketInstance) {
      this.socketInstance.send(data)
    } else {
      console.error('websocket is not connected')
    }
  }
  onMessage(callback: (data: any) => void) {
    if (this.socketInstance) {
      this.socketInstance.onmessage = (data: any) => {
        // console.log(data,'datadatadata');
        callback(JSON.parse(data.data))
      }
    } else {
      console.error('websocket is not connected')
    }
  }
  onOpen(callback: () => void) {
    if (this.socketInstance) {
      this.socketInstance.onopen = callback
    }
  }
  close() {
    this.socketInstance?.close()
    this.socketInstance = null
  }
  isConnect() {
    return this.socketInstance != null
  }
}
let instance: socket | null = null
function getInstance(url: string): socket {
  if (instance) {
    return instance
  }
  return (instance = new socket(url))
}
export default getInstance
