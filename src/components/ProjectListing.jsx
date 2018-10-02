import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import sample from 'lodash/sample';
import { overlay } from '../../config/theme';
import Palette from 'react-palette';

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: 33.33333vw;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-columns: repeat(3,1fr);
  max-width: 100vw;
  width: 100%;
`;

const Item = styled.div`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Content = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  a {
    color: #fff;
    height: 100%;
    left: 0;
    padding: 2rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-decoration: none;
      div {
        opacity: 1;
      }
    }

    > div {
      opacity: 0;
      transition: all .5s;
    }
  }
`;

const ImageWrapper = styled.div`
  > div {
    height: 100%;
    left: 0;
    position: absolute !important;
    top: 0;
    width: 100%;

    > div {
      position: static !important;
    }
  }
`;

const Overlay = styled.div`
  background-color: ${props => props.theme.brand.primary};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const ProjectListing = ({ projectEdges }) => (
  <Wrapper>
    {projectEdges.map(({ node: { fields, frontmatter }}) => {
      const overlayColor = sample(overlay);
      const headerText = frontmatter.title || frontmatter.venue || frontmatter.client
      const subText = frontmatter.description || frontmatter.service

      return (
        <Item key={fields.slug}>
          <Content>
            <ImageWrapper>
              <Img fluid={frontmatter.cover.childImageSharp.fluid} />
            </ImageWrapper>
            {frontmatter.noclick ? null : (
              <Link to={fields.slug}>
                <Palette image={frontmatter.cover.childImageSharp.fluid.src}>
                  {palette => (
                    <Overlay style={{ backgroundColor: palette.darkVibrant }} />
                  )}
                </Palette>
                <h2>{headerText}</h2>
                <div>{subText}</div>
              </Link>
            )}
          </Content>
        </Item>
      );
    })}
  </Wrapper>
);

export default ProjectListing;

ProjectListing.propTypes = {
  projectEdges: PropTypes.array.isRequired,
};
