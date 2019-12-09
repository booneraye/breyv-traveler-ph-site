import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
`

const ReadingTime = styled.p`
  display: inline-block;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>📅 {props.date}</Date>
      <span>•</span>
      <ReadingTime>{`⏱️${props.timeToRead} min read `}</ReadingTime>
    </Wrapper>
    <Wrapper>
        <div
            class="fb-share-button"
            data-href={props.shareLink}
            data-layout="button"
            data-size="large">
                <a target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbreyvtraveler.com%2Fsaving-the-world-from-boredom-play-nation-saves-the-world%2F&amp;src=sdkpreparse"
                    class="fb-xfbml-parse-ignore">Share</a>
        </div>
    </Wrapper>
  )
}

export default PostDetails
