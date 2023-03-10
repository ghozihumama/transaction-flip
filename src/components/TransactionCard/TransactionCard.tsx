import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {color, spacing} from '../../../core';
import {toCurrency, moment} from '../../utils';
import {FlipText} from '../Text/Text';
import {FlipBagde} from '../Bagde/Bagde';
import {FlipSection} from '../Section';
import {FlipIcon} from '../Icon/Icon';

type Status = 'PENDING' | 'SUCCESS' | 'CANCEL';
interface Props {
  amount: number;
  senderBank: string;
  status: Status;
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
  const handleStatusText = (originStatus: Status): string => {
    switch (originStatus) {
      case 'SUCCESS':
        return 'Berhasil';
      case 'PENDING':
        return 'Pengecekan';
      case 'CANCEL':
        return 'Dibatalkan';
      default:
        return originStatus;
    }
  };

  const handleStatusType = (originStatus: Status) => {
    switch (originStatus) {
      case 'SUCCESS':
        return 'success';
      case 'PENDING':
        return 'warning';
      default:
        return 'warning';
    }
  };

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
          <FlipSection.SenderBeneficiaryBank
            beneficiaryBank={beneficiaryBank}
            senderBank={senderBank}
          />
          <FlipText weight={600} fontSize={12} lineHeight={14.4}>
            {beneficiaryName.toUpperCase()}
          </FlipText>
          <View style={styles.priceDateSection}>
            <FlipText
              weight={600}
              fontSize={12}
              lineHeight={14.4}>{`${toCurrency(amount)}`}</FlipText>
            <FlipIcon name={'dot-single'} size={20} color={color.text.black} />
            <FlipText weight={600} fontSize={12} lineHeight={14.4}>{`${moment(
              transactionDate,
            )}`}</FlipText>
          </View>
        </View>
        <View>
          <FlipBagde
            text={handleStatusText(status)}
            type={handleStatusType(status)}
            outline={status === 'PENDING'}
          />
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
  priceDateSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
