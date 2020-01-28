import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
  `);

  const postList = allMarkdownRemark.edges;

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

export default IndexPage;
