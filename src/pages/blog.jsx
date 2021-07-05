import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as style from "../styles/blog.module.scss"

const Blog = (props) => {
    return (
        <Layout>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>開発記</h1>
                        {props.data.allMarkdownRemark.edges.map((singleBlog, index) => (
                            <div className={style.blogCard} key={index}>
                                <div className={style.textContainer}>
                                    <h3>{singleBlog.node.frontmatter.title}</h3>
                                    <p>{singleBlog.node.frontmatter.excerpt}</p>
                                    <p>{singleBlog.node.frontmatter.date}</p>
                                    <Link to={singleBlog.node.fields.slug}>Read More</Link>
                                </div>
                                <GatsbyImage image={singleBlog.node.frontmatter.image.childImageSharp.gatsbyImageData} alt="card-image" />
                            </div>
                        )
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Blog

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}) {
    edges {
      node {
        frontmatter {
          date
          excerpt
          id
          title
        image {
            childImageSharp {
              gatsbyImageData(formats: AUTO, placeholder: BLURRED, quality: 90)
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
`