import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby';

import blogStyles from './blog.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'


const BlogPost = ({node}) => {
    return (
        <li className={blogStyles.post}>
            <Link to={`/blog/${node.slug}`}>
                <h2>{node.title}</h2>
                <p>{node.introduction}</p>
                <span>{node.publishedDate}</span>
            </Link>
            
        </li>
    )
}
const IndexPage = ({data}) => (
    <Layout>
        <Head title="Blog" />
        <ul className={blogStyles.posts}>
            {data.allContentfulBlog.edges.map((edges) => <BlogPost node={edges.node} />)}
        </ul>
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlog (filter: {
            node_locale: {eq: "en-US"}
        }) {
          edges{
              node {
                  title
                  slug
                  publishedDate(formatString: "D MMM YYYY")
                  introduction
              }
          }  
        }
    }
`