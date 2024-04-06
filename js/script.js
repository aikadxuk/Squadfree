// header blue

window.addEventListener("scroll", () => {
  const header = document.querySelector(".headerTop");
  const main = document.querySelector(".background__block");

  if (window.scrollY > main.offsetTop) {
    header.classList.add("header--blue");
    header.classList.remove("header--transparent");
  } else {
    header.classList.remove("header--blue");
    header.classList.add("header--transparent");
  }
});

// animation downUp

const upAnimation = document.querySelectorAll(".upAnimation");

window.addEventListener("scroll", () => {
  upAnimation.forEach((item) => {
    let itemContainer = item.getBoundingClientRect().top;
    let triggerAnimation = (window.innerHeight / 5) * 4;

    if (itemContainer < triggerAnimation) {
      item.classList.add("downUp__animation");
    }
  });
});

// hamburguer

const hamburguer = document.querySelector(".header__hamburguer");

hamburguer.addEventListener("click", () => {
  const navigation = document.querySelector(".header__nav");

  if (navigation.classList.contains("openMenu")) {
    navigation.classList.remove("openMenu");
    hamburguer.classList.remove("openHamburguer");
  } else {
    navigation.classList.add("openMenu");
    hamburguer.classList.add("openHamburguer");
  }
});

// counter block

let counterNumber = document.querySelectorAll('.counterNumber')

function counterFunction(startValues){
    counterNumber.forEach((eachNumber, numberIndex)=>{
        let i = 0
        let count = startValues[numberIndex]
        const updateCounter = () =>{
            if(i <= count){
                eachNumber.innerHTML = `${i}`
                i++
                setTimeout(updateCounter, 1)
            }
        }
        updateCounter()
    })
}

const startValues = [232, 521, 1463, 15]

counterFunction(startValues)

// gallery and overlay

const buttons = document.querySelectorAll('.gallery__button')
const galleryCards = document.querySelectorAll('.gallery__card')
const galleryImgs = document.querySelectorAll('.galleryImg')
const overlayBackground = document.querySelector('.overlayBackground')
const imgOverlay = document.querySelector('#imgOverlay')
const closeOverlay = document.querySelector('.fa-xmark')
const scrollOff = document.querySelector('#scrollOff')

//! gallery

buttons.forEach((buttonItem, buttonIndex)=>{
  buttonItem.addEventListener('click', () =>{
    openImgGallery(buttonIndex)
  })
})

function openImgGallery(buttonIndex){
  galleryCards.forEach(cardItem =>{
    switch(buttonIndex){
      case 0:
        if(cardItem.classList.contains('gallery__card')){
          cardItem.style.display = 'flex'
        }
        break
      case 1:
        if(cardItem.classList.contains('app')){
          cardItem.style.display = 'flex'
        }else{
          cardItem.style.display = 'none'
        }
        break
      case 2:
        if(cardItem.classList.contains('card')){
          cardItem.style.display = 'flex'
        }else{
          cardItem.style.display = 'none'
        }
        break
      case 3:
        if(cardItem.classList.contains('web')){
          cardItem.style.display = 'flex'
        }else{
          cardItem.style.display = 'none'
        }
        break
    }
  })
}

//* overlay

galleryImgs.forEach(cardItemClick =>{
  cardItemClick.addEventListener('click', ()=>{
    overlayBackground.classList.add('openBackground')
    imgOverlay.src = cardItemClick.src
    scrollOff.style.overflow = 'hidden'
  })
})

closeOverlay.addEventListener('click', ()=>{
  overlayBackground.classList.remove('openBackground')
  scrollOff.style.overflow = 'scroll'
})

// Carrossel e slide

const slide = document.querySelector('.slide__cards')
let moveCard = 0

function slideFunction(){
  if(moveCard < 800){
    moveCard += 60
    slide.style.left = `-${moveCard}px`
  }else{
    moveCard = 0
    slide.style.left = `-${moveCard}px`
  }
}

slide.style.transition = `.6s`

let intervalId = setInterval(slideFunction, 600)

slide.addEventListener('mouseover', ()=>{
  clearInterval(intervalId)
})

slide.addEventListener('mouseleave', ()=>{
  intervalId = setInterval(slideFunction, 600)
})

// map

var map = L.map('map').setView([40.71018452470035, -74.00606884597453], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.71018452470035, -74.00606884597453]).addTo(map)
    .bindPopup('Downtown Conference Center')
    .openPopup();