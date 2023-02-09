import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {color, spacing} from '../../../core';
import {convertBankName, toCurrency, moment} from '../../utils';
import {FlipText} from '../Text/Text';

interface Props {
  amount: number;
  senderBank: string;
  status: 'PENDING' | 'SUCCESS';
  beneficiaryBank: string;
  beneficiaryName: string;
  transactionDate: string;
  onPress: () => void;
}

export const FlipTransactionCard: React.FC<Props> = ({
  amount,
  senderBank,
  status,
  beneficiaryBank,
  beneficiaryName,
  transactionDate,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <View
        style={[
          styles.flagStatus,
          {
            backgroundColor:
              status === 'PENDING'
                ? color.background.primary
                : color.background.green,
          },
        ]}
      />
      <View style={styles.infoSection}>
        <View>
          <FlipText
            weight={900}
            fontSize={14}
            lineHeight={16.8}>{`${convertBankName(
            senderBank,
          )} => ${convertBankName(beneficiaryBank)}`}</FlipText>
          <FlipText weight={600} fontSize={14} lineHeight={16.8}>
            {beneficiaryName.toUpperCase()}
          </FlipText>
          <Text>{`${toCurrency(amount)} . ${moment(transactionDate)}`}</Text>
        </View>
        <View>
          <Text>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    backgroundColor: color.background.white,
    borderRadius: 8,
  },
  flagStatus: {
    width: 6,
    borderTopLeftRadius: 99,
    borderBottomLeftRadius: 99,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
});
