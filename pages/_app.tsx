import throttle from 'lodash.throttle'
import { Provider } from 'mobx-react'
import App, {
  AppProps,
  Container,
  DefaultAppIProps,
  NextAppContext,
} from 'next/app'
import React from 'react'

import { Store } from 'store'
import withMobxStore from '../libs/withMobxStore'

interface IProps {
  mobxStore: Store
}

const throttleFn = throttle((ctx: MyApp) => {
  ctx.props.mobxStore.globalStore.setWidth(window.innerWidth || 0)
}, 500)

class MyApp extends App<IProps> {
  public static async getInitialProps({
    Component,
    router,
    ctx,
  }: NextAppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  constructor(props: IProps & DefaultAppIProps & AppProps) {
    super(props)
    this.handleResize = this.handleResize.bind(this)
  }

  public handleResize() {
    throttleFn(this)
  }

  public componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  public render() {
    const { Component, pageProps, mobxStore } = this.props
    return (
      <Container>
        <Provider store={mobxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withMobxStore(MyApp)
