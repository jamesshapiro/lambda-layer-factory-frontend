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
      width='18'
      height='18'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 6 9 17l-5-5' />
    </StyledSVG>
  );

  if (selectedLanguage === 'Language') {
    return null;
  }

  return (
    <Section>
      <SectionLabel>Runtimes</SectionLabel>
      <Card>
        <Table>
          <TBody>
            {RUNTIMES[selectedLanguage].map((runtime) => {
              const isSelected = selectedRuntimes.includes(runtime.id);
              return (
                <TR key={runtime.id} $selected={isSelected}>
                  <CheckTD>
                    {isSelected ? check : null}
                  </CheckTD>
                  <TD>
                    <Button onClick={() => handleSelect(runtime.id)}>
                      {runtime.name}
                    </Button>
                  </TD>
                </TR>
              );
            })}
          </TBody>
        </Table>
      </Card>
    </Section>
  );
}

export default RuntimeSelectTable;

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
  overflow: hidden;
  box-shadow: 0 1px 3px var(--shadow);
`;

const StyledSVG = styled.svg`
  color: var(--accent);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TBody = styled.tbody``;

const TR = styled.tr`
  display: flex;
  align-items: center;
  min-height: 44px;
  border-bottom: 1px solid var(--line);
  transition: background-color 0.15s ease;
  background: ${(props) => props.$selected ? 'var(--accent-soft)' : 'transparent'};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: var(--accent-soft);
  }
`;

const CheckTD = styled.td`
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TD = styled.td`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-family: 'Noto Serif JP', serif;
  font-weight: 300;
  font-size: 0.9rem;
  color: var(--fg);
  cursor: pointer;
`;
