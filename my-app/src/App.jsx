import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import { Box, Container } from "@mui/material";
import './index.css'
import Footer from "./footer/Footer";
import Basket from "./components/basket/Basket";

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
