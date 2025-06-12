import React from 'react';
import {House} from 'lucide-react-native';
interface IconProps {
  color: string;
  size: number;
}

export const HomeIcon = ({color, size}: IconProps) => {
  return <House color={color} size={size} />;
};
