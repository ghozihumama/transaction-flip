import React from 'react';
import {View, StyleSheet} from 'react-native';
import {color, spacing} from '../../../../core';
import {convertBankName} from '../../../utils';
import {FlipIcon} from '../../Icon/Icon';
import {FlipText} from '../../Text/Text';

interface Props {
  senderBank: string;
  beneficiaryBank: string;
}

const SenderBeneficiaryBankView: React.FC<Props> = ({
  senderBank,
  beneficiaryBank,
}) => {
  return (
    <View style={styles.container}>
      <FlipText
        weight={900}
        fontSize={14}
        lineHeight={16.8}>{`${convertBankName(senderBank)}`}</FlipText>
      <View style={styles.iconContainer}>
        <FlipIcon name={'arrow-right'} size={12} color={color.text.black} />
      </View>
      <FlipText
        weight={900}
        fontSize={14}
        lineHeight={16.8}>{`${convertBankName(beneficiaryBank)}`}</FlipText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: spacing.xsm,
  },
});

export default SenderBeneficiaryBankView;
