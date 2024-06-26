import React , {Fragment}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'

function App() {
  return (
    <div className='w-full h-full'>
      {/* <Loading isLoading={isLoading}> */}
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
      {/* </Loading> */}
    </div>
  );
}

export default App;
