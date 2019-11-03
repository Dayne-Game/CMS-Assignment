import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import homeStyles from "./home.module.scss"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              intro
              image {
                childImageSharp {
                  fluid(maxWidth: 850) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className={homeStyles.container}>
        <div className={homeStyles.headerBox}>
          <h1>Gatsby + Netlify Website!</h1>
          <span></span>
        </div>
        <div className={homeStyles.textContent}>
          <h1>Introduction</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            efficitur a neque vel consectetur. Aliquam placerat tempus augue, a
            condimentum erat malesuada ac. Integer tortor dolor, finibus quis
            viverra vel, ultrices non eros. Donec ut mollis sapien. Sed dictum
            nunc sit amet ligula fermentum vehicula. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Proin tempor ipsum nec quam vestibulum vestibulum. Phasellus eu leo
            lectus. Aliquam cursus aliquam quam non volutpat. Maecenas laoreet
            elit pulvinar tortor fringilla fermentum vel eu neque. Cras libero
            arcu, rhoncus ut justo non, rutrum faucibus erat. Cras aliquam id
            magna a aliquet. Pellentesque libero est, lacinia eget eros ac,
            varius luctus lectus. Sed accumsan vel quam sed faucibus. Aenean
            lobortis, ipsum at tempus suscipit, ipsum dolor ultricies orci, eu
            euismod dolor tellus non dolor.
          </p>
        </div>
        <h1 className={homeStyles.newsHeader}>Latest News Posts</h1>
        <div className={homeStyles.gridContainer}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <div
                className={homeStyles.flipContainer}
                onTouchStart="this.classList.toggle('hover');"
              >
                <div className={homeStyles.flipper}>
                  <div className={homeStyles.front}>
                    <Img
                      className={homeStyles.thumbnail}
                      fluid={edge.node.frontmatter.image.childImageSharp.fluid}
                    />
                    <div className={homeStyles.newsText}>
                      <h1>{edge.node.frontmatter.title}</h1>
                    </div>
                  </div>
                  <div className={homeStyles.back}>
                    <div className={homeStyles.newsContentContainer}>
                      <p>{edge.node.frontmatter.intro}</p>
                      <Link
                        to={`/blog/${edge.node.fields.slug}`}
                        className={homeStyles.readmore}
                      >
                        Continue Reading →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
