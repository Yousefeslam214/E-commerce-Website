import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0);
        setTotal(total)
    }, [cart]);

    // update item amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setItemAmount(amount);
        }
    }, [cart])
    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        // check if item in cart already
        const CartItem = cart.find(item => {
            return item.id === id;
        })
        // if item already in cart
        if (CartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return { ...item, amount: CartItem.amount + 1 }
                }
                else {
                    return item;
                }
            })
            setCart(newCart);
        }
        else {
            setCart([...cart, newItem]);
        }
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, itemAmount, total }}>
            {/* <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total, }}> */}
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider;
