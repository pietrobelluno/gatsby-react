import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import PostItem from "../components/PostItem";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem></PostItem>
  </Layout>
);

export default IndexPage;
