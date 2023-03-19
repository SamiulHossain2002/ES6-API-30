function  loadUser () {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json));
};

function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data =>displayUser(data))
}

function displayUser (users){
  //console.log(users);
  const ul = document.getElementById('users');
  for (const user of users) {
    console.log(user);
    const li = document.createElement('li');
    li.innerText =`${user.name} == ${user.email} == ${user?.id} == ${user?.address.street}`;
    ul.appendChild(li)
    
    
  }
 
}
