import Link from 'next/link'
import * as React from 'react'

import LogoSVG from 'assets/svg/logo.svg'
import TopNav from 'components/TopNav'
import Style from './style.css'

export default class Index extends React.Component {
  public static getInitialProps() {
    // console.log(123)
    return {}
  }

  public render() {
    return (
      <div className={Style.index}>
        <TopNav />
        <Link href="/about">
          <a>跳转About</a>
        </Link>
        <LogoSVG />
      </div>
    )
  }
}
