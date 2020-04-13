// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');
const btnCloseSidebar = document.querySelector('.close-btn');

btnCloseSidebar.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});

btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});
/*

[
  {
    "nombre": "Kia Forte",
    "anio": "2016",
    "categoría": "liviano",
    "precio": "7,900",
    "transmisión": "Estandar"
  },
  {
    "nombre": "Kia Forte",
    "anio": "2016",
    "categoría": "liviano",
    "precio": "7,900",
    "transmisión": "Estandar"
  },
]

*/