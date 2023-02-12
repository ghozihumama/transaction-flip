import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlipSpacing, FlipText} from '../../../libraries';

export const TransactionEmptyDataView: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlipText weight={700} fontSize={16} lineHeight={18.2} align={'center'}>
        Pencarian Tidak Ditemukan
      </FlipText>
      <View style={styles.devider} />
      <FlipText weight={600} fontSize={16} lineHeight={18.2} align={'center'}>
        Transaksi mungkin belum tersedia, Anda bisa melakukan pencarian dengan
        kata kunci lain.
      </FlipText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: FlipSpacing.lg,
    flex: 1,
    justifyContent: 'center',
  },
  devider: {
    marginVertical: FlipSpacing.md,
  },
});
