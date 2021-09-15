import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import gray from 'gray-percentage';

import Bio from '../components/Bio';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{
                    boxShadow: 'none',
                    color: '#e17055',
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <span
                style={{
                  fontSize: rhythm(1 / 2),
                  color: gray(50),
                  textTransform: 'uppercase',
                }}
              >
                {node.frontmatter.date}
              </span>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.blurb || node.excerpt,
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            blurb
          }
        }
      }
    }
  }
`;
