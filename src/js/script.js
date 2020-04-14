const btnToggle = document.querySelector('.toggle-btn');
const btnCloseSidebar = document.querySelector('.close-btn');

btnCloseSidebar.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});

btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});