import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {spacing, color} from '../../../core';
import {FlipIcon} from '../Icon/Icon';
import {FlipText} from '../Text/Text';
import {FlipModalSort} from '../ModalSort/ModalSort';
import {TransactionSortItem} from '../../models';

interface Props {
  value: string;
  placeholder?: string;
  onChangeText: (val: string) => void;
  sorts: TransactionSortItem[];
  onSelectSort: (sort: TransactionSortItem) => void;
  sortSelected: TransactionSortItem;
}

export const FlipSearchBar: React.FC<Props> = ({
  value,
  placeholder,
  onChangeText,
  sorts,
  onSelectSort,
  sortSelected,
}) => {
  const [modalSortIsVisible, setModalSortIsVisible] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <FlipIcon name={'search'} size={20} color={color.stroke.gray} />
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        onPress={() => setModalSortIsVisible(true)}
        activeOpacity={0.8}
        style={styles.sectionSort}>
        <FlipText
          weight={600}
          fontSize={14}
          lineHeight={16.8}
          color={color.text.primary}>
          {sortSelected.label ?? 'URUTKAN'}
        </FlipText>
        <FlipIcon name={'chevron-down'} size={20} color={color.text.primary} />
      </TouchableOpacity>
      <FlipModalSort
        isVisible={modalSortIsVisible}
        onClose={() => setModalSortIsVisible(false)}
        sorts={sorts}
        onSelect={onSelectSort}
        idSelected={sortSelected.id ?? 1}
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
    flex: 1,
    paddingVertical: 0,
    marginLeft: spacing.sm,
  },
  sectionSort: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.sm,
  },
});
