
//main variables
let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`;
const gridContainer = document.querySelector('.grid-container');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

//fetchAPI stuff
fetch(urlAPI)
.then((res) => res.json())
.then((res) => res.results)
.then(displayEmployees)
.catch((err) => console.log(err))

function displayEmployees(employeeData) {
    employees = employeeData;

    //html markup goes here
    let employeeHTML = ``;


//for loop for each employee + HTML markup
employees.forEach((employee, index) => {
    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let picture = employee.picture;

    employeeHTML += `
    <div class="card" data-index="${index}">
        <img class="avatar" src="${picture.large}"/>
        <div class="text-container">
            <h2 class="cardName">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="address">${city}</p>
        </div>
    </div>
    `;
});
gridContainer.innerHTML = employeeHTML;
}

//modal display function
function displayModal (index) {
    let {
        name, 
        dob,
        phone,
        email,
        location: { city, street, state, postcode },
        picture
    } = employees[index];
    let date = new Date(dob.date);
    
    
    const modalHTML = `
    <img class="avatar" src="${picture.large}"/>
    <div class="text-container">
        <h2 class="name">${name.first} ${name.last}</h2>
        <p class="email">${email}</p>
        <p class="address">${city}</p>
        <hr/>
        <p>${phone}</p>
        <p class="address">${street.number}, ${street.name}, ${state} ${postcode}</p>
        <p>Birthday:
            ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
    `;

    overlay.classList.remove('hidden');
    modalContainer.innerHTML = modalHTML;
}


//click event for open modal display
gridContainer.addEventListener("click", e => {
    if (e.target !== gridContainer) {
        const card = e.target.closest(".card");
        let index = card.getAttribute("data-index");
        displayModal(index);
    }
});

//modal close click event
modalClose.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

//next and previous buttons

const next = document.querySelector(".nextButton");
const previous = document.querySelector(".prevButton");

let i = 0;
next.addEventListener('click', (e) => {
    if (i < 11) {
        i++;
    }
    displayModal(i);
});

previous.addEventListener('click', (e) => {
    if (i > 0) {
        i--;
    }
    displayModal(i);
});

//search barrr
const search = document.getElementById("search");

search.addEventListener("keyup", function (e) {
  const input = e.target.value.toUpperCase();
  const cards = document.querySelectorAll(".card");
  const cardName = document.querySelector('.cardName')
  
  Array.from(cards).forEach(function(cards){
  const name = cards.textContent;
      if(name.toUpperCase().indexOf(input) !== -1) {
            cards.style.display = 'flex';
            
      }  else {
            cards.style.display = 'none';
      }
})
  
});