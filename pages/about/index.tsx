import * as React from 'react'

import Style from './style.css'

export default class About extends React.Component {
  public static getInitialProps() {
    // console.log(456)
    return {}
  }

  public render() {
    return <div className={Style.index}>About</div>
  }
}
