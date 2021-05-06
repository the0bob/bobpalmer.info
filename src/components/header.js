
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    {/* <div className="mt-1">
      <div className="d-inline-block">
        <ul className="nav mt-n1">
          <li>
            <StaticImage className="mt-2 mr-1" src="../images/logo-long.png" alt="Playitec Games" width="300"/>
          </li>
        </ul>
      </div>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
