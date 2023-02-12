import React, {useState} from 'react';
import {View, Text, FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {UseGetTransactions} from '../../../services/getTransactions';
import {
  FlipTransactionCard,
  NavigationAction,
  FlipSearchBar,
  FlipSpacing,
} from '../../../libraries';
import {
  IItemTransaction,
  ITransactionData,
  TransactionSortItem,
} from '../../../models';
import {TRANSACTION_SORTS} from '../../../constans';

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
  const [sortSelected, setsSortSelected] = useState<TransactionSortItem>({
    id: 1,
    label: 'URUTKAN',
  });
  const {isLoading, data} = UseGetTransactions(keyword, {
    order: sortSelected.order,
    orderBy: sortSelected.sortBy,
  });

  const onChangeKeyword = (val: string) => {
    val = val.replace(/ +(?= )/g, '');
    setKeyword(val);
  };

  const onSelectSort = (val: TransactionSortItem) => {
    setsSortSelected(val);
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <TransactionListShimmer />
      ) : (
        <React.Fragment>
          <View style={styles.sectionSearch}>
            <FlipSearchBar
              value={keyword}
              onChangeText={onChangeKeyword}
              placeholder={'Cari nama, bank, atau nominal'}
              sorts={TRANSACTION_SORTS}
              sortSelected={sortSelected}
              onSelectSort={onSelectSort}
            />
          </View>
          <TransactionDataView data={data} />
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionSearch: {
    marginVertical: FlipSpacing.md,
    marginHorizontal: FlipSpacing.lg,
  },
  transactionList: {
    marginHorizontal: 16,
  },
});
