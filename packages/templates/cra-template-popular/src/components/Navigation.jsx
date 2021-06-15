import { css } from '@emotion/react'
import { Link } from '@reach/router'
import { rgba } from 'polished'
import React from 'react'

const navCSS = css`
  background-color: white;
  border-bottom: 1px solid whitesmoke;
  min-height: 50px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
`

const linkCSS = css`
  /* background-color: lavender; */
  color: ${rgba('slateblue', 0.6)};
  font-size: 18px;
  padding: 8px 18px;
  margin: 0 12px;
  position: relative;
  display: flex;
  align-items: center;
  font-weight: bold;

  &[aria-current='page'] {
    color: slateblue;
    box-shadow: 0 -1px 0 slateblue inset;
  }
`

function Navigation({ children }) {
  // Make sure children is an array
  const arrayChildren = React.Children.toArray(children.props.children)

  return (
    <nav className='Navigation' css={navCSS}>
      {arrayChildren.map((child) => {
        const { path, label } = child.props

        if (child.props.path === undefined) {
          throw new Error(`${child.type.name} should have path prop.`)
        }

        // Render nav link by nested routes
        return (
          <Link to={path} key={path} css={linkCSS}>
            {label ?? child.type.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation
