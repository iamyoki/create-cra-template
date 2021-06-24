import { css } from '@emotion/react'
import { normalize } from 'polished'

const normalizeBoxSizing = css`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

export default css`
  ${normalize()}
  ${normalizeBoxSizing}

  // Base
  html,body,#root,#router {
    height: 100%;
  }

  #router {
    display: flex;
    flex-direction: column;
  }

  button {
    border: none;
    cursor: pointer;

    &:active {
      opacity: 0.5;
    }
  }

  a {
    color: currentColor;
    text-decoration: none;

    &:active {
      opacity: 0.5;
    }
  }
`
