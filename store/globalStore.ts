import { action, observable } from 'mobx'

class GlobalStore {
  @observable public width = 0

  constructor() {
    //
  }

  @action public setWidth = (val: number) => {
    this.width = val
  }
}

export default GlobalStore
