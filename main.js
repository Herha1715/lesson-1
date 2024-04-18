
const swiper = new Swiper('.reviews__slider', {

    slidesPerView: 2,
    spaceBetween: 22,
    loop: true,

    navigation: {
        nextEl: '.reviews__button-prev',
        prevEl: '.reviews__button-next',
    },
});

//   Випадаюче вікно
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__open');
});

// Акордеон
var acc = document.getElementsByClassName('accordeon__title');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    }
}




window.onload = () => {
    
    
    if (document.documentElement.clientWidth < 1000) {
    var child = document.querySelector('.contacts__text');
    var parent2 = document.querySelector('.contacts__inner');
    // Переміщуємо елемент div до нового батьківського елемента
    parent2.appendChild(child);
    }




    if (document.documentElement.clientWidth < 500) {
        const swiper = new Swiper('.reviews__slider', {
          
            slidesPerView: 1,
            
            spaceBetween: 22,
            loop: true,

            navigation: {
                nextEl: '.reviews__button-prev',
                prevEl: '.reviews__button-next',
            },
        });

    }
}

// Валідація форми
function validation(form){

    function removeError(input){
        const parent = input.parentNode;
        if(parent.classList.contains("error")){
            parent.querySelector(".error_label").remove()
            parent.classList.remove("error")
        }
    }

    function createError (input, text){
        const parent = input.parentNode;
        const errorLabel = document.createElement("label")

        errorLabel.classList.add("error_label")
        errorLabel.textContent = text;
        parent.classList.add("error");
        parent.append(errorLabel)
    }

   let result = true;

   const allInputs = form.querySelectorAll ("input");

   for (const input of allInputs){

    removeError(input)

    if (input.value == "") {
        console.log("Помилка");
        createError(input, "Поле пусте")

        result = false;
    }
   }

   return result
}

document.getElementById("contact-form").addEventListener("submit",function(event){
    event.preventDefault()
 

    if(validation(this)==true)
    alert("Форма перевірена")

})




