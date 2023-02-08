import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, spacing} from '../../../core';
import {convertBankName, toCurrency, moment} from '../../utils';

interface Props {
  amount: number;
  senderBank: string;
  status: 'PENDING' | 'SUCCESS';
  beneficiaryBank: string;
  beneficiaryName: string;
  transactionDate: string;
}

export const FlipTransactionCard: React.FC<Props> = ({
  amount,
  senderBank,
  status,
  beneficiaryBank,
  beneficiaryName,
  transactionDate,
}) => {
  return (
    <View style={styles.container}>
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
          <Text>{`${convertBankName(senderBank)} => ${convertBankName(
            beneficiaryBank,
          )}`}</Text>
          <Text>{beneficiaryName.toUpperCase()}</Text>
          <Text>{`${toCurrency(amount)} . ${moment(transactionDate)}`}</Text>
        </View>
        <View>
          <Text>{status}</Text>
        </View>
      </View>
    </View>
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
