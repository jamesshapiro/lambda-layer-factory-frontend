import React from 'react';

import styled from 'styled-components';

function Header() {
  return (
    <Hero>
      <H1>Lambda Layer Factory</H1>
      <Tagline>Build custom AWS Lambda layers on demand</Tagline>
    </Hero>
  );
}

export default Header;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const H1 = styled.h1`
  font-weight: 200;
  font-size: 2rem;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  color: var(--fg);
`;

const Tagline = styled.div`
  font-family: 'DM Mono', monospace;
  font-weight: 300;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.5rem;
`;
