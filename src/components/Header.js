import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useContactInfo } from '../queries'

const Header = props => {
  const data = useStaticQuery(graphql`
    query q {
      datoCmsSubtitle {
        body
      }
    }
  `)

  const { email } = useContactInfo()


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
          <ul className="icons">
            <li>
              <a
                href={`mailto:${email}`}
                className="icon fa-envelope" target="_blank" rel="noreferrer"
              >
                <span className="label">UVA</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jgdeswart"
                className="icon fa-twitter" target="_blank" rel="noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/jacodeswart" target="_blank" rel="noreferrer" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.uva.nl/profiel/s/w/j.g.deswart/j.g.deswart.html"
                className="icon fa-university" target="_blank" rel="noreferrer"
              >
                <span className="label">UVA</span>
              </a>
            </li>
          </ul>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
