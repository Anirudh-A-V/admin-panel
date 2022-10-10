import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// Initial States
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

// State Provider
export const ContextProvider = ({ children }) => { 
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider
            value={{ 
                activeMenu,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);