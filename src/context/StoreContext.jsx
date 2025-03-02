import { createContext, useEffect,useState} from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cardItems,setCardItems] = useState({});
    const addToCart = (itemId) => {
        if(!cardItems[itemId]){
            setCardItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) =>{
        setCardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cardItems) {
            if (cardItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === String(item));
                if (itemInfo) { // Ensure item exists before using price
                    totalAmount += itemInfo.price * cardItems[item];
                }
            }
        }
        return totalAmount; // ✅ Return the total amount
    };

    const contextValue = {
        food_list,
        cardItems,
        setCardItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount 
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider