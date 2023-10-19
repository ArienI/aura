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