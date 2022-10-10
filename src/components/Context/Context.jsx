import { createContext, useState } from "react";


export const context = createContext()
    
export const ContextProvider = ({ children }) => {
    const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState('');

      const toogleModal = img => {
    setShowModal(img);
  };
    
    return (
        <context.Provider value={{images, setImages, toogleModal, showModal, setShowModal}}>
           {children}
        </context.Provider>
    )
}