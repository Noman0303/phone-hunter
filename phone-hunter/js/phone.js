const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phone);
    displayPhones(phones);

}

const displayPhones = phones =>{
    // console.log(phones);
        //1. get the element by id, where we want to do the operation 
    const phoneContainer = document.getElementById('phone-container')
    // for each is used to get the elements from an object. for of is used to get data from an array. 
    phones.forEach(phone => {
        console.log(phone);
        //2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList =` card w-full bg-base-100 shadow-xl p-4 mt-4`;
        //3. set inner html
        phoneCard.innerHTML =`
        <figure><img  src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">"${phone.brand}"</h2>
          <h3 class="card-title">${phone.phone_name}</h3>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        //4. append child
        phoneContainer.appendChild(phoneCard);
    });

}

loadPhone()