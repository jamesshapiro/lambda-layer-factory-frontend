import React from 'react';

import { DataContext } from '../DataProvider';

import styled from 'styled-components';

function LayerTitle() {
  const { layerTitle, setLayerTitle } =
    React.useContext(DataContext);
  return (
    <Section>
      <SectionLabel>Layer Name</SectionLabel>
      <Card>
        <Input
          value={layerTitle}
          onChange={(event) => setLayerTitle(event.target.value)}
          placeholder="my-custom-layer"
        />
      </Card>
    </Section>
  );
}

export default LayerTitle;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionLabel = styled.div`
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
`;

const Card = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 1px 3px var(--shadow);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Noto Serif JP', serif;
  font-weight: 300;
  font-size: 0.95rem;
  color: var(--fg);
  line-height: 1.8;

  &::placeholder {
    color: var(--muted);
  }
`;
