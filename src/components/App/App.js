import Header from '../Header';
import React from 'react';

import DataProvider from '../DataProvider';
import Dropdown from '../Dropdown';
import { LANGUAGES } from '../../constants';

import styled from 'styled-components';
import RuntimeSelectTable from '../RuntimeSelectTable';
import DependencyAdder from '../DependencyAdder';

function App() {
  return (
    <DataProvider>
      <div className='wrapper'>
        <Header />
      </div>
      <Dropdown options={LANGUAGES} category='Language' />
      <RuntimeSelectTable />
      <DependencyAdder />
    </DataProvider>
  );
}

export default App;
