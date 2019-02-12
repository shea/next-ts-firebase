import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import configureStore from '../configureStore'
import { ApplicationState } from '../store'

import '../app.less'

interface PropsFromDispatch {
  [key: string]: any
}

// Any additional component props go here.
interface OwnProps {
  store: Store<ApplicationState>
}

// Create an intersection type of the component props and our Redux props.
type AllProps = PropsFromDispatch & OwnProps

class MyApp extends App<AllProps> {
  public render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Head>
          <title>Example App</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/static/favicon.ico" />
          {
            // <meta name="author" content="name" />
            // <meta name="description" content="description here" />
            // <meta name="keywords" content="keywords,here" />
            // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            // <link rel="manifest" href="/site.webmanifest"/>
            // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            // <meta name="msapplication-TileColor" content="#da532c"/>
            // <meta name="theme-color" content="#ffffff"/>
          }
        </Head>

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

// Apply Redux state and Redux Saga middleware to the application
export default withRedux(configureStore)(withReduxSaga({ async: true })(MyApp))
