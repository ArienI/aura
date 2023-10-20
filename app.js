document.addEventListener("DOMContentLoaded", function() {
  // Находим контейнер и все картинки внутри
  const container = document.querySelector(".stickers__hero");
  const stickers = container.querySelectorAll(".sticker__hero");

  // Проходим по каждой картинке
  stickers.forEach((sticker) => {
    // Генерируем случайные координаты
    const randomLeft = Math.floor(Math.random() * (container.offsetWidth - sticker.offsetWidth));
    const randomTop = Math.floor(Math.random() * (container.offsetHeight - sticker.offsetHeight));

    // Применяем координаты к каждой картинке
    sticker.style.right = randomLeft + "px";
    sticker.style.top = randomTop + "px";
  });
});

// Находим кнопку по ID
var timeButton = document.getElementById("timeButton");

// Функция для обновления времени на кнопке
function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Добавляем нули перед однозначными числами
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Обновляем текст кнопки
  timeButton.innerText = `${hours}:${minutes}:${seconds}`;
}

// Устанавливаем интервал для обновления времени каждую секунду
setInterval(updateTime, 1000);

// Обновляем время сразу при загрузке страницы
updateTime();