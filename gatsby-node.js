const path = require('path')
exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blog-post.js')
        resolve(
            graphql(`
                {
                    allContentfulBlog (limit:100) {
                        edges {
                            node {
                                id
                                slug
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulBlog.edges.forEach((edge) => {
                    createPage ({
                        path: `/blog/${edge.node.slug}`,
                        component: blogPostTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                return
            })
        )
    })
}

// module.exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const blogTemplate = path.resolve('./src/templates/blog.js')
//     const res = await graphql(`
//         query {
//             allContentfulBlogPost {
//                 edges {
//                     node {
//                         slug
//                     }
//                 }
//             }
//         }
//     `)
    
//     res.data.allContentfulBlogPost.edges.forEach((edge) => {
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${edge.node.slug}`,
//             context: {
//                 slug: edge.node.slug
//             }
//         })
//     })
// }