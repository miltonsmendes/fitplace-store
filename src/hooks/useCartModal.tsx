import { createContext, useState, ReactNode, useContext } from 'react';


interface CartProviderProps {
    children: ReactNode;
}

interface CartModalProps {
    isOpen: boolean,
    openModal: () => void;
}

export const CartModalContext = createContext<CartModalProps>({} as CartModalProps);


export function CartModalProvider({ children }: CartProviderProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function openModal(){
        setIsOpen(!isOpen);
    }

    return (
        <CartModalContext.Provider value={{isOpen, openModal}}>
            {children}
        </CartModalContext.Provider>
    )

}

export function useCartModal(){
    const context = useContext(CartModalContext);

    return context;
}