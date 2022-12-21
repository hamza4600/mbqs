import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageSpinner from 'components/pageSpinner';
import { compose } from "redux";

import { ThemeProvider } from 'styled-components'
import Them, { GlobalStyle } from 'them/themColors';

const ErrorBoundary = lazy(() => import('components/errBoundary'));
const InterfacePages = lazy(() => import('Pages/interface'));
const AuthPages = lazy(() => import('Pages/auth'));


const ThemWrapper = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={Them.light} >
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </>
    )
}

function App() {
  return (
    <>
      <Suspense fallback={<PageSpinner />}>
        <ErrorBoundary>
          <ThemWrapper>
          <Routes>
            <Route path="/*" element={<InterfacePages />} />
            <Route path="/auth/*" element={<AuthPages />} />
          </Routes>
          </ThemWrapper>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

// export default App;
export default compose(

)(App);
