import React, { Suspense, lazy, useEffect, useLayoutEffect, useState, useContext, Fragment } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation, Navigate } from "react-router-dom";
import { DefaultLayout } from './components/Layout';
import PrivateRoutes from './routes';
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
            {PrivateRoutes.map((route,index) => {
                const Page = route.component;
                const Layout = route.layout === null ? Fragment : DefaultLayout;
                return <Route key={index} path={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
            })}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

//