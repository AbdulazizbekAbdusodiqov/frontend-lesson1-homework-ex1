const mainElement = document.querySelector(".main")
mainElement.innerHTML += `<div class="container"></div>`

function generateCard(data) {
    data.forEach((element) => {
        mainElement.querySelector(".container").innerHTML += `
            <div class="card">
            
                <img src="${element.image}" alt="image">
            
                <div class="card__info">
        
                    <h3>${element.firstName} ${element.lastName}</h3>
                    <p>${element.company.name} </p>
        
                    <div class="info__title">
                        <p>closter</p>
                        <p>mountain</p>
                        <p>maintananse</p>
                        <p>trip</p> 
                    </div>
                </div>
            </div>
        `
    }); // title ni mockdatadan topolmaganim uchun default yozib ketdim
}

fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(result => generateCard(result.users))