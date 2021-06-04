import { css } from '@emotion/react'
import { normalize } from 'polished'

export default css`
  ${normalize()}

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
