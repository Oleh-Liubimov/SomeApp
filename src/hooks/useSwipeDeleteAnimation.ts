import {Dimensions} from 'react-native';
import {Gesture} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useFavoritesStore} from '../store/favoritesStore';
import {Character} from '../api/characters/types';
import {SCREEN_WIDTH} from '../constants';

interface AnimationProps {
  character: Character;
}

const TRANSLATE_X_TRASHOLD = -SCREEN_WIDTH * 0.3;

export const useSwipeDeleteAnimation = ({character}: AnimationProps) => {
  const translateX = useSharedValue(0);
  const toggleFavorite = useFavoritesStore().toggleFavorite;

  const panGesture = Gesture.Pan()
    .onChange(event => {
      if (event.translationX < 0) {
        translateX.value = event.translationX;
      }
    })
    .onEnd(() => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_TRASHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        runOnJS(toggleFavorite)(character);
      } else {
        translateX.value = withTiming(0);
      }
    })
    .simultaneousWithExternalGesture();

  const rCardContainerStyles = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return {
    rCardContainerStyles,
    panGesture,
  };
};
