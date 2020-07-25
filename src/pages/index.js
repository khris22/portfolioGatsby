import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export default function Home({ data }) {
  return (
    <div>
      <h1>Hello</h1>
      <Img fluid={data.codelandImage.childImageSharp.fluid} />
    </div>
  );
}

export const query = graphql`
  query ImageQuery {
    codelandImage: file(relativePath: { eq: "download.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
