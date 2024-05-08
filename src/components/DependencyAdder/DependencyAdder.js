import React from 'react';
import { DataContext } from '../DataProvider';

import { RUNTIMES } from '../../constants';

import styled from 'styled-components';

function DependencyAdder() {
  const { dependencies, setDependencies } = React.useContext(DataContext);

  function getDependenciesTable(dependencies) {
    console.log(dependencies);
    return (
      <Table>
        <TBody>
          {dependencies.map((dependency, index) => {
            const isLast = index === dependencies.length - 1;
            return (
              <TR>
                <AddTD>
                  {isLast && (
                    <Button
                      onClick={() => {
                        setDependencies((oldValue) => {
                          const copy = [
                            ...oldValue,
                            { library: '', version: '' },
                          ];
                          copy[index].dependency = event.target.value;
                          return copy;
                        });
                      }}
                    >
                      {'+'}
                    </Button>
                  )}
                </AddTD>
                <TD>
                  <input
                    value={dependency.library}
                    onChange={(event) => {
                      setDependencies((oldValue) => {
                        const copy = [...oldValue];
                        copy[index].library = event.target.value;
                        return copy;
                      });
                    }}
                  />
                </TD>
                <TD>
                  <input
                    value={dependency.version}
                    onChange={(event) => {
                      setDependencies((oldValue) => {
                        const copy = [...oldValue];
                        copy[index].version = event.target.value;
                        return copy;
                      });
                    }}
                  />
                </TD>
                <DeleteTD>
                  <Button
                    onClick={() => {
                      setDependencies((oldValue) => {
                        const copy = oldValue.filter((_, i) => i !== index);
                        return copy;
                      });
                    }}
                  >
                    {'-'}
                  </Button>
                </DeleteTD>
              </TR>
            );
          })}
        </TBody>
      </Table>
    );
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

  const table = getDependenciesTable(dependencies);

  return table;
}

export default DependencyAdder;

const StyledSVG = styled.svg``;

const Table = styled.table`
  margin-top: 10px;
  margin-left: 10px;
  padding: 20px;
  background-color: white;
  min-width: 500px;
  border-radius: 6px;
  border-collapse: collapse;
`;

const TBody = styled.tbody`
  height: 100%;
`;

const TR = styled.tr`
  height: 50px;
  display: flex;
  align-items: stretch;
  &:first-child {
    border-top: 1px solid var(--number-box-border-color);
  }

  border-bottom: 1px solid var(--number-box-border-color);
  justify-content: stretch;
`;

const AddTD = styled.td`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    border-left: 1px solid var(--number-box-border-color);
  }
  border-right: 1px solid var(--number-box-border-color);
`;

const DeleteTD = styled.td`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    border-left: 1px solid var(--number-box-border-color);
  }
  border-right: 1px solid var(--number-box-border-color);
`;

const TD = styled.td`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--number-box-border-color);
`;

const Button = styled.button`
  text-align: center;
  min-height: 100%;
  height: 100%;
  min-width: 100%;
`;
