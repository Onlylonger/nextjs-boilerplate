import * as React from 'react'
import TopNav from '../../components/TopNav'
import Style from './style.css'

export default class Index extends React.Component {
  render() {
    return (
      <div className={Style.index}>
        <TopNav />
      </div>
    )
  }
}
