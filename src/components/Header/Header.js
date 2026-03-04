import React from 'react';
import { DataContext } from '../DataProvider';

import styled from 'styled-components';

function Header() {
  const { randomItem, setApiWasRequested, setRequestWasHandled } = React.useContext(DataContext);

  function handleClick() {
    setApiWasRequested(true);
    setRequestWasHandled(false);
  }

  return (
    <Hero>
      <H1>Lambda Layer Factory</H1>
      <Tagline>Build custom AWS Lambda layers on demand</Tagline>
      <Button onClick={handleClick}>Invoke API</Button>
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

const Button = styled.button`
  font-family: 'DM Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--fg);
  padding: 0.8rem 2rem;
  border: 1px solid var(--line);
  border-radius: 100px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--fg);
    box-shadow: 0 2px 12px var(--shadow);
    transform: translateY(-1px);
  }
`;
