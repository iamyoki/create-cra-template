import React from 'react'
import { Global } from '@emotion/react'
import Routes from './Routes'
import globalCss from './global.css'
import Providers from './components/Providers'

function App() {
  return (
    <Providers>
      <Global styles={globalCss} />
      <Routes />
    </Providers>
  )
}

export default App
