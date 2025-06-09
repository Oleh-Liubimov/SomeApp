import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {Menu, TextInput} from 'react-native-paper';
import {useFiltersStore} from '../../store/filtersStore';
import {SearchIcon} from 'lucide-react-native';

export const FIltersDropdown = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const {name, setFilters, status} = useFiltersStore();

  console.log(status);

  return (
    <View>
      <TextInput
        mode="outlined"
        placeholder="Search by name"
        value={name}
        onChangeText={text => setFilters({name: text})}
      />
      <Menu
        visible={isMenuVisible}
        anchor={<SearchIcon onPress={() => setIsMenuVisible(true)} />}
        onDismiss={() => setIsMenuVisible(false)}>
        <Text>Status</Text>
        {['alive', 'dead', 'unknown'].map(val => (
          <Menu.Item
            key={val}
            title={val}
            onPress={() => {
              setFilters({status: val as typeof status});
              setIsMenuVisible(false);
            }}
          />
        ))}
      </Menu>
    </View>
  );
};
