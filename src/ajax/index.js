//endpoints
const registration = 'https://etsetera.herokuapp.com/auth/local/register';
const loginEndPoint = 'https://etsetera.herokuapp.com/auth/local';



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
