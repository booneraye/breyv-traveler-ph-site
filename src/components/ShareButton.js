import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`
const ShareButton = props => {
  return (
    <Wrapper>
        <div
            class="fb-like"
            data-href={props.shareLink}
            data-layout="button"
            data-size="large"
            data-action="like"
            data-share="true">
        </div>
    </Wrapper>
  )
}

export default ShareButton
