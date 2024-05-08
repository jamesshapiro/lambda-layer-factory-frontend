import React from 'react';
import { DataContext } from '../DataProvider';

import { RUNTIMES } from '../../constants';

import styled from 'styled-components';

function RuntimeSelectTable() {
  const { selectedLanguage, selectedRuntimes, setSelectedRuntimes } =
    React.useContext(DataContext);

  function handleSelect(runtimeId) {
    setSelectedRuntimes((oldValue) => {
      const newValue = new Set(oldValue);
      if (newValue.has(runtimeId)) {
        newValue.delete(runtimeId);
      } else {
        newValue.add(runtimeId);
      }
      return Array.from(newValue);
    });
  }

  const check = (
    <StyledSVG
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-check'
    >
      <path d='M20 6 9 17l-5-5' />
    </StyledSVG>
  );

  const defaultTable = (
    <Table>
      <TBody>
        <TR>
          <TD>Hello</TD>
        </TR>
        <TR>
          <TD>World</TD>
        </TR>
        <TR>
          <TD></TD>
        </TR>
        <TR>
          <TD></TD>
        </TR>
      </TBody>
    </Table>
  );

  function getRuntimesTable(language) {
    return (
      <Table>
        <TBody>
          {RUNTIMES[language].map((runtime) => {
            return (
              <TR>
                <CheckTD>
                  {selectedRuntimes.includes(runtime.id) ? check : null}
                </CheckTD>
                <TD>
                  <Button
                    id={runtime.id}
                    onClick={() => handleSelect(runtime.id)}
                  >
                    {runtime.name}
                  </Button>
                </TD>
              </TR>
            );
          })}
        </TBody>
      </Table>
    );
  }

  if (selectedLanguage === 'Language') {
    return defaultTable;
  }

  const table = getRuntimesTable(selectedLanguage);

  return table;
}

export default RuntimeSelectTable;

const StyledSVG = styled.svg``;

const Table = styled.table`
  padding: 20px;
  background-color: white;
  min-width: 200px;
  border-radius: 6px;
  border-collapse: collapse;
`;

const TBody = styled.thead`
  height: 100%;
`;

const TR = styled.tr`
  height: 50px;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  border-top: 1px solid var(--number-box-border-color);
  border-left: 1px solid var(--number-box-border-color);
  border-right: 1px solid var(--number-box-border-color);
  &:last-child {
    border-bottom: 1px solid var(--number-box-border-color);
  }
`;

const CheckTD = styled.td`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TD = styled.td`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  text-align: center;
  min-height: 100%;
  height: 100%;
  min-width: 100%;
`;
