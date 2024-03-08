console.log("js-array-carousel");

// RECUPERO ELEMENTO item-container 
const itemContainerElement = document.querySelector(".item-container");
console.log(itemContainerElement);

// CREO UN ARRAY CON LE imgPath
const arrayImg = [
"./img/01.webp",
"./img/02.webp",
"./img/03.webp",
"./img/04.webp",
"./img/05.webp"
];
//console.log(arrayImg);

// ACCEDO AD OGNI ELEMENTO PRESENTE NELL'arrayImg
for(let i = 0; i < arrayImg.length; i++){
    const imgPath = arrayImg[i];
    console.log(imgPath);

    // CREO CONTENUTO DEL item-container
    const sliderItem = `
    <div class="item">
        <img src="${imgPath}">
    </div>
    `;

    //INSERISCO CONTENUTO NELL' item-container
    itemContainerElement.innerHTML += sliderItem;
}

// RECUPERO OGNI ELEMENTO item FIGLI DI item-container
const sliderItems = document.getElementsByClassName("item"); //HTMLCollection
console.log(sliderItems);

// AGGIUNGO LA CLASSE active AL PRIMO sliderItem ALL'INTERNO DI sliderItems
const activeItem = 0;
sliderItems[activeItem].classList.add("active");