# Cra Tempalte Popular

A [CRA](https://github.com/facebook/create-react-app/tree/master/packages/cra-template) template with the most popular libraries installed.

> This template was built by [create-cra-template](https://www.npmjs.com/package/create-cra-template), also called 'cct'. You can built your own template using cct.

## Essential popular libraries including

- [Reach Router](https://reach.tech/router/)
- [Emotion](https://emotion.sh/)
- [Polished](https://polished.js.org/)
- [React Icons](https://react-icons.github.io/react-icons)
- [React Use](https://github.com/streamich/react-use)
- [Use Query Params]()

## Router

Use [Reach Router](https://reach.tech/router/) instead of **react-router-dom**, because **reach router** is smaller and faster and more semantic.

Basic:

```js
function App() {
  return <Router>
    <HomePage path='/' />
    <Dashboard path='/dashboard'>
      <Tab1 path='/dashboard/1' />
      <Tab2 path='/dashboard/2' />
    </Dashboard>
  </Router>
}
```

Navigate to a route:

```js
import {navigate} from 'reach-router'

if(noAuth) navigate('/login')
```

Replace to a route:

```js
function SomePage({navigate}) {
  const replaceToHome = ()=>navigate('home', {replace: true})

  return ...

}
```

Global route listener, scroll to top when push:

```js
import {globalHistory} from 'reach-router'

globalHistory.listen(({ action }) => {
  if (action === 'PUSH')
    window.scrollTo({
      behavior: 'auto',
      top: 0,
    })
})
```

## CSS in JS

Use [Emotion](https://emotion.sh/) instead of [styled-components](https://styled-components.com/), because [Emotion](https://emotion.sh/) is more intuitive, also you can use `@emotion/styled` as `styled-components`. When you copy paste a part of component's html tags, it brings css, how convenient it is.

Basic example:

```js
import { css } from '@emotion/react'

function Button({children}) {
  return <button css={css`
    color: slateblue;
    background-color: whitesmoke;
  `}>{children}</button>
}
```

CSS selector:

```js
import { css } from '@emotion/react'

function Add() {
  return <div css={css`
    color: slateblue;
    background-color: whitesmoke;

    .add {
      font-size: 18px;
    }

    &:hover {
      .add {
        color: orangered;
      }
    }
  `}>
    <i className="add">+</i>
  </button>
}
```

Extract CSS:

```js
import { css } from '@emotion/react'

const addCSS = css`
  color: slateblue;
  background-color: whitesmoke;

  .add {
    font-size: 18px;
  }

  &:hover {
    .add {
      color: orangered;
    }
  }
`

function Add() {
  return <button css={addCSS}>
    <i className="add">+</i>
  </button>
}
```

Conditioal CSS:

```js
import { css } from '@emotion/react'

const toggleCSS = ...
const activeCSS = css`
  color: blue;
`

function Toggle({onOff}) {
  return <Switch css={[toggleCSS, onOff ? activeCSS : null]} />
}
```

Make util CSS:

```js
import { css } from '@emotion/react'

export const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const boxShadow = (deep=.5) => css`
  box-shadow: 0 0 10px ${rgba('black', deep)};
`
```
