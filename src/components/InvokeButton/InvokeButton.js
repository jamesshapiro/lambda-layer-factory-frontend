import React from 'react';
import { DataContext } from '../DataProvider';
import styled from 'styled-components';

function InvokeButton() {
  const { setApiWasRequested, setRequestWasHandled } = React.useContext(DataContext);

  function handleClick() {
    setApiWasRequested(true);
    setRequestWasHandled(false);
  }

  return (
    <Wrapper>
      <Button onClick={handleClick}>Invoke API</Button>
    </Wrapper>
  );
}

export default InvokeButton;

const Wrapper = styled.div`
  text-align: center;
  margin-top: 1.5rem;
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
