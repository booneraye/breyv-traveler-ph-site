import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 3em 1.5em 2em;
  flex-grow: 1;
  @media (max-width: 600px)  {
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
