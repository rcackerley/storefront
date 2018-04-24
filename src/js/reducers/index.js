const initialState = {
  categories: ['Clothes', 'Prints', 'Crafts'],
  products: [
    { type: 'shirt',
      name: 'The Best T-shirt Ever',
      img: '/images/shirt.jpg',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$25.00'
    },
    { type: 'hat',
      name: 'The Best Hat Ever',
      img: '/images/hat.jpg',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$15.00'    
    }
  ]
}

const reducerRoutes = {
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}


export default rootReducer;
