import { action, observable } from 'mobx'

import GlobalStore from './globalStore'

let store: Store

export class Store {
  public globalStore: GlobalStore = new GlobalStore()
  @observable public lastUpdate = 0

  constructor(isServer: boolean, lastUpdate: number) {
    this.lastUpdate = lastUpdate
  }
}

// 根据判断当前环境是 服务端 还是客户端
// 服务端 每次返回新实例
// 客户端 根据是否 已经有单例 实例
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
