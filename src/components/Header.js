import PropTypes from 'prop-types'
import React from 'react'
import { Link, navigate } from 'gatsby'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-tree"></span>
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
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/publications/")
            }}
          >
            Publications
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('publications')
            }}
          >
            Press
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
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
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
