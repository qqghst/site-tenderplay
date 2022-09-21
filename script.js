//---------HEADER STICKY NAVIGATION--------
window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
})


// ----------BURGER----------
let menu = document.querySelector('.navigation');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');
// close menu after click on ancher
let navItems = document.querySelectorAll('.nav-item');

navItems.forEach(
    (element) => {
        element.addEventListener("click", () =>{
            menu.classList.remove('active');
        })
    }
)
// close menu after click on ancher

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});




// --------ОТЗЫВЫ--------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
    setInterval(function () {
        // var size = randomValue(sArray);
        // $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

$(document).ready(function () {
    initParadoxWay();
});


// ----------ПЛАВНЫЙ СКРОЛЛ----------
ScrollReveal({
    reset: false,
    distance: "80px",
    duration: 300,
    delay: 200
});

ScrollReveal().reveal(".section1 .section1__container", {delay: 400, origin: "top"});
ScrollReveal().reveal(".section2 .img", {delay: 400, origin: "left"});
ScrollReveal().reveal(".section2 .text", {delay: 400, origin: "right"});
ScrollReveal().reveal(".section4 .text", {delay: 400, origin: "left"});
ScrollReveal().reveal(".section4 .img", {delay: 400, origin: "right"});
ScrollReveal().reveal(".section6 .left-cologne", {delay: 400, origin: "left"});
ScrollReveal().reveal(".section6 .right-cologne", {delay: 400, origin: "right"});
ScrollReveal().reveal(".section7 .content", {delay: 400, origin: "left"});
ScrollReveal().reveal(".section8 .section8_container", {delay: 400, origin: "left"});
ScrollReveal().reveal(".section9 .group", {delay: 400, origin: "left"});


// ----------АНИМИРОВАННЫЕ ЦИФРЫ, section3----------
const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach( counter => {
    const animate = () => {
    const value = +counter.getAttribute('data-target');
    const data = +counter.innerText;
     
    const time = value / speed;
    if(data < value) {
        counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }

   animate();
});


// ----------ВОЙТИ/ЗАРЕГИСТРИРОВАТЬСЯ----------
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
}); 


// ----------ВОЙТИ/ЗАРЕГИСТРИРОВАТЬСЯ ПОПАП----------
const button = document.querySelector('.button');
const form = document.querySelector('#container');

button.addEventListener('click', () => {
    form.classList.add('open');
    document.body.classList.add("body-overflow");
    form.classList.add("fixed");
});



// ----------ВОЙТИ/ЗАРЕГИСТРИРОВАТЬСЯ ПОПАП, КРЕСТИК----------
const closeButton = document.querySelector(".cls-btn");
const closeButton2 = document.querySelector(".cls-btn2");

closeButton.addEventListener('click', () =>{
    form.classList.remove('open');
    document.body.classList.remove("body-overflow")
    form.classList.remove("container-fixed")
});

closeButton2.addEventListener('click', () =>{
    form.classList.remove('open');
    document.body.classList.remove("body-overflow");
    form.classList.remove("container-fixed");
});


// ----------ОБРАТНАЯ СВЯЗЬ ПОПАП----------
const feedbackButton = document.querySelector('.btn-feedback');
const feedbackForm = document.querySelector('.containerfeedback');

feedbackButton.addEventListener('click', () => {
  feedbackForm.classList.add('open');
  document.body.classList.add("body-overflow");
  feedbackForm.classList.add("fixed");
});


// ----------ОБРАТНАЯ СВЯЗЬ ПОПАП, КРЕСТИК----------
const closeButtonFeedback = document.querySelector(".cls-btn-feedback");

closeButtonFeedback.addEventListener('click', () =>{
    feedbackForm.classList.remove('open');
    document.body.classList.remove("body-overflow")
    feedbackForm.classList.remove("container-fixed")
});


// ----------РАСШИРЕННЫЙ ПОИСК ПОЯВЛЯЕТСЯ НА НАЖАТИЕ КНОПКИ----------
const settingsButton = document.querySelector('.fa-solid');
const settingForm = document.querySelector('.container11');

settingsButton.addEventListener('click', () => {
    document.body.classList.add("body-overflow");
    settingForm.classList.add("container11-fixed");
});

// ----------РАСШИРЕННЫЙ ПОИСК ЗАКРЫТИЕ----------
const closeButton3 = document.querySelector(".cls-btn3");

closeButton3.addEventListener('click', () =>{
    document.body.classList.remove("body-overflow");
    settingForm.classList.remove("container11-fixed");
});


// ----------ДАТА В РАСШИРЕННОМ ПОИСКЕ----------
// const dateInput = document.getElementById('dob');

// const userAge = (age) => moment().subtract(age, 'years').format('YYYY-MM-DD');

// set user must be 100 yo at most.
// dateInput.setAttribute('min', userAge(100));

// set user must be at least 18 yo.
// dateInput.setAttribute('max', userAge(18));

// set default date
// dateInput.setAttribute('value', userAge(18));


// ----------TREE CHECKBOX, РЕГИОНЫ----------
let jsonObj = {
    "nodes": {
    "1": {
      "flag": false,
      "name": "Центральный федеральный округ",
      "value": "variables"
     },
    "3":{
      "flag": false,
      "name": "Центральный федеральный округ",
      "value": "functions",
      "nodes": {
        "5":{
          "flag": true,
          "name": "Белгородская область",
          "value": "function-spread"
        },
        "6":{
          "flag": true,
          "name": "Белгородская область",
          "value": "function-arrow",
        }
      }
    }
    }
  };
  
  var checkTree = {
      mounting: function(currentElement, nodes){
      var ul, li, checkbox, label, span;
      ul = document.createElement("ul");  
      for(let p in nodes){
        li = document.createElement("li");  
  
        checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = nodes[p]["flag"];
        checkbox.name = nodes[p]["value"];
        checkbox.id = checkbox.name;
        checkbox.addEventListener("click",function(){        
          //Найти ближайший li
          var li = this.parentNode;
          
          //Внутри li найти ul и его checkbox
          var ul = li.getElementsByTagName("ul")[0];
          var boxes = ul.getElementsByTagName("input");
          
          //Взависимости от его checked выставить им такой же
          for(let i = 0; i < boxes.length; i++){
            if( boxes[i]["type"] == "checkbox" )
               boxes[i]["checked"] = this.checked;
          }
          
        });
        
  
        
        li.appendChild(checkbox);
  
        label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.innerHTML = nodes[p]["name"];
  
        li.appendChild(label);
  
        if(nodes[p]["nodes"]){
          span = document.createElement("span");
          span.className = "checkTree-open";
          span.onclick = function(){
            let triangle = this.className.indexOf("checkTree-open")+1;   
            this.className = triangle ? "checkTree-close":"checkTree-open";
            let ul = this.parentNode.getElementsByTagName("ul")[0];
            ul.style.display = triangle ? "none" : "block";
          }
          li.insertBefore(span, li.firstChild);
          this.mounting(li ,nodes[p]["nodes"])
        }
        
        ul.appendChild(li);
      }
  
      currentElement.appendChild(ul);
      },
      init: function(id, jsonObj){
        var t = document.getElementById(id);
        this.mounting(t, jsonObj.nodes);    
      }
  };
  
  checkTree.init("checkTree",jsonObj);


  // ----------TREE CHECKBOX, ОКПД----------
let jsonObj1 = {
    "nodes": {
    "1": {
      "flag": false,
      "name": "Центральный федеральный округ",
      "value": "variables"
     },
    "3":{
      "flag": false,
      "name": "Центральный федеральный округ",
      "value": "functions",
      "nodes": {
        "5":{
          "flag": true,
          "name": "Белгородская область",
          "value": "function-spread"
        },
        "6":{
          "flag": true,
          "name": "Белгородская область",
          "value": "function-arrow",
        }
      }
    }
    }
  };
  
  var checkTree1 = {
      mounting: function(currentElement, nodes){
      var ul, li, checkbox, label, span;
      ul = document.createElement("ul");  
      for(let p in nodes){
        li = document.createElement("li");  
  
        checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = nodes[p]["flag"];
        checkbox.name = nodes[p]["value"];
        checkbox.id = checkbox.name;
        checkbox.addEventListener("click",function(){        
          //Найти ближайший li
          var li = this.parentNode;
          
          //Внутри li найти ul и его checkbox
          var ul = li.getElementsByTagName("ul")[0];
          var boxes = ul.getElementsByTagName("input");
          
          //Взависимости от его checked выставить им такой же
          for(let i = 0; i < boxes.length; i++){
            if( boxes[i]["type"] == "checkbox" )
               boxes[i]["checked"] = this.checked;
          }
          
        });
        
  
        
        li.appendChild(checkbox);
  
        label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.innerHTML = nodes[p]["name"];
  
        li.appendChild(label);
  
        if(nodes[p]["nodes"]){
          span = document.createElement("span");
          span.className = "checkTree-open";
          span.onclick = function(){
            let triangle = this.className.indexOf("checkTree-open")+1;   
            this.className = triangle ? "checkTree-close":"checkTree-open";
            let ul = this.parentNode.getElementsByTagName("ul")[0];
            ul.style.display = triangle ? "none" : "block";
          }
          li.insertBefore(span, li.firstChild);
          this.mounting(li ,nodes[p]["nodes"])
        }
        
        ul.appendChild(li);
      }
  
      currentElement.appendChild(ul);
      },
      init: function(id, jsonObj1){
        var t = document.getElementById(id);
        this.mounting(t, jsonObj1.nodes);    
      }
  };
  
  checkTree1.init("checkTree1",jsonObj1);

  









