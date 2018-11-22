import App, { Container, NextAppContext } from 'next/app'
import React from 'react'
import '../styles/_reset.css'

export default class MyApp extends App {
  public static async getInitialProps({ Component, router, ctx }: NextAppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
