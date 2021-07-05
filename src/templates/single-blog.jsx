import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as style from "../styles/singleBlog.module.scss"

const SingleBlog = (props) => {
    return (
        <Layout>
            <div className={style.hero}>
                <GatsbyImage image={props.data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData} alt="blog-image" />
            </div>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <p>{props.data.markdownRemark.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html }} />
                </div>
            </div>
        </Layout>

    )
}

export default SingleBlog

export const query = graphql`
query SingleBlogQuery ($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      date
      excerpt
      id
      title
    image {
            childImageSharp {
              gatsbyImageData(formats: AUTO, placeholder: BLURRED, quality: 90, width: 1000)
            }
          }
    }
    html
  }
}
`