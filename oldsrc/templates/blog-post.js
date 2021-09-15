import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import gray from 'gray-percentage';

import { rhythm, scale } from '../utils/typography';

const BlogPostHeader = ({ post }) => {
  const hasSubtitle = !!post.frontmatter.subtitle;
  return (
    <div
      css={{
        background: 'tomato',
        padding: rhythm(1),
        position: 'relative',
        marginBottom: rhythm(1),
      }}
    >
      <h1
        css={{
          color: 'white',
          fontWeight: 100,
          marginBottom: hasSubtitle ? rhythm(0.1) : rhythm(1),
        }}
      >
        {post.frontmatter.title}
      </h1>
      {post.frontmatter.subtitle && (
        <h2
          css={{
            marginTop: 0,
            color: gray(50),
          }}
        >
          {post.frontmatter.subtitle}
        </h2>
      )}
      <p
        css={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
          color: 'gold',
        }}
      >
        {post.frontmatter.date}
      </p>
    </div>
  );
};

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next } = this.props.pathContext;

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <BlogPostHeader post={post} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          css={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        subtitle
        blurb
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
