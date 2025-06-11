import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {Menu, TextInput} from 'react-native-paper';
import {useFiltersStore} from '../../store/filtersStore';
import {SearchIcon} from 'lucide-react-native';
import {rem} from '../../utils/rem';
import {COLORS} from '../../constants/colors';
import {useDebounce} from '../../hooks/useDebounce';

export const FiltersDropdown = () => {
  const [isStatusMenuVisible, setIsStatusMenuVisible] = useState(false);
  const [isGenderMenuVisible, setIsGenderMenuVisible] = useState(false);
  const {name, status, gender, setFilters} = useFiltersStore();
  const [inputValue, setInputValue] = useState(name);

  const handleSearch = useCallback((text: string) => {
    setInputValue(text);
  }, []);

  const debValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debValue !== name) {
      setFilters({name: debValue});
    }
  }, [debValue, name, setFilters]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <SafeAreaView className="p-2">
      <TextInput
        mode="outlined"
        placeholder="Search by name"
        value={inputValue}
        onChangeText={handleSearch}
        right={<TextInput.Icon icon={() => <SearchIcon size={20} />} />}
      />
      <View className="flex-row gap-2 p-2">
        <Menu
          contentStyle={styles.filterDropdown}
          visible={isStatusMenuVisible}
          anchor={
            <TouchableOpacity
              className="border border-black rounded-md p-2"
              onPress={() => setIsStatusMenuVisible(true)}>
              <Text>Status: {status || 'All'}</Text>
            </TouchableOpacity>
          }
          onDismiss={() => setIsStatusMenuVisible(false)}>
          <Menu.Item
            title="All"
            onPress={() => {
              setFilters({status: undefined});
              setIsStatusMenuVisible(false);
            }}
          />
          {(['alive', 'dead', 'unknown'] as const).map(val => (
            <Menu.Item
              key={val}
              title={val}
              onPress={() => {
                setFilters({status: val});
                setIsStatusMenuVisible(false);
              }}
            />
          ))}
        </Menu>

        <Menu
          visible={isGenderMenuVisible}
          anchor={
            <TouchableOpacity
              className="border border-black rounded-md p-2"
              onPress={() => setIsGenderMenuVisible(true)}>
              <Text>Gender: {gender || 'All'}</Text>
            </TouchableOpacity>
          }
          onDismiss={() => setIsGenderMenuVisible(false)}>
          <Menu.Item
            title="All"
            onPress={() => {
              setFilters({gender: undefined});
              setIsGenderMenuVisible(false);
            }}
          />
          {(['male', 'female', 'genderless', 'unknown'] as const).map(val => (
            <Menu.Item
              key={val}
              title={val}
              onPress={() => {
                setFilters({gender: val});
                setIsGenderMenuVisible(false);
              }}
            />
          ))}
        </Menu>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  filterDropdown: {
    padding: rem(10),
    borderRadius: rem(10),
    borderWidth: 1,
    borderColor: COLORS.black,
  },
});
