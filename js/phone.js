const loadPhone = async (searchText , isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phone);
    displayPhones(phones, isShowAll);

}

// display phones

const displayPhones = (phones,isShowAll) =>{
    console.log(phones);
        //1. get the element by id, where we want to do the operation 
    const phoneContainer = document.getElementById('phone-container')
  // clear phone container cards before adding new cards

  phoneContainer.textContent =''

  //display show all button if there are more than 12 phone.

  const ShowAllContainer = document.getElementById('show-all-container')

  if(phones.length > 12 && !isShowAll){
    ShowAllContainer.classList.remove('hidden');
  }
  else{
    ShowAllContainer.classList.add('hidden');
  }
  console.log('is show all',isShowAll);

  // display only first 12 phones if not show all 
  if(!isShowAll){
    phones = phones.slice(0,12);
  }

  

  // for each is used to get the elements from an object. for of is used to get data from an array. 
    phones.forEach(phone => {
        // console.log(phone);
        //2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList =` card w-full bg-base-100 shadow-xl p-4 mt-4`;
        //3. set inner html
        phoneCard.innerHTML =`
        <figure><img  src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h3 class="card-title">${phone.brand} ${phone.phone_name}</h3>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
          </div>
        </div>
        `;
        //4. append child
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner

    toggleLoadingSpinner(false);

}

// handle show details

const handleShowDetails = async (id) =>{
  console.log(id)
  //  load single phone data
  const res = await fetch (`https://openapi.programming-hero.com/api/phone/${id}`);
  console.log (res);
}

// handle search button

const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchfield = document.getElementById('search-field');
  const searchText = searchfield.value;
  console.log(searchText);
  loadPhone(searchText,isShowAll);
}

// handle spinner 

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden'); 
  }
  else{
    loadingSpinner.classList.add('hidden'); 
  }
}

// handle show all
const handleShowAll = () =>{
handleSearch(true)
}

// loadPhone()