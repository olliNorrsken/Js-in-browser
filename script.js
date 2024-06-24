
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 11,
  },
  mousewheel: true,
  keyboard: true,
});

//получаем все элементы слайдов из HTML с помощью класса 'services-slide' и сохраняем их в переменной `slides`
const slides = document.querySelectorAll('.services-slide');
//получаем кнопку из HTML с классом 'btn' и сохраняем её в переменной `btn`
const btn = document.querySelector('.btn');

//создаем переменную `showAll`, определяющую, показывать ли все слайды или только нужное количество
let showAll = false;

//функция `showSlides()` определяет, сколько слайдов показывать в зависимости от ширины экрана 
//8 слайдов для экранов от 1120 пикселей, 6 слайдов от 768 пикселей и 0 слайдов для меньших экранов
function showSlides() {
  const screenWidth = window.innerWidth;
  let slidesToShow = screenWidth >= 1120 ? 8 : screenWidth >= 768 ? 6 : 0;

  //проходим по массиву слайдов и устанавливаем стиль отображения каждого элемента
  slides.forEach((element, index) => {
  //если необходимо показать все слайды или текущий индекс меньше заданного количества
  //слайдов к показу, то отображаем элемент, иначе скрываем его
    if (slidesToShow === 0 || index < slidesToShow || showAll) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });

  //устанавливаем текст кнопки в зависимости от того, показаны ли все слайды
  if (showAll) {
    btn.textContent = 'Скрыть';
  } else {
    btn.textContent = 'Показать все';
  }
}

//обработчик клика по кнопке, который переключает режим отображения слайдов
//и обновляет их видимость
btn.addEventListener('click', () => {
  showAll = !showAll;  //переключаем флаг показа всех слайдов
  showSlides();        //вызываем функцию для обновления отображения слайдов
});

//начальный вызов функции для установки начального состояния слайдов
showSlides();

//обновление при изменении размера окна браузера
window.addEventListener('resize', showSlides);

