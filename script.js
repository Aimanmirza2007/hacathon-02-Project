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

// Navbar toggle



// const navLinks = document.getElementById("nav-links");
// const newMenu = document.getElementById("nav-menu");
// const newClose = document.getElementById("nav-close");

// if (newMenu) {
//   newMenu.addEventListener("click", () => {
//     navLinks.classList.add("show-menu");
//   });
// }

// if (newClose) {
//   newClose.addEventListener("click", () => {
//     navLinks.classList.remove("show-menu");
//   });
// }
// cards work


//  const add = document.getElementById("add");
//   add.addEventListener('click',function(){
//     const title = document.getElementById("Title").value
//     const description = document.getElementById("description").value;
//     const category = document.getElementById("category").value;

//     const card = document.createElement('div');
//     card.classList.add('card');
  
//     card.innerHTML = `
//       <h3>${title}</h3>
//       <p>${description}</p> 
//       <small>Category: ${category}</small>
//     `;
//     document.getElementById('cardsContainer').appendChild(card);

//     // Inputs clear karne ke liye
//     document.getElementById('title').value = '';
//     document.getElementById('description').value = '';
//     document.getElementById('category').value = '';
//   })

// function add(){
//     const title = document.getElementById("Title").value
//         const description = document.getElementById("description").value;
//         const category = document.getElementById("category").value;
    
//         const card = document.createElement('div');
//         card.classList.add('card');
      
//         card.innerHTML = `
//           <h3>${title}</h3>
//           <p>${description}</p> 
//           <small>Category: ${category}</small>
//         `;
//         document.getElementById('cardsContainer').appendChild(card);
    
//         // Inputs clear karne ke liye
//         document.getElementById('title').value = '';
//         document.getElementById('description').value = '';
//         document.getElementById('category').value = '';
      
    
// }

document.getElementById('addButton').addEventListener('click', function() {
    
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
  
    if (title && description && category) {
      
      let card = document.createElement('div');
      card.classList.add('card');
      
      
      card.innerHTML = `
        <h4>${title}</h4>
        <p>${description}</p>
        <div class="date">${category}</div>
      `;
      
      
      document.getElementById('cardContainer').appendChild(card);
      
    
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      document.getElementById('category').value = '';
    } else {
      alert('Please fill all fields');
    }
  });