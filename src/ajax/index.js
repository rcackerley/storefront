//endpoints
const registration = 'https://etsetera.herokuapp.com/auth/local/register';



export let createUser = (user) => {
    fetch(registration, {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
     'content-type': 'application/json'
    }
    })
}
