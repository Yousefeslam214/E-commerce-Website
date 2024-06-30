import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './normalize.css'
import ProductProvider from './contexts/ProductContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
import './tailwind.css'; // Import the Tailwind CSS file


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>

)
