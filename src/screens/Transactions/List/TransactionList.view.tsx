import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {UseGetTransactions} from '../../../services/getTransactions';
import {FlipSearchBar, FlipSpacing} from '../../../libraries';
import {TransactionSortItem} from '../../../models';
import {TRANSACTION_SORTS} from '../../../constans';
import {TransactionDataView} from './TransactionData.view';
import {TransactionListShimmer} from './TransactionListShimmer.view';
import {TransactionEmptyDataView} from './TransactionEmptyData.view';
import {TransactionErrorDataView} from './TransactionDataError.view';
import {useDebounce} from '../../../utils';

export const TransactionListView: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [sortSelected, setsSortSelected] = useState<TransactionSortItem>({
    id: 1,
    label: 'URUTKAN',
  });

  const debouncedSearchQuery = useDebounce(keyword, 300);

  const {isLoading, isError, data} = UseGetTransactions(debouncedSearchQuery, {
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
      {/* is fetching */}
      {isLoading === true && <TransactionListShimmer />}

      {/* After Fetching or Searching */}
      {isLoading === false && !isError && Array.isArray(data) && (
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
          {data.length > 0 ? (
            <TransactionDataView data={data} />
          ) : (
            <TransactionEmptyDataView />
          )}
        </React.Fragment>
      )}

      {/* After Fetching and get error */}
      {isLoading === false && isError && <TransactionErrorDataView />}
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
});
