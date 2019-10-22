import React, {Component} from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import Head from '../components/head'
import './blog-post.module.scss'
import './code.css'

const Date = styled.span`
  color: #999999;
  margin: .5rem 0 2rem;
  display: inline-block;
  font-size: .9rem;
`

class BlogPost extends Component{
    render() {
        const {
            title,
            publishedDate,
            content
        } = this.props.data.contentfulBlog
        return (
            <Layout>
                <Head title="Blog" />
                <h1>{title}</h1>
                <Date>{publishedDate}</Date>
                <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
                <Link to="/blog"><button>목록으로 돌아가기</button></Link>
            </Layout>
        )
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlog(slug: {eq: $slug}) {
            title
            slug
            publishedDate(formatString: "D MMM YYYY")
            content{
                childMarkdownRemark{
                    html
                }
            }

        }
    }
`