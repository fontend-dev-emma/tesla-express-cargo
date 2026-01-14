"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Providers({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        refetchOnWindowFocus: true,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default Providers;
