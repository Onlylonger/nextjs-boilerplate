import * as React from 'react'
import LogoSVG from '../../assets/svg/logo.svg'
import TopNav from '../../components/TopNav'
import Style from './style.css'

export default class Index extends React.Component {
  render() {
    return (
      <div className={Style.index}>
        <TopNav />
        <LogoSVG />
      </div>
    )
  }
}
