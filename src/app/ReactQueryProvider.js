"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from 'next-auth/react'
const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  )
}