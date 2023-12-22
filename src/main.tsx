import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient(
  //   {
  //   defaultOptions: {
  //     queries: {
  //       retry: 3,
  //       cacheTime: 300_000,
  //       staleTime: 10 * 1000,
  //       refetchOnWindowFocus: false,
  //       refetchOnReconnect: false,
  //       refetchOnMount: false,
  //     }
  //   }
  // }
)

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
      {/* dev tools qui vaut de l'argent pour le debugging avec Query */}
    </QueryClientProvider>

  </React.StrictMode>

)
