const grande = document.querySelector(".imagenes")
const punto = document.querySelectorAll(".punto")

punto.forEach((cadapunto,i) => {
    punto[i].addEventListener('click',()=>{
        let position = i
        let operacion = position * -20

        grande.style.transform = `translateX(${operacion}%)`
        punto.forEach((cadapunto,i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
});
const grande2 = document.querySelector("#imagenes-2")
const punto2 = document.querySelectorAll(".punto-2")

punto2.forEach((cadapunto,i) => {
    punto2[i].addEventListener('click',()=>{
        let position = i
        let operacion = position * -20

        grande2.style.transform = `translateX(${operacion}%)`
        punto2.forEach((cadapunto,i)=>{
            punto2[i].classList.remove('activo')
        })
        punto2[i].classList.add('activo')
    })
});
const grande3 = document.querySelector("#imagenes-3")
const punto3 = document.querySelectorAll(".punto-3")

punto3.forEach((cadapunto,i) => {
    punto3[i].addEventListener('click',()=>{
        let position = i
        let operacion = position * -20

        grande3.style.transform = `translateX(${operacion}%)`
        punto3.forEach((cadapunto,i)=>{
            punto3[i].classList.remove('activo')
        })
        punto3[i].classList.add('activo')
    })
});
const grande4 = document.querySelector("#imagenes-4")
const punto4 = document.querySelectorAll(".punto-4")

punto4.forEach((cadapunto,i) => {
    punto4[i].addEventListener('click',()=>{
        let position = i
        let operacion = position * -20

        grande4.style.transform = `translateX(${operacion}%)`
        punto4.forEach((cadapunto,i)=>{
            punto4[i].classList.remove('activo')
        })
        punto4[i].classList.add('activo')
    })
});
const grande5 = document.querySelector("#imagenes-5")
const punto5 = document.querySelectorAll(".punto-5")

punto5.forEach((cadapunto,i) => {
    punto5[i].addEventListener('click',()=>{
        let position = i
        let operacion = position * -20

        grande5.style.transform = `translateX(${operacion}%)`
        punto5.forEach((cadapunto,i)=>{
            punto5[i].classList.remove('activo')
        })
        punto5[i].classList.add('activo')
    })
});
const grande6 = document.querySelector("#imagenes-6")
const punto6 = document.querySelectorAll(".punto-6")

punto6.forEach((cadapunto,i) => {
    punto6[i].addEventListener('click',()=>{
        let position = i
        let operacion = position * -20

        grande6.style.transform = `translateX(${operacion}%)`
        punto6.forEach((cadapunto,i)=>{
            punto6[i].classList.remove('activo')
        })
        punto6[i].classList.add('activo')
    })
});
//XD
const infoBoton1 = document.querySelector("#info-btn1")
const infoBoton2 = document.querySelector("#info-btn2")
const infoBoton3 = document.querySelector("#info-btn3")
const infoBoton4 = document.querySelector("#info-btn4")
infoBoton1.addEventListener('click',()=>{
  open("https://facebook.com")
})
infoBoton2.addEventListener('click',()=>{
  open("https://github.com/UnCompa")
})
infoBoton3.addEventListener('click',()=>{
  open("https://instagram.com/uncompa1777")
})
infoBoton4.addEventListener('click',()=>{
  open("https://tiktok.com")
})