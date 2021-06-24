import { globalHistory } from '@reach/router'
import { QueryParamProvider } from 'use-query-params'

function Providers({ children }) {
  return (
    <QueryParamProvider reachHistory={globalHistory}>
      {children}
    </QueryParamProvider>
  )
}

export default Providers
