// sign up
const SignUp = document.getElementById("Sign-up");
SignUp.addEventListener('click',function(){
  window.location.href = "./signuplogin folder/sign.html"
})
// Login
const Login = document.getElementById("Login");
Login.addEventListener('click',function(){
  window.location.href = "./signuplogin folder/login.html"
})



document.getElementById('addButton').addEventListener('click', function() {
    
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
  
    if (title && description && category) {
      
      let card = document.createElement('div');
      card.classList.add('card');
      
      
      card.innerHTML = `
        <h4>${title}</h4>
        <p><strong>Description</strong>${description}</p>
        <div class="category"><strong>Description</strong>${category}</div>
      `;
      
      
      document.getElementById('cardContainer').appendChild(card);
      
    
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      document.getElementById('category').value = '';
    } else {
      alert('Please fill all fields');
    }
  });