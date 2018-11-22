import { action, observable } from 'mobx'

let store: Store

export class Store {
  public timer: any = 0
  @observable public lastUpdate = 0
  @observable public light = false

  constructor(isServer: boolean, lastUpdate: number) {
    this.lastUpdate = lastUpdate
  }

  @action public start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    }, 1000)
  }

  public stop = () => clearInterval(this.timer)
}

export function initializeStore(isServer: boolean, lastUpdate = Date.now()) {
  if (isServer) {
    return new Store(isServer, lastUpdate)
  } else {
    if (!store) {
      store = new Store(isServer, lastUpdate)
    }
    return store
  }
}
