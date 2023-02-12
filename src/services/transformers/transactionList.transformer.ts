import {
  IItemTransaction,
  SortByDataTransactions,
  SortTransactions,
} from '../../models';
import {sort as _sort} from '../../utils';

export const transactionListTransformer = (
  data: any,
  filterKeyword: string,
  sort: SortTransactions,
) => {
  let result: Array<IItemTransaction> = [];
  const order = sort.order;

  if (data) {
    for (const key in data) {
      const transaction = data[key];
      let keyword =
        transaction.beneficiary_name +
        transaction.beneficiary_bank +
        transaction.sender_bank +
        transaction.amount;

      keyword = keyword.trim().toLowerCase();

      if (keyword.includes(filterKeyword.toLowerCase())) {
        result.push(transaction);
      }
    }
  }

  if (sort && sort.orderBy !== undefined && sort.orderBy) {
    const orderBy: SortByDataTransactions = sort.orderBy;
    if (orderBy === 'beneficiary_name') {
      result = _sort.string<IItemTransaction>(result, orderBy, order);
    }

    if (orderBy === 'created_at') {
      result = _sort.date<IItemTransaction>(result, orderBy, order);
    }
  }

  return result;
};
