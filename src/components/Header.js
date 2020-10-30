import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from 'gatsby'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
    </div>
    <div className="content">
      <div className="inner">
        <h1>Jaco de Swart</h1>
        <p>
          Physicist. Bassplayer. Yogi. GlübenStrâuber.
          <br />
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("publications")
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

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
