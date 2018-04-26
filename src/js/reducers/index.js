import { removeFromCart, addToCart, handleUsername, handlePassword, handleEmail, createAccount} from '../actions/index';
import cartWithQuantity from '../../lib/index';
import {createUser} from '../../ajax/index';

const initialState = {
  categories: ['gear', 'tickets', 'sports'],
  cart: [],
  typedUsername: '',
  typedPassword: '',
  typedEmail: '',
  products: [
    { type: 'gear',
      name: 'King Peach Jersey',
      img: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3047000/ff_3047530_full.jpg&w=340',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$99.00',
      id: 1
    },
    { type: 'gear',
      name: 'ATL United Jersey',
      img: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_2625000/ff_2625841_full.jpg&w=340',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$87.00',
      id: 2
    },
    { type: 'gear',
      name: 'The Best T-shirt Ever',
      img: 'http://prospectusghanaltd.com/wp-content/uploads/2016/12/t-shirts-1.jpg',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$25.00',
      id: 3
    },
    { type: 'gear',
      name: 'The Best Hat Ever',
      img: 'https://cdn.shopify.com/s/files/1/0678/8333/products/BRCC_trucker_hat_blk-blk_frnt_large.jpg?v=1502135728',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$15.00',
      id: 4
    },
    { type: 'gear',
      name: 'Braves Hat',
      img: 'https://s7d2.scene7.com/is/image/dkscdn/17NEWMMLBBRVSNVYRAPAB_is/?$DSG_ProductCard$',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$15.00',
      id: 5
    },
    { type: 'gear',
      name: 'ATL United Hat',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwlhqccC1Mrj_YLU_1zo4zB0iG8J9cqbUsNj5HxZJU6kdYb4h',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$15.00',
      id: 6
    },
    { type: 'gear',
      name: 'King Peach Jersey',
      img: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3047000/ff_3047530_full.jpg&w=340',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$99.00',
      id: 1
    },
    { type: 'gear',
      name: 'ATL United Jersey',
      img: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_2625000/ff_2625841_full.jpg&w=340',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$87.00',
      id: 2
    },
    { type: 'gear',
      name: 'ATL United Hat',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwlhqccC1Mrj_YLU_1zo4zB0iG8J9cqbUsNj5HxZJU6kdYb4h',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$15.00',
      id: 6
    },
    { type: 'tickets',
      name: 'ATL vs. LAFC',
      img: 'https://pbs.twimg.com/profile_images/1358660494/sports-events-tickets_400x400.png',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$55.00',
      id: 7
    },
    { type: 'tickets',
      name: 'ATL vs. MONTREAL',
      img: 'https://pbs.twimg.com/profile_images/1358660494/sports-events-tickets_400x400.png',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$55.00',
      id: 8
    },
    { type: 'tickets',
      name: 'ATL vs. ORLANDO',
      img: 'https://pbs.twimg.com/profile_images/1358660494/sports-events-tickets_400x400.png',
      desc: 'LoremIpsum adadu afuafuasn sbf awhfa',
      price: '$55.00',
      id: 9
    }
  ]
}

const reducerRoutes = {
  [addToCart]: (state, action) => ({
    ...state, cart: cartWithQuantity(state.cart, action.payload)
  }),
  [handleUsername]: (state, action) => ({
    ...state, typedUsername: action.payload
  }),
  [handlePassword]: (state, action) => ({
    ...state, typedPassword: action.payload
  }),
  [handleEmail]: (state, action) => ({
    ...state, typedEmail: action.payload
  }),
  [createAccount]: (state, action) => {
    let user = {email: state.typedEmail, password: state.typedPassword, username: state.typedUsername};
    console.log(user);
    createUser(user)
    return {...state}
  },
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}


export default rootReducer;
