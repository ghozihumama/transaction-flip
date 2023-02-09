import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export const TransactionDetailView: React.FC = props => {
  useEffect(() => {
    console.log('[===props]', props);
  }, [props]);

  return (
    <View>
      <Text>WKWKWKWKWK</Text>
    </View>
  );
};
