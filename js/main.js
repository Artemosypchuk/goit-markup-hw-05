(() => {
  const refs = {
    // Переконайтеся, що у кнопки в HTML є клас .hero-btn
    openModalBtn: document.querySelector('.hero-btn'),
    // Кнопка-хрестик для закриття
    closeModalBtn: document.querySelector('.popup-close'),
    // Обгортка (бекдроп) модального вікна
    modal: document.querySelector('.popup-wrapper'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // Використовуємо .is-open замість .hidden-popup для відповідності зауваженням
    refs.modal.classList.toggle('is-open');
    // Блокуємо скрол основної сторінки
    document.body.classList.toggle('no-scroll');
  }
})();