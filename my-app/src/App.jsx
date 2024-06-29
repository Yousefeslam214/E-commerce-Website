import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';

function App() {
  return (
    <>
      <Navbar />
      <h1>yousef</h1>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
