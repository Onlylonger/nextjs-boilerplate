import { inject, observer } from 'mobx-react'
import * as React from 'react'

import TopNav from 'components/TopNav'
import { Store } from 'store'
import Style from './style.css'

interface IProps {
  store: Store
}

@inject('store')
@observer
export default class Index extends React.Component<IProps> {
  public static getInitialProps() {
    // console.log(123)
    return {}
  }

  public componentDidMount() {
    //
  }

  public render() {
    return (
      <div className={Style.index}>
        <TopNav />
      </div>
    )
  }
}
