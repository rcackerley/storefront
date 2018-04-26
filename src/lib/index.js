let cartWithQuantity = (cart, newProduct) => {
  if (cart.includes(newProduct)) {
    // console.log(true);
    let newCart = cart.map(product => {
      if (product.id === newProduct.id) {
        product.quantity += 1;
        return product;
      } else {
        return product;
      }
    })
    return newCart;
  } else {
    // console.log(false);
    newProduct.quantity = 1;
    return [...cart, newProduct];
  }
}

export default cartWithQuantity;
