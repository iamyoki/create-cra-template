import { css, keyframes } from '@emotion/react'
import Center from 'components/Center'
import { RiReactjsFill } from 'react-icons/ri'

const spinAni = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`

/**
 * HomePage
 */
function HomePage() {
  return (
    <Center
      className='HomePage'
      css={css`
        code {
          background-color: whitesmoke;
          color: slategray;
          border-radius: 2px;
          padding: 4px 8px;
          font-size: 14px;
        }
      `}>
      <RiReactjsFill
        size='8rem'
        color='royalblue'
        css={css`
          animation: ${spinAni} 4s linear infinite;
        `}
      />
      <h2>Cra Template Popular</h2>
      <code>
        yarn create react-app --template <strong>popular</strong>
      </code>
    </Center>
  )
}

export default HomePage
