import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlipSpacing, FlipText} from '../../../libraries';

export const TransactionListShimmer: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlipText weight={700} fontSize={16} lineHeight={18.2} align={'center'}>
        Sedang Memuat Data Transaksi...
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
});
