import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    float: left;
    transition: 0.2s;
    background: ${props => props.theme.colors.tertiary};
    padding: 0.5em;
    border-radius: 2px;
    text-transform: capitalize;
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    border: 1px solid ${props => props.theme.colors.secondary};
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
      <Tag>
        <div
            class="fb-share-button"
            data-href={props.shareLink}
            data-layout="button_count"
            data-size="large">
                <a target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbreyvtraveler.com%2Fsaving-the-world-from-boredom-play-nation-saves-the-world%2F&amp;src=sdkpreparse"
                class="fb-xfbml-parse-ignore">Share</a>
            </div>
      </Tag>
    </List>
  )
}

export default TagList
