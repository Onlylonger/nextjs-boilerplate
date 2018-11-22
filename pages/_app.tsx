import { Provider } from 'mobx-react'
import App, { Container, NextAppContext } from 'next/app'
import React from 'react'
import { Store } from 'store'
import withMobxStore from '../libs/withMobxStore'

interface IProps {
  mobxStore: Store
}

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
