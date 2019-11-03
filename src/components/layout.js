import React from "react"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import Header from "./header"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
    </div>
  )
}

export default Layout
