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

export const UseGetTransactions = () => {
  const {isLoading, data} = useQuery(['transactions'], getTransactions);

  const dataArray = dataTransactionsTransformer(data);

  return {isLoading, data: dataArray};
};

const dataTransactionsTransformer = (data: any) => {
  const result: any = [];
  if (data) {
    for (const key in data) {
      const transaction = data[key];
      const keyword =
        transaction.beneficiary_name +
        transaction.beneficiary_bank +
        transaction.sender_bank +
        transaction.amount;

      result.push({...transaction, keyword: keyword.trim().toLowerCase()});
    }
  }
  return result;
};
