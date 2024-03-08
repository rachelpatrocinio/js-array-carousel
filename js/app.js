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
const sliderItems = document.getElementsByClassName("item"); //HTMLColleciton
console.log(sliderItems);

//AGGIUNGO LA CLASSE active ALL'ELEMENTO CHE SI VEDRA' DI DEFAULT
let activeItemIndex = 0; // num
sliderItems[activeItemIndex].classList.add("active");

// RECUPERO next E prev
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// ASCOLTO IL CLICK DELL'UTENTE
next.addEventListener("click", function(){
    console.log("next");
     // TOLGO LA CLASSE "active" DALL'ELEMENTO CORRENTE
     sliderItems[activeItemIndex].classList.remove("active");

    //INCREMENTO activeItemIndex DI 1
    activeItemIndex++;

    //SE L'INDICE è GUALE ALLA LUNGHEZZA DELLE IMMAGINI RI-AZZERO L'INDICE
    if(activeItemIndex === arrayImg.length){
        activeItemIndex = 0
    }

     //AGGIUNGO LA CLASSE "active" AL NUOVO ELEMENTO
     sliderItems[activeItemIndex].classList.add("active");
})

prev.addEventListener("click", function(){
    console.log("prev");
        // TOLGO LA CLASSE "active" DALL'ELEMENTO CORRENTE
        sliderItems[activeItemIndex].classList.remove("active");

        //INCREMENTO activeItemIndex DI 1
        activeItemIndex--;

        if(activeItemIndex < 0){
            activeItemIndex = 4
        }

        //AGGIUNGO LA CLASSE "active" AL NUOVO ELEMENTO
        sliderItems[activeItemIndex].classList.add("active");
})







