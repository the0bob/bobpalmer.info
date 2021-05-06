/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import Header from "./header"
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="container bg-dark p-2 mt-n4">{children}</main>
        <footer className="m-3 p-2 text-center small text-muted">
          © {new Date().getFullYear()} Bob Palmer, Built with
          {` `}
          <a className="text-muted" href="https://www.gatsbyjs.org">Gatsby</a>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="https://www.linkedin.com/in/im-bob/">
                <i className="fab fa-linkedin fa-fw fa-3x"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="https://github.com/the0bob">
                <i className="fab fa-github fa-fw fa-3x"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="https://codepen.io/the0bob/">
                <i className="fab fa-codepen fa-fw fa-3x"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="https://www.hackerrank.com/the0bob/">
                <i className="fab fa-hackerrank fa-fw fa-3x"></i>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout