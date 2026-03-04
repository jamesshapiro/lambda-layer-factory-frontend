import React from 'react';
import { DataContext } from '../DataProvider';

import styled from 'styled-components';

function DependencyAdder() {
  const { dependencies, setDependencies } = React.useContext(DataContext);

  return (
    <Section>
      <SectionLabel>Dependencies</SectionLabel>
      <Card>
        {dependencies.map((dependency, index) => {
          const isLast = index === dependencies.length - 1;
          return (
            <Row key={index}>
              <ActionCell>
                {isLast && (
                  <CircleButton
                    onClick={() => {
                      setDependencies((oldValue) => [
                        ...oldValue,
                        { library: '', version: '' },
                      ]);
                    }}
                  >
                    +
                  </CircleButton>
                )}
              </ActionCell>
              <InputCell>
                <StyledInput
                  value={dependency.library}
                  placeholder="package name"
                  onChange={(event) => {
                    setDependencies((oldValue) => {
                      const copy = [...oldValue];
                      copy[index] = { ...copy[index], library: event.target.value };
                      return copy;
                    });
                  }}
                />
              </InputCell>
              <InputCell>
                <StyledInput
                  value={dependency.version}
                  placeholder="version"
                  onChange={(event) => {
                    setDependencies((oldValue) => {
                      const copy = [...oldValue];
                      copy[index] = { ...copy[index], version: event.target.value };
                      return copy;
                    });
                  }}
                />
              </InputCell>
              <ActionCell>
                {dependencies.length > 1 && (
                  <CircleButton
                    $danger
                    onClick={() => {
                      setDependencies((oldValue) =>
                        oldValue.filter((_, i) => i !== index)
                      );
                    }}
                  >
                    -
                  </CircleButton>
                )}
              </ActionCell>
            </Row>
          );
        })}
      </Card>
    </Section>
  );
}

export default DependencyAdder;

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
  padding: 0.75rem;
  box-shadow: 0 1px 3px var(--shadow);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0;
  border-bottom: 1px solid var(--line);

  &:last-child {
    border-bottom: none;
  }
`;

const ActionCell = styled.div`
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const InputCell = styled.div`
  flex: 1;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  font-family: 'Noto Serif JP', serif;
  font-weight: 300;
  font-size: 0.85rem;
  color: var(--fg);
  background: transparent;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--muted);
  }
`;

const CircleButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--fg);
  font-family: 'DM Mono', monospace;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: var(--accent-soft);
  }
`;
