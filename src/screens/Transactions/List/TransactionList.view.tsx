import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import {UseGetTransactions} from '../../../services/getTransactions';

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
    return (
      <View>
        <Text>{item.id}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(__, idx) => idx.toString()}
      renderItem={renderItem}
    />
  );
};

export const TransactionListView: React.FC = () => {
  const {isLoading, data} = UseGetTransactions();
  return (
    <View>
      {isLoading ? (
        <TransactionListShimmer />
      ) : (
        <TransactionDataView data={data} />
      )}
    </View>
  );
};
