import React from 'react';

import { DataContext } from '../DataProvider';
import * as style from './Dropdown.module.css';
import './style.css';

import * as Select from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

const Dropdown = ({ options, category }) => {
  // const [value, setValue] = React.useState(category);
  const { selectedLanguage, setSelectedLanguage } =
    React.useContext(DataContext);

  const getValueNameFromId = (id) => {
    if (id === category) return category;
    return options.find((option) => option.id === id).name;
  };

  function handleSelectValue(selection) {
    setSelectedLanguage(selection);
  }

  return (
    <Select.Root
      value={selectedLanguage}
      onValueChange={(selection) => handleSelectValue(selection)}
    >
      <Select.Trigger className={style.SelectTrigger} aria-label={category}>
        <Select.Value placeholder={category} aria-label={selectedLanguage}>
          {getValueNameFromId(selectedLanguage)}
        </Select.Value>
        <Select.Icon className={style.SelectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={style.SelectContent}>
          <Select.ScrollUpButton className={style.SelectScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={style.SelectViewport}>
            <Select.Group>
              <Select.Label key='grouplabel' className={style.SelectLabel}>
                {category}
              </Select.Label>
              {options.map((item) => {
                return (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </Select.Group>
            {/* <Select.Separator className={style.SelectSeparator} />
          <Select.Group></Select.Group> */}
          </Select.Viewport>
          <Select.ScrollDownButton className={style.SelectScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={'SelectItem'} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={style.SelectItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default Dropdown;
