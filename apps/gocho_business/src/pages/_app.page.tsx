import { useState } from "react";
import { Global } from "@emotion/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { datadogRum } from "@datadog/browser-rum";

import { globalStyle } from "@/styles/globalStyle";
import { useAxiosInterceptor } from "@/apis/useIsRefreshLock";
import { ToastPlaceholder } from "@/components/global/toast/toastPlaceHolder";
import { ModalPlaceholder } from "@/components/global/modal/modalPlaceHolder";
import { PrivateRouteLayout } from "@/components/global/layout/privateRouteLayout";

import { AppPropsWithLayout } from "./index/type";
import { PROTECTED_ROUTE_ARR } from "./index/constant";

if (typeof window !== "undefined" && !window.location.href.includes("localhost")) {
  datadogRum.init({
    applicationId: "ae36adeb-77ea-4c17-8d46-e239927462e4",
    clientToken: "pub1d76d0d423237f4598a55e6205dbc303",
    site: "datadoghq.com",
    service: "gocho-business",

    version: "0.0.2",
    sampleRate: 80,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
  });

  datadogRum.startSessionReplayRecording();
}

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

  useAxiosInterceptor();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={globalStyle} />
        <PrivateRouteLayout protectedRoutes={PROTECTED_ROUTE_ARR}>
          {getLayout(<Component {...pageProps} />)}
        </PrivateRouteLayout>
        <ModalPlaceholder />
        <ToastPlaceholder />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default BusinessService;
