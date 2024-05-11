// const socket = new WebSocket('ws://locahost:8080')
import { getToken, getRefreshToken, setToken } from './auth'
import api from '@/api'

class socket {
  private socketInstance: null | WebSocket = null
  private socketUrl: string = ''
  private callback: (data: any) => void = () => {}
  private msgList: any[] = []
  private isRefreshToken: boolean = false
  constructor(url: string = '') {
    this.socketUrl = url
    this.init()
  }
  init() {
    this.socketInstance = new WebSocket(this.socketUrl, [getToken()])
    this.onOpen()
  }
  reconnect() {
    if (this.socketInstance) return
    this.init()
    this.onMessage(this.callback)
    this.isRefreshToken = false
    console.log('重新连接')
  }
  send(data: any) {
    if (this.socketInstance) {
      if (this.isRefreshToken) {
        this.msgList.push(data)
        return
      }
      this.socketInstance.send(JSON.stringify(data))
    } else {
      console.error('websocket is not connected')
    }
  }
  onMessage(callback: (data: any) => void) {
    this.callback = callback
    let resultData: { event: string; data: { message?: string } } = {
      event: '',
      data: {}
    }
    if (this.socketInstance) {
      this.socketInstance.onmessage = async (data: any) => {
        resultData = JSON.parse(data.data)
        // 携带token失效，刷新token
        if (resultData.event == 'tokenFailure') {
          if (resultData.data?.message) {
            this.msgList.push({ event: 'message', data: resultData.data })
          }
          this.close()
          this.isRefreshToken = true
          const data = await api.refreshToken({ refresh_token: getRefreshToken() })
          setToken(data)
          this.reconnect()
          return
        } else {
          console.log(resultData)
          callback(resultData.data)
        }
      }
    } else {
      console.error('websocket is not connected')
    }
  }
  onOpen() {
    if (this.socketInstance) {
      this.socketInstance.onopen = () => {
        if (this.msgList.length) {
          for (const msg of this.msgList) {
            this.send(msg)
          }
          this.msgList = []
        }
      }
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
