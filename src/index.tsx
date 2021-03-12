import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import HttpsRedirect from 'react-https-redirect'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import GlobalStyle from './style/Global'
import App from './pages/App'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import Providers from './Providers'
import 'inter-ui'
import './i18n'

if ('ethereum' in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false
}

window.addEventListener('error', () => {
   localStorage?.removeItem('redux_localstorage_simple_lists')
})

ReactDOM.render(
  <StrictMode>
    <HttpsRedirect>
      <Providers>
        <>
          <ListsUpdater />
          <ApplicationUpdater />
          <TransactionUpdater />
          <MulticallUpdater />
        </>
        <ResetCSS />
        <GlobalStyle />
        <App />
      </Providers>
    </HttpsRedirect>
  </StrictMode>,
  document.getElementById('root')
)
