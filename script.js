const qBox = document.querySelectorAll('.faq-box');

qBox.forEach(function (el) {
  const answer = el.querySelector('.answer-box');
  const arrow = el.querySelector('.question__icon');

  el.addEventListener('click', function () {
    answer.classList.toggle('open');
    arrow.classList.toggle('rotate');
  });
});
