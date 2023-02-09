import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import type {
  RootStackParamList,
  TransactionDetailNavigationParams,
} from './StackNavigator';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

/** => navigate to detail transaction */
const navigateToDetailTransaction = (
  params: TransactionDetailNavigationParams,
) => {
  navigationRef.current?.navigate('TransactionDetailView', params);
};

/** => back to previews page */
const back = () => {
  navigationRef.current?.goBack();
};

export const NavigationAction = {
  navigateToDetailTransaction,
  back,
};
