import React from 'react';
import * as style from './Header.module.css';
import { DataContext } from '../DataProvider';

import styled from 'styled-components'

function Header() {
  const { randomItem, setApiWasRequested, setRequestWasHandled } = React.useContext(DataContext);
  const [email, setEmail] = React.useState('');

  function handleClick() {
    setApiWasRequested(true);
    setRequestWasHandled(false);
  }

  return (
    <>
        <H1>Lambda Layer Factory</H1>
      <Button onClick={handleClick}>Invoke API (see console)</Button>
    </>
  );
}

export default Header;

// Why is width being ignored by CSS here?

const H1 = styled.h1`
  background-color: white;
  border: 1px solid var(--number-box-border-color);
  width: fit-content;
  
  padding: 10px 20px;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 24px;
  box-shadow: var(--box-shadow-distance) var(--box-shadow-distance) 0 0 hsl(0, 0%, 25%);
`

const Button = styled.button`
  margin-left: 10px;
  padding: 20px;
  background-color: white;
  color: black;
  width: fit-content;
  border-radius: 8px;
  border: 1px solid var(--number-box-border-color);
  margin-bottom: 10px;
`
