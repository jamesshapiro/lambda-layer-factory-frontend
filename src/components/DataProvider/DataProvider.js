import React from 'react';

// Note: replace "Data" with the name of the thing being provided.
// For usage, see the "DataContextUser" component.

export const DataContext = React.createContext();

const ENDPOINT = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function DataProvider({ children }) {
  const randomItem = 'random item';
  const [items, setItems] = React.useState([]);
  const [apiWasRequested, setApiWasRequested] = React.useState(false);
  const [requestWasHandled, setRequestWasHandled] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('Language');
  const [selectedRuntimes, setSelectedRuntimes] = React.useState([]);
  const [dependencies, setDependencies] = React.useState([
    { library: '', version: '' },
  ]);
  console.log(selectedRuntimes);
  const dependenciesString = dependencies
    .map((dep) => `${dep.library}==${dep.version}`)
    .join(',');
  console.log(dependenciesString);

  React.useEffect(() => {
    async function fetchData() {
      const payload = {
        layer_name: 'reqs_example',
        email: 'james.shapiro@gmail.com',
        dependencies: dependenciesString,
        runtimes: selectedRuntimes,
        language: selectedLanguage,
      };

      const request = new Request(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        mode: 'cors',
        body: JSON.stringify(payload),
        timeout: 100000,
      });

      const response = await fetch(request);
      const json = await response.json();
      return json;
    }
    if (apiWasRequested && !requestWasHandled) {
      fetchData();
      setApiWasRequested(false);
      setRequestWasHandled(true);
    }
  }, [apiWasRequested, requestWasHandled]);

  function createItem(content, variant) {
    const nextItems = [
      ...items,
      {
        id: crypto.randomUUID(),
        content,
        variant,
      },
    ];

    setItems(nextItems);
  }

  function clearItem(id) {
    const nextItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(nextItems);
  }

  return (
    <DataContext.Provider
      value={{
        items,
        createItem,
        clearItem,
        randomItem,
        setApiWasRequested,
        setRequestWasHandled,
        selectedLanguage,
        setSelectedLanguage,
        selectedRuntimes,
        setSelectedRuntimes,
        dependencies,
        setDependencies,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
