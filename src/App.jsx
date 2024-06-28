import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css'
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar';
import FormOne from './components/forms/FormOne';
import FormTwo from './components/forms/FormTwo';
import Home from './Pages/Home/Home';
import Blog from './Pages/Favorite/Favorite';
import Price from './Pages/Price/Price';
// import Details, { loader as prdDetailsLoader } from './Pages/Products/Details';
import Details from './Pages/Movies/Details';
import AppLayout from './AppLayout';
import NotFound from './Pages/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './store/store';
import Movies from './Pages/Movies/Movies';
import Favorite from './Pages/Favorite/Favorite';
import { ThemeProvider } from './contexts/theme';
import { useState } from 'react';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/Favorite', element: <Favorite /> },
      { path: '/price', element: <Price /> },
      { path: '/movies', element: <Movies /> },
      { path: '/details/:id', element: <Details /> },
      // { path: '/details/:id', element: <Details />, loader: prdDetailsLoader, errorElement:<NotFound /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

function App() {

  const [theme,setTheme] = useState("light")
  return  <ThemeProvider value={{theme,setTheme}}>
  <Provider store={ store }>
            <RouterProvider router={ routes } />
          </Provider>
  </ThemeProvider>
  // (
  
    // <>
      {/* <BrowserRouter>
        <ResponsiveAppBar />
        <div className='mx-auto max-w-screen-xl my-5'>
          <div className='mx-4'>
            <Routes>
            
              <Route index element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/price' element={<Price />} />
              <Route path='/products' element={<Products />} />
              <Route path='/details/:id' element={<Details />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter> */}
    // </>
  // );
}

export default App
