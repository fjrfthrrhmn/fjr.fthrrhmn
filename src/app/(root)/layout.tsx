'use client';
import { Navigation } from '@/components/layouts/Navigation';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// FIX: QueryClientProvider is not a client component
export default function Layout({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={client}>
      <Navigation />
      {children}
    </QueryClientProvider>
  );
}
