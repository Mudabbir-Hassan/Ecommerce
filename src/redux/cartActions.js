const AddToCart = (product) => {
  return {
    type: "AddToCart",
    payload: product,
  };
};

const RemoveFromCart = (product) => {
  return {
    type: "RemoveFromCart",
    payload: product,
  };
};

const UpdateQuantity = (productId, newQuantity) => {
  return {
    type: "UpdateQuantity",
    payload: {
      productId: productId,
      newQuantity: newQuantity,
    },
  };
};

export { AddToCart, RemoveFromCart, UpdateQuantity };
