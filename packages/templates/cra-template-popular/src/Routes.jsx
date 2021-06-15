/**
 * Routes
 */

import { Router } from '@reach/router'
import HomePage from './containers/HomePage'
import PageWrapper from './containers/PageWrapper'

function Routes() {
  return (
    <Router id='router'>
      <PageWrapper path='/'>
        <HomePage path='home' label='Home' />
      </PageWrapper>
    </Router>
  )
}

export default Routes
