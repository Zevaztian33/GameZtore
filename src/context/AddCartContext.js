import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

export const AddCartContext = createContext();

export const AddCartProvider = ({ children }) => {
    const MySwal = withReactContent(Swal);
    const [ addCart, setAddCart ] = useState(0)
    if(addCart){
        MySwal.fire({
        text: 'Agregado correctamente',
        icon: 'success'
        })
    }

    return(
        <AddCartContext.Provider value={{
            addCart,
            setAddCart
        }}>
            { children }
        </AddCartContext.Provider>
    )
}