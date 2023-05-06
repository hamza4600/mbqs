import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageSpinner from 'components/pageSpinner';
import { compose } from "redux";

import { ThemeProvider } from 'styled-components'
import Them, { GlobalStyle } from 'them/themColors';
import ErrorBoundary from 'components/errBoundary';
import { x86asmler } from 'functions/author';

const InterfacePages = lazy(() => import('Pages/interface'));
const AuthPages = lazy(() => import('Pages/auth'));


const ThemWrapper = ({ children }) => (
  <>
    <ThemeProvider theme={Them.light} >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
)

function App() {
 
  x86asmler ()
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<PageSpinner />}>
          <ThemWrapper>
            <Routes>
              <Route path="/*" element={<InterfacePages />} />
              <Route path="/auth/*" element={<AuthPages />} />
            </Routes>
          </ThemWrapper>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default compose(

)(App);
