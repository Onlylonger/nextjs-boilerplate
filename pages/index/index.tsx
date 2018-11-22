import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import * as React from 'react'

import LogoSVG from 'assets/svg/logo.svg'
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
        <Link href="/about">
          <a>跳转About{this.props.store.globalStore.width}</a>
        </Link>
        <LogoSVG />
      </div>
    )
  }
}
