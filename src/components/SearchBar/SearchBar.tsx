import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {spacing, color} from '../../../core';
import {FlipIcon} from '../Icon/Icon';

interface Props {
  value: string;
  placeholder?: string;
  onChangeText: (val: string) => void;
}

export const FlipSearchBar: React.FC<Props> = ({
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <FlipIcon name={'search'} size={20} color={color.stroke.gray} />
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    backgroundColor: color.background.white,
    borderRadius: 8,
  },
  textInput: {
    paddingVertical: 0,
    marginLeft: spacing.sm,
  },
});
