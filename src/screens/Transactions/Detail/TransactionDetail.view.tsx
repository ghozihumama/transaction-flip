import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  FlipText,
  FlipSection,
  FlipIcon,
  FlipColor,
  FlipSpacing,
} from '../../../libraries';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigations/StackNavigator';
import {toCurrency, moment} from '../../../utils';
type Props = NativeStackScreenProps<
  RootStackParamList,
  'TransactionDetailView'
>;

interface LabelValueProps {
  label: string;
  value: string | number;
}

const LabelValueView: React.FC<LabelValueProps> = ({label, value}) => {
  return (
    <View>
      <FlipText weight={900} fontSize={14} lineHeight={16.8}>
        {label}
      </FlipText>
      <FlipText weight={700} fontSize={14} lineHeight={16.8}>
        {value}
      </FlipText>
    </View>
  );
};

export const TransactionDetailView: React.FC<Props> = ({route, navigation}) => {
  const copyIdToClipboard = () => {
    Clipboard.setString(route.params.id);
  };

  return (
    <View>
      <View style={styles.sectionId}>
        <FlipText weight={900} fontSize={14} lineHeight={16.8}>
          {`ID TRANSAKSI:#${route.params.id}`}
        </FlipText>
        <TouchableOpacity
          onPress={copyIdToClipboard}
          activeOpacity={0.8}
          style={styles.iconCopy}>
          <FlipIcon name={'copy'} size={20} color={FlipColor.text.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionInfo}>
        <FlipText weight={800} fontSize={14} lineHeight={16.8}>
          DETAIL TRANSAKSI
        </FlipText>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <FlipText
            weight={700}
            fontSize={14}
            lineHeight={16.8}
            color={FlipColor.text.primary}>
            Tutup
          </FlipText>
        </TouchableOpacity>
      </View>
      <View style={styles.containerInfo}>
        <View style={{paddingHorizontal: FlipSpacing.lg}}>
          <FlipSection.SenderBeneficiaryBank
            beneficiaryBank={route.params.beneficiaryBank}
            senderBank={route.params.senderBank}
          />
        </View>
        <View style={styles.sectionInfo}>
          <LabelValueView
            label={route.params.beneficiary_name}
            value={route.params.accountNumber}
          />
          <LabelValueView
            label={'NOMINAL'}
            value={toCurrency(route.params.amount)}
          />
        </View>
        <View style={styles.sectionInfo}>
          <LabelValueView
            label={'BERITA TRANSFER'}
            value={route.params.remark}
          />
          <LabelValueView
            label={'KODE UNIK'}
            value={route.params.unique_code}
          />
        </View>
        <View style={styles.sectionInfo}>
          <LabelValueView
            label={'WAKTU DIBUAT'}
            value={moment(route.params.createdAt)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionId: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: FlipSpacing.lg,
    borderBottomWidth: 0.5,
    borderColor: FlipColor.stroke.lightGrey,
    paddingHorizontal: FlipSpacing.lg,
  },
  iconCopy: {
    marginLeft: FlipSpacing.sm,
  },
  containerInfo: {
    paddingTop: FlipSpacing.lg,
    borderTopWidth: 1,
    borderColor: FlipColor.stroke.gray,
  },
  sectionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: FlipSpacing.lg,
    paddingHorizontal: FlipSpacing.lg,
  },
});
