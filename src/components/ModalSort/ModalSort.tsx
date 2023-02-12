import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import {color, spacing} from '../../../core';
import {FlipText} from '../Text/Text';
import {TransactionSortItem} from '../../models';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  sorts: TransactionSortItem[];
  onSelect: (sort: TransactionSortItem) => void;
  idSelected: number;
}

export const FlipModalSort: React.FC<Props> = ({
  isVisible,
  onClose,
  onSelect,
  sorts,
  idSelected,
}) => {
  const renderItem: ListRenderItem<TransactionSortItem> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        activeOpacity={0.8}
        onPress={() => {
          onSelect(item);
          onClose();
        }}>
        <View style={styles.outerCircle}>
          {idSelected === item.id && <View style={styles.innerCircle} />}
        </View>
        <FlipText weight={700} fontSize={16} lineHeight={19.2}>
          {item.label}
        </FlipText>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      hardwareAccelerated={false}>
      <View style={styles.container}>
        <FlatList
          data={sorts}
          keyExtractor={(__, idx) => idx.toString()}
          renderItem={renderItem}
          style={styles.listContainer}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    backgroundColor: color.background.white,
    marginHorizontal: spacing.xxl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderRadius: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  outerCircle: {
    borderWidth: 2,
    borderColor: color.stroke.primary,
    borderRadius: 99,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  innerCircle: {
    borderRadius: 99,
    height: 12,
    width: 12,
    backgroundColor: color.background.primary,
  },
});
