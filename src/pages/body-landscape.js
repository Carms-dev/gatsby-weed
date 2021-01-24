import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import styled from 'styled-components';

const ImageContainer = styled.div`
  overflow: hidden;
  max-width: 80vw;
  margin: auto;
`;

export default function SubPageFive() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: { absolutePath: { regex: "/body_landscape/" } }
        sort: { fields: base }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const jpgs = data.allFile.edges;
  console.log(jpgs);

  return (
    <Layout>
      <ImageContainer>
        {/* Row 1 */}
        <div className="flex max-w-3/4 my-24">
          <div className="container pt-60">
            <Img
              fluid={jpgs[0].node.childImageSharp.fluid}
              alt={jpgs[0].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
            />
          </div>
          <div className="container pt-24">
            <Img
              fluid={jpgs[1].node.childImageSharp.fluid}
              alt={jpgs[1].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
            />
          </div>
          <div className="container">
            <Img
              fluid={jpgs[2].node.childImageSharp.fluid}
              alt={jpgs[2].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
            />
          </div>
        </div>

        {/* Rows 2 thru 6 */}
        <div className="grid gap-6 grid-cols-2 space-y-24 max-h-full">
          {/* Row 2 */}
          <div className="container self-center lg:w-1/2 mx-auto">
            <Img
              fluid={jpgs[3].node.childImageSharp.fluid}
              alt={jpgs[3].node.base.split('.')[0]}
            />
          </div>
          <div className="container flex max-h-full ">
            <Img
              fluid={jpgs[4].node.childImageSharp.fluid}
              alt={jpgs[4].node.base.split('.')[0]}
              className="container"
            />
            <Img
              fluid={jpgs[5].node.childImageSharp.fluid}
              alt={jpgs[5].node.base.split('.')[0]}
              className="container h-1/2 -ml-32 self-end bottom-6"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '50vh',
                width: '100%',
              }}
            />
          </div>

          {/* Row 3 */}
          <div className="container self-center pt-12 lg:w-3/4 mx-auto">
            <Img
              fluid={jpgs[6].node.childImageSharp.fluid}
              alt={jpgs[6].node.base.split('.')[0]}
            />
          </div>

          <div></div>

          {/* Row 4 */}

          <div className="container self-center pt-12 lg:w-3/4 mx-auto col-start-2">
            <Img
              fluid={jpgs[7].node.childImageSharp.fluid}
              alt={jpgs[7].node.base.split('.')[0]}
            />
          </div>

          {/* Row 5 */}

          <div className="container pt-12 md:w-3/4 lg:w-1/2">
            <Img
              fluid={jpgs[8].node.childImageSharp.fluid}
              alt={jpgs[8].node.base.split('.')[0]}
            />
          </div>
          <div className="container pt-60 self-end md:w-3/4 lg:w-1/2">
            <Img
              fluid={jpgs[9].node.childImageSharp.fluid}
              alt={jpgs[9].node.base.split('.')[0]}
            />
          </div>

          {/* Row 6 */}

          <div className="container flex space-x-6 py-12">
            <Img
              fluid={jpgs[10].node.childImageSharp.fluid}
              alt={jpgs[10].node.base.split('.')[0]}
              className="container w-1/3 top-8"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '50vh',
                width: '100%',
              }}
            />
            <Img
              fluid={jpgs[11].node.childImageSharp.fluid}
              alt={jpgs[11].node.base.split('.')[0]}
              className="container w-2/3"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '50vh',
                width: '100%',
              }}
            />
          </div>
          <div className="container self-center ml-auto mr-0 md:w-3/4 lg:w-1/2">
            <Img
              fluid={jpgs[12].node.childImageSharp.fluid}
              alt={jpgs[12].node.base.split('.')[0]}
              className="container"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '50vh',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Row 7 */}
        <div className="grid grid-cols-3 container gap-12 my-36">
          <div className="container">
            <Img
              fluid={jpgs[13].node.childImageSharp.fluid}
              alt={jpgs[13].node.base.split('.')[0]}
              className="container w-2/3"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '50vh',
                width: '100%',
              }}
            />
          </div>
          <div className="container col-span-2">
            <Img
              fluid={jpgs[14].node.childImageSharp.fluid}
              alt={jpgs[14].node.base.split('.')[0]}
              className="container"
            />
          </div>
        </div>

        {/* Rows 8 & 9 */}
        <div className="grid gap-6 grid-cols-2 space-y-36 max-h-full">
          {/* Row 8 */}
          <div className="container col-start-2 w-3/4 max-h-3/4 ml-6">
            <Img
              fluid={jpgs[15].node.childImageSharp.fluid}
              alt={jpgs[15].node.base.split('.')[0]}
              className="container w-2/3"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '50vh',
                width: '100%',
              }}
            />
          </div>
          {/* Row 9 */}
          <div className="container self-center mx-auto">
            <Img
              fluid={jpgs[16].node.childImageSharp.fluid}
              alt={jpgs[16].node.base.split('.')[0]}
            />
          </div>
          <div className="container w-1/2 self-center mx-auto">
            <Img
              fluid={jpgs[17].node.childImageSharp.fluid}
              alt={jpgs[17].node.base.split('.')[0]}
              className="container"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '50vh',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Row 10 */}

        <div className="grid grid-cols-3 self-center container mt-48">
          <div className="container col-start-2">
            <Img
              fluid={jpgs[18].node.childImageSharp.fluid}
              alt={jpgs[18].node.base.split('.')[0]}
              className="container w-2/3"
            />
          </div>
          <div className="container">
            <Img
              fluid={jpgs[19].node.childImageSharp.fluid}
              alt={jpgs[19].node.base.split('.')[0]}
              className="container"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '50vh',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Row 11 */}
        <div className="container self-center lg:w-1/2 mx-auto my-48">
          <Img
            fluid={jpgs[20].node.childImageSharp.fluid}
            alt={jpgs[20].node.base.split('.')[0]}
            className="container"
            imgStyle={{
              objectFit: 'contain',
              maxHeight: '50vh',
              width: '100%',
            }}
          />
        </div>

        {/* Row 12 */}
        <div className="flex flex-row-reverse my-48">
          <div className="container w-1/4">
            <Img
              fluid={jpgs[21].node.childImageSharp.fluid}
              alt={jpgs[21].node.base.split('.')[0]}
            />
          </div>
        </div>
      </ImageContainer>
    </Layout>
  );
}