import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransactionListView, TransactionDetailView} from '../screens';

export type TransactionDetailNavigationParams = {
  accountNumber: string;
  amount: number;
  beneficiaryBank: string;
  beneficiary_name: string;
  completedAt: string;
  createdAt: string;
  fee: number;
  id: string;
  remark: string;
  senderBank: string;
  status: 'SUCCESS' | 'PENDING';
  unique_code: number;
};

export type RootStackParamList = {
  TransactionListView: undefined;
  TransactionDetailView: TransactionDetailNavigationParams;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="TransactionListView">
      <Stack.Screen
        name="TransactionListView"
        component={TransactionListView}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
          orientation: 'portrait',
        }}
      />
      <Stack.Screen
        name="TransactionDetailView"
        component={TransactionDetailView}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
          orientation: 'portrait',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
