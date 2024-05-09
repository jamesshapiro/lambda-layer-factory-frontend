import React from 'react';

import { DataContext } from '../DataProvider';

import styled from 'styled-components';

function LayerTitle() {
  const { layerTitle, setLayerTitle } =
    React.useContext(DataContext);
  return <Input value={layerTitle} onChange={(event) => setLayerTitle(event.target.value)} placeholder="Layer Title Here" />;
}

export default LayerTitle;

const Input = styled.input`
display: block;
margin-bottom: 10px;
margin-left: 10px;
`