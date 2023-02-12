import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Config from 'react-native-config';

const getTransactions = async () => {
  const baseUrl: string = Config.BASE_URL
    ? Config.BASE_URL
    : 'https://recruitment-test.flip.id/frontend-test';

  const response = await axios.get(baseUrl);

  return response.data;
};

export const UseGetTransactions = (keyword: string) => {
  const {isLoading, data} = useQuery(['transactions'], getTransactions, {
    select: transactions => dataTransactionsTransformer(transactions, keyword),
  });

  return {isLoading, data};
};

const dataTransactionsTransformer = (data: any, filterKeyword: string) => {
  const result: any = [];
  if (data) {
    for (const key in data) {
      const transaction = data[key];
      let keyword =
        transaction.beneficiary_name +
        transaction.beneficiary_bank +
        transaction.sender_bank +
        transaction.amount;

      keyword = keyword.trim().toLowerCase();

      if (keyword.includes(filterKeyword)) {
        result.push(transaction);
      }
    }
  }
  return result;
};
