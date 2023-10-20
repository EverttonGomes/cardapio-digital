import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App/>
    </QueryClientProvider>
  </React.StrictMode>,
)