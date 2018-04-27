//endpoints
const registration = 'https://etsetera.herokuapp.com/auth/local/register';
const loginEndPoint = 'https://etsetera.herokuapp.com/auth/local';
const getProductsEndPoint = 'https://etsetera.herokuapp.com/product';



export let createUser = (user) => {
    fetch(registration, {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
     'content-type': 'application/json'
    }
    })
}

export let login = (user) => {
  return fetch(loginEndPoint, {
    body: JSON.stringify(user),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
}

export let getProducts = (token) => {
  console.log(token);
    if (token === null) {
      console.log('here')
      return fetch(getProductsEndPoint, {
      method: 'GET',
      })
      .then(res => res.json())
  } else {
      return fetch(getProductsEndPoint, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res => res.json())
  }
}
