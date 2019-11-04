import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"
import headerImage from "./icon.png"

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <img
        src={headerImage}
        alt="Gatsby Netlify Header"
        className={headerStyles.headerImage}
      />
      <h1 className={headerStyles.title}>Gatsby + Netlify</h1>
      <p className={headerStyles.tagline}>Best Combination in History</p>
      <div className={headerStyles.linkBox}>
        <Link to="/" className={headerStyles.buttonLinks}>
          Home
        </Link>
        <Link to="/about" className={headerStyles.buttonLinks}>
          About
        </Link>
        <Link to="/blog" className={headerStyles.buttonLinks}>
          Blog
        </Link>
        <Link to="/blog" className={headerStyles.buttonLinks}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
