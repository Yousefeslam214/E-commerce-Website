import { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const DeliveryContext = createContext();

const DeliveryProvider = ({ children }) => {
    const { cart } = useContext(CartContext);
    const [itemDelivery, setItemDelivery] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);

    // update item amount
    useEffect(() => {
        const amount = itemDelivery.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.amount;
        }, 0);
        setItemAmount(amount);
    }, [itemDelivery]);

    const addToCartDelivery = (products) => {
        const updatedDelivery = [...itemDelivery];
        products.forEach(product => {
            // Example: Group by category
            const category = product.category; // Adjust this to your product's category attribute
            const existingGroup = updatedDelivery.find(group => group.category === category);

            if (existingGroup) {
                // Add product to existing group
                existingGroup.products.push(product);
            } else {
                // Create a new group for this category
                updatedDelivery.push({ category: category, products: [product] });
            }
        });

        setItemDelivery(updatedDelivery);
    };

    return (
        <DeliveryContext.Provider value={{ itemDelivery, addToCartDelivery, itemAmount }}>
            {children}
        </DeliveryContext.Provider>
    );
};

export default DeliveryProvider;
