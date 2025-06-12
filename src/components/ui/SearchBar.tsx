import {SearchIcon} from 'lucide-react-native';
import {memo} from 'react';
import {TextInput} from 'react-native-paper';
interface SearchBarProps {
  value: string;
  onTextChange: (text: string) => void;
}

const Icon = memo(() => {
  return <SearchIcon size={20} />;
});

export const SearchBar = ({onTextChange, value}: SearchBarProps) => {
  return (
    <TextInput
      mode="outlined"
      placeholder="Search by name"
      value={value}
      onChangeText={onTextChange}
      right={<TextInput.Icon icon={Icon} />}
    />
  );
};
