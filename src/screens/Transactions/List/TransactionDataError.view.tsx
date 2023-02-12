import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlipText, FlipSpacing} from '../../../libraries';

export const TransactionErrorDataView: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlipText weight={700} fontSize={16} lineHeight={18.2} align={'center'}>
        Terjadi Kesalahan
      </FlipText>
      <View style={styles.devider} />
      <FlipText weight={600} fontSize={16} lineHeight={18.2} align={'center'}>
        Silahkan mencoba kembali beberapa waktu lagi
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
