import React, {useState} from 'react';
import {Menu} from 'react-native-paper';
import {TouchableOpacity, Text} from 'react-native';

interface FilterDropdownProps<T extends string> {
  label: string | null;
  value?: T;
  options: readonly T[];
  onChange: (value?: T) => void;
}

export function FilterDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: FilterDropdownProps<T>) {
  const [visible, setVisible] = useState(false);

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={
        <TouchableOpacity
          className="border border-black rounded-md p-2"
          onPress={() => setVisible(true)}>
          <Text>
            {label}: {value || label}
          </Text>
        </TouchableOpacity>
      }>
      <Menu.Item
        title="All"
        onPress={() => {
          onChange(undefined);
          setVisible(false);
        }}
      />
      {options.map(option => (
        <Menu.Item
          key={option}
          title={option}
          onPress={() => {
            onChange(option);
            setVisible(false);
          }}
        />
      ))}
    </Menu>
  );
}
