import * as React from 'react'
import Style from './style.css'
import TopNav from '../../components/TopNav'

export default class Index extends React.Component {
  render() {
    return (
      <div className={Style.index}>
        <TopNav />
      </div>
    )
  }
}
