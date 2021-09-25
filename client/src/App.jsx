import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Cards from './Cards';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Cards />
    </QueryClientProvider>
  );
};

export default App;
