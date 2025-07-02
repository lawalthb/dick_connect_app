import '@/styles/globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/datepicker-custom.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/components/lib/queryClient';

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
