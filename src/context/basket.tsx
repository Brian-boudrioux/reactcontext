import { createContext, useState, useContext } from "react";
import type { Dispatch, ReactNode } from "react";
import type Product from "../interfaces/product";

interface Basket {
  basket: Product[] | null,
  setBasket: Dispatch<React.SetStateAction<Product[]>>
}

const basketContext = createContext<Basket>({basket: [], setBasket: () => []});

function BasketProvider({children} : {children: ReactNode} ) {
  const [basket, setBasket] = useState<Product[]>([]);

  return (
    <basketContext.Provider value={{basket, setBasket}}>
      {children}
    </basketContext.Provider>
  )
}

export const useBasket = () => {
  return useContext(basketContext);
}

export default BasketProvider;