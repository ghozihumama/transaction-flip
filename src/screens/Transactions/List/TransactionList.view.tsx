import React, {useState} from 'react';
import {View, Text, FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {UseGetTransactions} from '../../../services/getTransactions';
import {
  FlipTransactionCard,
  NavigationAction,
  FlipSearchBar,
  FlipSpacing,
} from '../../../libraries';

interface IItemTransaction {
  id: string;
  amount: number;
  unique_code: number;
  status: 'SUCCESS' | 'PENDING';
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
}

interface ITransactionData {
  data: IItemTransaction[];
}

const TransactionListShimmer: React.FC = () => {
  return (
    <View>
      <Text>LOADING......</Text>
    </View>
  );
};

const TransactionDataView: React.FC<ITransactionData> = ({data}) => {
  const renderItem: ListRenderItem<IItemTransaction> = ({item}) => {
    const {
      id,
      amount,
      account_number,
      beneficiary_name,
      beneficiary_bank,
      sender_bank,
      status,
      created_at,
      completed_at,
      fee,
      remark,
      unique_code,
    } = item;
    return (
      <FlipTransactionCard
        amount={amount}
        beneficiaryBank={beneficiary_bank}
        beneficiaryName={beneficiary_name}
        senderBank={sender_bank}
        status={status}
        transactionDate={created_at}
        onPress={() =>
          NavigationAction.navigateToDetailTransaction({
            accountNumber: account_number,
            amount,
            beneficiary_name: beneficiary_name,
            beneficiaryBank: beneficiary_bank,
            completedAt: completed_at,
            createdAt: created_at,
            fee: fee,
            id: id,
            remark: remark,
            senderBank: sender_bank,
            status: status,
            unique_code: unique_code,
          })
        }
      />
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(__, idx) => idx.toString()}
      renderItem={renderItem}
      style={styles.transactionList}
      showsVerticalScrollIndicator={false}
    />
  );
};

export const TransactionListView: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const {isLoading, data} = UseGetTransactions(keyword);

  const onChangeKeyword = (val: string) => {
    val = val.replace(/ +(?= )/g, '');
    setKeyword(val);
  };
  return (
    <View>
      {isLoading ? (
        <TransactionListShimmer />
      ) : (
        <React.Fragment>
          <View style={styles.sectionSearch}>
            <FlipSearchBar
              value={keyword}
              onChangeText={onChangeKeyword}
              placeholder={'Cari nama, bank, atau nominal'}
            />
          </View>
          <TransactionDataView data={data} />
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionSearch: {
    marginVertical: FlipSpacing.md,
    marginHorizontal: FlipSpacing.lg,
  },
  transactionList: {
    marginHorizontal: 16,
  },
});
