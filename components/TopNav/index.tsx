import className from 'classnames'
import { inject } from 'mobx-react'
import Link from 'next/link'
import * as React from 'react'

import LogoSVG from 'assets/svg/logo.svg'
import { Store } from 'store'

import Style from './style.css'

interface IProps {
  store?: Store
}

const navMenu = [
  {
    label: '首页',
    active: true,
    path: '/index',
  },
  {
    label: '关于',
    active: false,
    path: '/about',
  },
  {
    label: '团队',
    active: false,
    path: '/team',
  },
]

@inject('store')
class TopNav extends React.Component<IProps, {}> {
  public render() {
    return (
      <header className={Style.topNav}>
        <div className={Style.topNavContent}>
          <LogoSVG />
          <ul className={Style.topNavMenuWrap}>
            {navMenu.map((item, index) => (
              <li className={Style.topNavMenuLi} key={index}>
                <Link href={item.path}>
                  <a
                    className={className(Style.topNavMenuItem, {
                      [Style.active]: item.active,
                    })}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          {/* TopNav{this.props.store ? this.props.store.globalStore.width : ''} */}
        </div>
      </header>
    )
  }
}

export default TopNav
