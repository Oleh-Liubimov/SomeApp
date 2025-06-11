import {SafeAreaView, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {useFiltersStore} from '../../store/filtersStore';
import {useDebounce} from '../../hooks/useDebounce';
import {SearchBar} from './SearchBar';
import {FilterDropdown} from './FilterDropdown';
import {GenderOption, StatusOption} from '../../types';

export const FiltersDropdown = () => {
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
    console.log(status);
  }, [name, status]);

  return (
    <SafeAreaView className="p-2">
      <SearchBar onTextChange={handleSearch} value={debValue} />
      <View className="flex-row gap-2 py-2">
        <FilterDropdown<StatusOption>
          label="Status"
          onChange={value => setFilters({status: value})}
          options={['alive', 'dead', 'unknown'] as const}
          value={status}
        />
        <FilterDropdown<GenderOption>
          label="Gender"
          onChange={value => setFilters({gender: value})}
          options={['female', 'male', 'genderless', 'unknown'] as const}
          value={gender}
        />
      </View>
    </SafeAreaView>
  );
};
