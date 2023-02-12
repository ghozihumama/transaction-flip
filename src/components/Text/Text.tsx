import React, {FC, useCallback, useMemo} from 'react';
import {Text} from 'react-native';
import {color} from '../../../core';
import fonts from '../../utils/fonts';

/** === INTERFACE === */
type WeightProp = 900 | 800 | 700 | 600 | 500 | 400;
interface Props {
  color?: string;
  weight: WeightProp;
  fontSize: number;
  lineHeight: number;
  letterSpacing?: number;
  children?: React.ReactNode;
  align?: 'center' | 'justify' | 'left' | 'right';
  testID?: string;
  textDecorationLine?: 'line-through' | 'underline' | 'underline line-through';
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  numberOfLines?: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
}
/** === COMPONENT === */
export const FlipText: FC<Props> = props => {
  const {weight, fontSize, lineHeight, letterSpacing} = props;

  const determineInputColorStyle = useCallback((weightProp: WeightProp) => {
    const textStyle = {
      fontFamily: fonts.Regular,
    };

    switch (weightProp) {
      case 900:
        textStyle.fontFamily = fonts.Black;
        break;
      case 800:
        textStyle.fontFamily = fonts.Bold;
        break;
      case 700:
        textStyle.fontFamily = fonts.SemiBold;
        break;
      case 600:
        textStyle.fontFamily = fonts.Medium;
        break;
      case 500:
        textStyle.fontFamily = fonts.Medium;
        break;
      case 400:
        textStyle.fontFamily = fonts.Light;
        break;
      default:
        break;
    }

    return textStyle;
  }, []);

  const fontFamily = useMemo(
    () => determineInputColorStyle(weight).fontFamily,
    [weight, determineInputColorStyle],
  );

  return (
    <Text
      ellipsizeMode={props.ellipsizeMode}
      numberOfLines={props.numberOfLines}
      style={{
        textDecorationLine: props.textDecorationLine
          ? props.textDecorationLine
          : 'none',
        fontFamily: fontFamily,
        fontSize: fontSize,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        color: props.color ? props.color : color.text.black,
        textAlign: props.align ? props.align : 'auto',
        textTransform: props.textTransform ? props.textTransform : 'none',
      }}>
      {props.children}
    </Text>
  );
};
