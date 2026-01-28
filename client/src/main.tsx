import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from "react-toastify"
// react query imports
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


// react query client oluşturma

const queryClient= new QueryClient()

createRoot(document.getElementById('root')!).render(
<QueryClientProvider client={queryClient}>
  
    <App />
 <ReactQueryDevtools />
    <ToastContainer />
  </QueryClientProvider>
)
