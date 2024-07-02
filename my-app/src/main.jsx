import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './normalize.css'
import ProductProvider from './contexts/ProductContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
import './tailwind.css'; // Import the Tailwind CSS file
import FavouriteProvider from './contexts/FavouriteContext.jsx'
import DeliveryProvider from './contexts/DeliveryContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavouriteProvider>
      <ProductProvider>
        <CartProvider>
          <DeliveryProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </DeliveryProvider>
        </CartProvider>
      </ProductProvider>
    </FavouriteProvider>
  </React.StrictMode>

)
