import { createContext, useEffect, useState } from "react";


export const FavouriteContext = createContext()

const FavouriteProvider = ({ children }) => {
    const [favourite, setFavourite] = useState([])
    const toggleFavourite = (product, id) => {
        const isFavourite = favourite.some(item => item.id === id);
        if (isFavourite) {
            setFavourite(favourite.filter(item => item.id !== id));
        } else {
            setFavourite([...favourite, { ...product }]);
        }
        // const addToFavourite = (product, id) => {
        //     const newItem = { ...product };
        //     // check if item in cart already
        //     const FavouriteItem = favourite.find(item => {
        //         return item.id === id;
        //     })
        //     // if item already in Favourite
        //     if (FavouriteItem) {

        //         setFavourite(newCart);
        //     }
        //     else {
        //         setFavourite([...favourite, newItem]);
        //     }

    }

    return (
        <FavouriteContext.Provider value={{ favourite, toggleFavourite }}>
            {children}
        </FavouriteContext.Provider>
    );
}
export default FavouriteProvider;
