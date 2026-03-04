import Header from '../Header';
import React from 'react';

import DataProvider from '../DataProvider';
import Dropdown from '../Dropdown';
import { LANGUAGES } from '../../constants';

import styled from 'styled-components';
import RuntimeSelectTable from '../RuntimeSelectTable';
import DependencyAdder from '../DependencyAdder';
import LayerTitle from '../LayerTitle/LayerTitle';

function App() {
  return (
    <DataProvider>
      <Page>
        <Header />
        <LayerTitle />
        <Dropdown options={LANGUAGES} category='Language' />
        <RuntimeSelectTable />
        <DependencyAdder />
      </Page>
    </DataProvider>
  );
}

export default App;

const Page = styled.div`
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;

  & > * {
    animation: fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  & > *:nth-child(1) { animation-delay: 0.05s; }
  & > *:nth-child(2) { animation-delay: 0.1s; }
  & > *:nth-child(3) { animation-delay: 0.15s; }
  & > *:nth-child(4) { animation-delay: 0.2s; }
  & > *:nth-child(5) { animation-delay: 0.25s; }
  & > *:nth-child(6) { animation-delay: 0.3s; }
  & > *:nth-child(7) { animation-delay: 0.35s; }
  & > *:nth-child(8) { animation-delay: 0.4s; }

  @media (max-width: 500px) {
    padding: 2rem 1rem 3rem;
  }
`;
