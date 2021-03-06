import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"
import "app/core/styles/main.css"


import { ChakraProvider } from "@chakra-ui/react";



export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ChakraProvider>
          <ErrorBoundary
            FallbackComponent={RootErrorFallback}
            onReset={useQueryErrorResetBoundary().reset}
          >
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
    </ChakraProvider>
  );
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <ErrorComponent
        statusCode={error.statusCode}
        title={ "AuthenticationError --> " + error.message}
      />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
