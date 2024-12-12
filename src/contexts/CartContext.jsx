// import React, { createContext, useReducer } from "react";
// import { toast } from "sonner";

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":

//       const existingProduct = state.find((item) => item.id === action.payload.id);

//       if (existingProduct) {
//         return state.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
//             : item
//         );
//       }
//         toast.success(`Product added to cart ${action.payload.title}`,{
//           duration:2000
//         });
//       return [...state, { ...action.payload, quantity: 1 }];

//     case "UPDATE_QUANTITY":
//       return state.map((item) =>
//         item.id === action.payload.id
//           ? { ...item, quantity: Math.max(1, Math.min(action.payload.quantity, 10)) }
//           : item
//       );

//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, []);
//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => React.useContext(CartContext);

import React, { createContext, useReducer } from "react";
import { toast } from "sonner";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        const updatedState = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
            : item
        );

        if (existingProduct.quantity >= 10) {
          toast.error("Maximum quantity reached (10).", { duration: 2000 });
        } else {
          toast.success(`Increased quantity for ${action.payload.title}.`, {
            duration: 2000,
          });
        }
        return updatedState;
      }

      toast.success(`Product added to cart: ${action.payload.title}`, {
        duration: 2000,
      });
      return [...state, { ...action.payload, quantity: 1 }];

    case "UPDATE_QUANTITY":
      const updatedQuantityState = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, Math.min(action.payload.quantity, 10)) }
          : item
      );

      const product = state.find((item) => item.id === action.payload.id);
      if (action.payload.quantity > 10) {
        toast.error("You can't exceed the maximum quantity (10).", { duration: 2000 });
      } else if (action.payload.quantity < 1) {
        toast.error("Quantity can't be less than 1.", { duration: 2000 });
      } else if (product) {
        toast.success(`Updated quantity for ${product.title} to ${action.payload.quantity}.`, {
          duration: 2000,
        });
      }

      return updatedQuantityState;

    case "REMOVE_FROM_CART":
      const removedProduct = state.find((item) => item.id === action.payload);
      if (removedProduct) {
        toast.success(`Removed ${removedProduct.title} from cart.`, { duration: 2000 });
      }
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      toast.success("Cart cleared.", { duration: 2000 });
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);