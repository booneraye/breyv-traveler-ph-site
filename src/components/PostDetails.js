import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 80%;
    span {
        margin: 0 0.5rem;
    }
    @media (max-width: 600px)  {
        max-width: 100%;
    }
`

const Date = styled.p`
  display: inline-block;
`

const ReadingTime = styled.p`
  display: inline-block;
`

const Author = styled.p`
  display: inline-block;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>📅 {props.date}</Date>
      <span>•</span>
      <ReadingTime>{`⏱️${props.timeToRead} min read `}</ReadingTime>
      <span>•</span>
      <Author>{`Written by ${props.writtenBy}`}</Author>
    </Wrapper>
  )
}

export default PostDetails
