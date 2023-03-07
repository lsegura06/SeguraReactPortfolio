import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Porfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PortfolioContainer />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Porfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

const App = () => (
  <RouterProvider router={router}>
    <PortfolioContainer />
  </RouterProvider>
);

export default App;
