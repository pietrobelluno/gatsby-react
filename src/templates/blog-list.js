import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { title, date, description, category, background },
            timeToRead,
            fields: { slug }
          }
        }) => (
          <PostItem
            slug={slug}
            category={category}
            background={background}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            category
            background
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;
