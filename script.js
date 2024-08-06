document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', () => {
        alert('Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время.');
    });
});













const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});




















let currentSlide = 0; // Индекс текущего слайда
const slides = document.querySelectorAll('.slide'); // Получаем все слайды

function showSlide(index) {
    // Убедимся, что индекс находится в пределах доступных слайдов
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Сдвигаем слайды
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Показать первый слайд при загрузке
showSlide(currentSlide);















function initMap() {
    // Создаем карту
    var myMap = new ymaps.Map("map", {
        center: [55.751574, 37.573856], // Координаты центра карты (Москва)
        zoom: 10 // Уровень масштабирования
    });

    // Добавляем метку
    var myPlacemark = new ymaps.Placemark([55.751574, 37.573856], {
        hintContent: 'Мы здесь!',
        balloonContent: 'Наш офис'
    });

    myMap.geoObjects.add(myPlacemark); // Добавляем метку на карту
}

// Загружаем API Яндекс.Карт
var script = document.createElement('script');
script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=initMap";
document.head.appendChild(script);














const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



