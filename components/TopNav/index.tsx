import { inject } from 'mobx-react'
import * as React from 'react'

import { Store } from 'store'
import Style from './style.css'

interface IProps {
  store?: Store
}

@inject('store')
class TopNav extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={Style.topNav}>
        <div className={Style.topNavContent}>
          TopNav{this.props.store ? this.props.store.globalStore.width : ''}
        </div>
      </div>
    )
  }
}

export default TopNav
