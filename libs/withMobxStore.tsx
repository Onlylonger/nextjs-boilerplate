import { NextAppContext } from 'next/app'
import React from 'react'

import { initializeStore, Store } from 'store'

const isServer = typeof window === 'undefined'
const __NEXT_MOBX_STORE__ = '__NEXT_MOBX_STORE__'

interface IWindow {
  [key: string]: any // Add index signature
}

function getOrCreateStore(initialState: boolean) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!(window as IWindow)[__NEXT_MOBX_STORE__]) {
    (window as IWindow)[__NEXT_MOBX_STORE__] = initializeStore(initialState)
  }
  return (window as IWindow)[__NEXT_MOBX_STORE__]
}

export default (App: any) => {
  return class AppWithMobx extends React.Component {
    public static async getInitialProps(appContext: NextAppContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const tmpMobxStore = getOrCreateStore(false)

      // Provide the store to getInitialProps of pages
      // @ts-ignore
      appContext.ctx.mobxStore = tmpMobxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext)
      }

      return {
        ...appProps,
        initialMobxState: tmpMobxStore,
      }
    }
    public mobxStore: Store

    constructor(props: any) {
      super(props)
      this.mobxStore = getOrCreateStore(props.initialMobxState)
    }

    public render() {
      return <App {...this.props} mobxStore={this.mobxStore} />
    }
  }
}
