const tabButtons = document.querySelectorAll('.tab-button');
const sections = document.querySelectorAll('.section');
const jumpButtons = document.querySelectorAll('.jump-btn');

function openSection(target) {
  tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === target);
  });

  sections.forEach((section) => {
    section.classList.toggle('active', section.id === target);
  });

  document.querySelector('.tabs').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openSection(button.dataset.target);
  });
});

jumpButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openSection(button.dataset.target);
  });
});
