import {Dimensions} from 'react-native';
import {Gesture} from 'react-native-gesture-handler';
import {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useFavoritesStore} from '../store/favoritesStore';
import {Character} from '../api/characters/types';

interface AnimationProps {
  character: Character;
  cardHeight: SharedValue<number>;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;

const TRANSLATE_X_TRASHOLD = -SCREEN_WIDTH * 0.3;

export const useSwipeDeleteAnimation = ({
  cardHeight,
  character,
}: AnimationProps) => {
  const translateX = useSharedValue(0);
  const cardOpacity = useSharedValue(1);
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
        cardHeight.value = withTiming(0);
        cardOpacity.value = withTiming(0, {}, isFinished => {
          if (isFinished) {
            runOnJS(toggleFavorite)(character);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    })
    .simultaneousWithExternalGesture();

  const rCardContainerStyles = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
    height: cardHeight.value > 0 ? cardHeight.value : undefined,
    opacity: cardOpacity.value,
  }));

  return {
    rCardContainerStyles,
    panGesture,
  };
};
