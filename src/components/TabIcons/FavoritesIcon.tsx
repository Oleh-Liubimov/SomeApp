import React from 'react';
import {Heart} from 'lucide-react-native';
interface IconProps {
  color: string;
  size: number;
}

export const FavoritesIcon = ({color, size}: IconProps) => {
  return <Heart color={color} size={size} />;
};
