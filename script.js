const qBox = document.querySelectorAll('.faq-box');
const boxImage = document.querySelector('.image__box');

qBox.forEach(function (el) {
  const answer = el.querySelector('.answer-box');
  const arrow = el.querySelector('.question__icon');

  el.addEventListener('click', function () {
    answer.classList.toggle('open');
    arrow.classList.toggle('rotate');
  });

  el.addEventListener('mouseover', function () {
    boxImage.classList.add('take-box');
  });
  el.addEventListener('mouseout', function () {
    boxImage.classList.remove('take-box');
  });
});
