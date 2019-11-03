import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <div className={blogStyles.post}>
              <div className={blogStyles.imageWrapper}>
                <div className={blogStyles.gatsbyImageOuterWrapper}>
                  <Img
                    className={blogStyles.image}
                    fluid={edge.node.frontmatter.image.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className={blogStyles.textBox}>
                <div className={blogStyles.blogHeader}>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <p>{edge.node.frontmatter.date}</p>
                </div>
                <p>{edge.node.frontmatter.intro}</p>
                <Link
                  className={blogStyles.readmore}
                  to={`/blog/${edge.node.fields.slug}`}
                >
                  Continue Reading →
                </Link>
              </div>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
