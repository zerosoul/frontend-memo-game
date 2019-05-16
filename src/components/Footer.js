import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 0;
  h1 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 0.6rem;
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <h1>FLMG © Tristan</h1>
      <h2>
        Inspired By{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/davinci/pen/yVZapY">
          Brainymo
        </a>
      </h2>
    </Wrapper>
  );
};

export default Footer;
