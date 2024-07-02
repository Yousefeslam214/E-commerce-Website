import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import { Box } from "@mui/material";
import './index.css'
import Footer from "./footer/Footer";
import Basket from "./components/basket/Basket";
import Favourites from "./components/favourites/Favourites";
import Delivery from "./components/delivery/Delivery";

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
