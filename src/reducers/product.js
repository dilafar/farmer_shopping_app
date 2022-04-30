import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE ,FETCH_PRODUCT} from '../constans/actionTypes';

const productReducer = (state =  [] , action) => {
  switch (action.type) {
    case FETCH_ALL:
      return{
              ...state,
              products: action.payload.data,
              currentPage: action.payload.currentPage,
              numberOfPages: action.payload.numberOfPages,
      }; 

    case FETCH_PRODUCT:
        return{
                ...state,
                product: action.payload.product,
               
        }; 

    case CREATE:
      return [...state , action.payload];
    case UPDATE:
      return state.map((product) => (product._id === action.payload._id ? action.payload : product));
    case DELETE:
      return state.filter((product) => product._id !== action.payload);
    default:
      return state;
  }
};
export default productReducer;