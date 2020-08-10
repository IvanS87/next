$(function() {
  var button = $('.pagination__item');

  function switchToNext() {
    var _this = $(this);

    if (_this.hasClass('pagination__item-active'))
      return false;
    else {
      $('.pagination__item.pagination__item-active').removeClass('pagination__item-active');
      _this.addClass('pagination__item-active');
    }
  }

  button.on('click', switchToNext);
});

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

// /* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}
var v1, v2;

// /* Основная функция сладера */
function showSlides(n) {
  if ((v1 != n) || (v1 != undefined)) {
    v2 = v1;
    v1 = n;
    console.log(v1);
    console.log(v2);
  };

  var i;
  var slides = document.getElementsByClassName("next__image"); //Картинка
  var titel = document.getElementsByClassName("next__titel"); //Заголовок h1
  var text = document.getElementsByClassName("next__text"); //Текс
  var button = document.getElementsByClassName("next__button"); //Кнопка

  // Картинка
  if (v1 > slides.length) {
    slideIndex = 1
  }
  if (v1 < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("next__image-hidden");
    slides[i].classList.remove("next__image-activ");
    slides[i].classList.remove("next__image-passiv");
  }
  slides[slideIndex - 1].classList.remove("next__image-hidden");
  slides[slideIndex - 1].classList.add("next__image-activ");
  if (v2 != undefined) {
    slides[v2 - 1].classList.add("next__image-passiv");
  };
  //Заголовок h1
  if (v1 > titel.length) {
    slideIndex = 1
  }
  if (v1 < 1) {
    slideIndex = titel.length
  }
  for (i = 0; i < titel.length; i++) {
    titel[i].classList.add("next__titel-hidden");
    titel[i].classList.remove("next__titel-activ");
    titel[i].classList.remove("next__titel-passiv");
  }
  titel[slideIndex - 1].classList.remove("next__titel-hidden");
  titel[slideIndex - 1].classList.add("next__titel-activ");
  if (v2 != undefined) {
    titel[v2 - 1].classList.add("next__titel-passiv");
  };
  //Текс
  if (v1 > text.length) {
    slideIndex = 1
  }
  if (v1 < 1) {
    slideIndex = text.length
  }
  for (i = 0; i < text.length; i++) {
    text[i].classList.add("next__text-hidden");
    text[i].classList.remove("next__text-activ");
    text[i].classList.remove("next__text-passiv");
  }
  text[slideIndex - 1].classList.remove("next__text-hidden");
  text[slideIndex - 1].classList.add("next__text-activ");
  if (v2 != undefined) {
    text[v2 - 1].classList.add("next__text-passiv");
  };
  //Кнопка
  if (v1 > button.length) {
    slideIndex = 1
  }
  if (v1 < 1) {
    slideIndex = button.length
  }
  for (i = 0; i < text.length; i++) {
    button[i].classList.add("next__text-hidden");
    button[i].classList.remove("next__text-activ");
    button[i].classList.remove("next__text-passiv");
  }
  button[slideIndex - 1].classList.remove("next__text-hidden");
  button[slideIndex - 1].classList.add("next__text-activ");
  if (v2 != undefined) {
    button[v2 - 1].classList.add("next__text-passiv");
  };

};
