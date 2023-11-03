const initialState = {
  total: 0,
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddToCart":
  const existingProduct = state.products.find(product => product.id === action.payload.id);
  if (existingProduct) {
    return {
      ...state,
      products: state.products.map(product =>
        product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
      ),
      total: state.total + 1,
    };
  } else {
    return {
      ...state,
      products: [...state.products, { ...action.payload, quantity: 1 }],
      total: state.total + 1,
    };
  }
  case "RemoveFromCart":
    const updatedProducts = state.products.filter((product) => product.id !== action.payload);
    const total = action.total - 1;
    return {
      ...state,
      products: updatedProducts,
      total,
    };
  
    case "UpdateQuantity":
      const { productId, newQuantity } = action.payload;
      console.log(action.total)
      const updatedProductsQuantity = state.products.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      );
      
      return {
        ...state,
        products: updatedProductsQuantity,
        total: action.total,
      };
    default:
      return state;
  }
};

export default cartReducer;
