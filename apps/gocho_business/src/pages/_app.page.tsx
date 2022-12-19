import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";
import { Global } from "@emotion/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { NextPage } from "next";

import { globalStyle } from "@/styles/globalStyle";
import { ToastPlaceholder } from "@/components/global/toast/toastPlaceHolder";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function BusinessService({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 15000,
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            retry: 0,
            onError: (error) => {
              if (axios.isAxiosError(error) && error.response?.status === 404) {
                router.push("/404");
              }
              if (axios.isAxiosError(error) && error.response?.status === 500) {
                router.push("/500");
              }
            },
          },
        },
      })
  );

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={globalStyle} />
        {getLayout(<Component {...pageProps} />)}
        <ToastPlaceholder />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default BusinessService;