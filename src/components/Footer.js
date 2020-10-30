import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Built by: <a  target="_blank" rel="noreferrer" href="https://github.com/DonQueso89">DonQueso89</a> with: <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.org/">Gatsby.js</a> Theme design by: <a target="_blank" rel="noreferrer" href="https://html5up.net">HTML5 UP</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
