import React from 'react'
import { Global } from '@emotion/react'
import Routes from './Routes'
import globalCss from './global.css'

function App() {
  return (
    <>
      <Global styles={globalCss} />
      <Routes />
    </>
  )
}

export default App
