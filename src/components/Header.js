import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = props => {
  const data = useStaticQuery(graphql`
    query q {
      datoCmsSubtitle {
        body
      }
    }
  `)
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo"></div>
      <div className="content">
        <div className="inner">
          <h1>Jaco de Swart</h1>
          <p>
            {data.datoCmsSubtitle.body}
            <br />
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('publications')
              }}
            >
              Science
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('publications')
              }}
            >
              Television
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('publications')
              }}
            >
              Talks
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              Teaching
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              Music
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
