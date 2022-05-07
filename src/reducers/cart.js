import { CART_ADD_ITEM , CART_REMOVE_ITEM,CART_CLEAR_ITEMS} from '../constans/actionTypes';

const cartReducer = (state = {cartItems : []}, action)=>{

    switch(action.type){
        case CART_ADD_ITEM : 
                localStorage.setItem('cart', JSON.stringify({ ...action?.payload }));
                const item = action.payload;
                const existingItem = state.cartItems.find((x) => x.product === item.product);
                if(existingItem){
                    return {
                        ...state,
                        cartItems: state.cartItems.map((x) => x.product === existingItem.product ? item : x),
                    }
                }else{
                    return {
                        ...state,
                        cartItems : [...state.cartItems, item],
                    };
                }

        case CART_REMOVE_ITEM:
                 localStorage.setItem('cart', JSON.stringify({ ...state.cartItems.filter((x) => x.product !== action.payload) }));
                    return {
                      ...state,
                      cartItems: state.cartItems.filter((x) => x.product !== action.payload),
                    };

        case CART_CLEAR_ITEMS:
                        return {
                          ...state,
                          cartItems: [],
                        };
               
        default :
                return state;
    }



};
export default cartReducer;