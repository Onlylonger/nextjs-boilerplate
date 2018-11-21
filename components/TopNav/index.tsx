import * as React from 'react'
import Style from './style.css'

export default class TopNav extends React.Component {
  public render() {
    return (
      <div className={Style.topNav}>
        <div className={Style.topNavContent}>TopNav</div>
      </div>
    )
  }
}
