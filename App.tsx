import React from 'react';
import './global.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RootNavigator} from './src/navigation/RootNavigator';
import {PaperProvider} from 'react-native-paper';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
