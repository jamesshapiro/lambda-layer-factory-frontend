import Header from '../Header';
import React from 'react';

import DataProvider from '../DataProvider';
import Dropdown from '../Dropdown';

function App() {
  return (
    <DataProvider>
      <div className="wrapper">
        <Header />
      </div>
      <Dropdown options={[
        {name: 'Python', id: 'python'},
        {name: 'Node', id: 'node'},
        {name: 'Ruby', id: 'ruby'},
        {name: 'Java', id: 'java'},
        {name: 'Go', id: 'go'},
        {name: '.NET', id: 'dotnet'},
        {name: 'Amazon Linux 2023', id: 'amazonlinux'},
      ]}
      category="Language" />
    </DataProvider>
  );
}

export default App;
