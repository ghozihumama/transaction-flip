import {Order} from './order.model';
export interface IItemTransaction {
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

export interface ITransactionData {
  data: IItemTransaction[];
}

export type SortByDataTransactions = 'beneficiary_name' | 'created_at';

export interface SortTransactions {
  orderBy?: SortByDataTransactions;
  order?: Order;
}
