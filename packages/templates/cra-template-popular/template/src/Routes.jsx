import { Router } from '@reach/router'
import Navigation from './components/Navigation'
import FirstPage from './pages/first-page'
import SecondPage from './pages/second-page'

function Routes() {
  return (
    <Router id='router'>
      <Navigation path='/'>
        <FirstPage path='first' label='First' />
        <SecondPage path='second' label='Second' />
      </Navigation>
    </Router>
  )
}

export default Routes
