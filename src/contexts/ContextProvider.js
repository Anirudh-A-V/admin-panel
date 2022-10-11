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
    const [clicked, setClicked] = useState(initialState);

    const handleClick = (clicked) => {
        setClicked({ ...initialState, [clicked]: true });
    }

    const [screenSize, setScreenSize] = useState(undefined);
    return (
        <StateContext.Provider
            value={{ 
                activeMenu,
                setActiveMenu,
                clicked,
                setClicked,
                handleClick,
                screenSize,
                setScreenSize,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);