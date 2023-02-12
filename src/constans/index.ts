import Config from 'react-native-config';
import {TransactionSortItem} from '../models';

export const BASE_URL =
  Config.BASE_URL || 'https://recruitment-test.flip.id/frontend-test';

export const TRANSACTION_SORTS: TransactionSortItem[] = [
  {id: 1, label: 'URUTKAN'},
  {id: 2, label: 'Nama A-Z', sortBy: 'beneficiary_name', order: 'ASC'},
  {id: 3, label: 'Nama Z-A', sortBy: 'beneficiary_name', order: 'DESC'},
  {id: 4, label: 'Tanggal Terbaru', sortBy: 'created_at', order: 'DESC'},
  {id: 5, label: 'Tanggal Terlama', sortBy: 'created_at', order: 'ASC'},
];
