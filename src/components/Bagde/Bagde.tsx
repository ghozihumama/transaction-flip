import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlipText} from '../Text/Text';
import {color, spacing} from '../../../core';

type BagdeType = 'success' | 'warning';
interface Props {
  type: BagdeType;
  text: string;
  outline?: boolean;
}

export const FlipBagde: React.FC<Props> = ({text, type, outline}) => {
  const determineColorStyle = useCallback(
    (badgeType: BagdeType) => {
      const colorStyle = {
        bgColor: color.background.green,
        strokeColor: color.stroke.green,
      };

      switch (badgeType) {
        case 'success':
          if (outline) {
            colorStyle.bgColor = color.background.white;
            colorStyle.strokeColor = color.stroke.green;
          } else {
            colorStyle.bgColor = color.background.green;
            colorStyle.strokeColor = color.stroke.green;
          }
          break;
        case 'warning':
          if (outline) {
            colorStyle.bgColor = color.background.white;
            colorStyle.strokeColor = color.stroke.primary;
          } else {
            colorStyle.bgColor = color.background.primary;
            colorStyle.strokeColor = color.stroke.primary;
          }
          break;
        default:
          break;
      }

      return colorStyle;
    },
    [outline],
  );

  const bgColorBadge = useMemo(
    () => determineColorStyle(type).bgColor,
    [type, determineColorStyle],
  );

  const strokeColorBadge = useMemo(
    () => determineColorStyle(type).strokeColor,
    [type, determineColorStyle],
  );

  return (
    <View
      style={[
        outline ? styles.containerOutline : styles.containerSolid,
        {backgroundColor: bgColorBadge, borderColor: strokeColorBadge},
      ]}>
      <FlipText
        weight={600}
        fontSize={14}
        lineHeight={16.8}
        color={outline ? color.text.black : color.text.white}>
        {text}
      </FlipText>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSolid: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 8,
  },
  containerOutline: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 8,
    borderWidth: 1,
  },
});
