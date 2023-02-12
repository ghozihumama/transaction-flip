import {SortByDataTransactions} from './transaction.model';

export type Order = 'ASC' | 'DESC';

export interface TransactionSortItem {
  id: number;
  label: string;
  sortBy?: SortByDataTransactions;
  order?: 'ASC' | 'DESC';
}
