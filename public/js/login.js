//front end js for handling the login submissions


const submitLogin = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()
  
  const input = document.querySelector( 'form' ),
        json = { username: input.querySelector('#user').value,
                 password: input.querySelector('#pass').value},
        body = JSON.stringify( json )
  if(json.username === '' || json.password === ''){
    alert('ERROR! one or more invalid input')
  }else{
    console.log(body + " in loginJS")
    const response = await fetch( '/login', {
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body
    }).then( response => response.json() )
    .then( json => console.log( json ) )
  
    jsonData.forEach(e => {
      const item = document.createElement('li')
      item.innerText = `${e.name} the ${e.type} is age ${e.age}
                        ${e.status}`
      list.appendChild(item)

      const image = `${e.picture}`
      const imgHTML = `<img src=${image} width=100px height=100px>`
      item.innerHTML += imgHTML

      const delItem = document.createElement('button')
      delItem.innerText = 'X'
      item.appendChild(delItem)
    });
  
    document.getElementById('resultsDiv').appendChild(list)
  
    const itemToDelete = document.querySelectorAll('ul li button')
    itemToDelete.forEach(e => {
      e.addEventListener('click', ()=>{
        e.parentElement.remove()
      })
    });
  }
}



window.onload = function() {
   const button = document.querySelector("button");
  button.onclick = submitLogin;
}