import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {SortTransactions} from '../models';
import {transactionListTransformer} from './transformers';
import {BASE_URL} from '../constans';

const getTransactions = async () => {
  const baseUrl: string = BASE_URL;
  const response = await axios.get(baseUrl);
  return response.data;
};

export const UseGetTransactions = (keyword: string, sort: SortTransactions) => {
  const {isLoading, isError, data} = useQuery(
    ['transactions'],
    getTransactions,
    {
      select: transactions =>
        transactionListTransformer(transactions, keyword, sort),
    },
  );

  return {isLoading, isError, data: data ? data : []};
};
