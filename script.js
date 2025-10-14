function getDayOfWeek(dayOfWeek) {
  const days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ];
  return days[dayOfWeek];
}

function getPhrase() {
  const phrases = [
    "...засмотрелся на занавеску...",
    "НА!",
    "Поймал пасатижами за яйца!",
    "...деревенская присядка...",
    "Простите за венгу :'(",
    "саппорт без стиков...",
    "ЙОУ",
    "Разъебай печеный",
    "План деревенский крюк",
    "На столе были ноги. Поплыли осьминоги",
    "Есть!",
    "Заебистолс",
    "Уосау",
    "Дизгастинг",
    "Опасный юнит",
    "Мысли и не более.",
    "УТКА НАХУЙ! 🦆",
    "я на броукен хоумсе 😶"
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function getMihail() {
  const images = [
    "mihail0.jpg", 
    "mihail1.jpg", 
    "mihail2.jpg", 
    "mihail3.jpg",
  ]
  return images[Math.floor(Math.random() * images.length)];
}

function isMichailFree(endDate) {
  const michailTwoWorkDayStart = new Date(2025, 0, 17);
  michailTwoWorkDayStart.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);
  const oneDay = 24 * 60 * 60 * 1000;

  const diffInTime = endDate.getTime() - michailTwoWorkDayStart.getTime();

  const diffInDays = Math.ceil(diffInTime / oneDay);
  return Math.floor(diffInDays / 2 + 1) % 2 === 0;
}

function showDate() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  document.querySelector(".quote").textContent = '"' + getPhrase() + '"';

  if (isMichailFree(today)) {
    document.getElementById('dialog-weekday').classList.remove('working-day');
    document.getElementById('dialog-weekday').textContent = "отдыхает";
  } else {
    document.getElementById('dialog-weekday').classList.add('working-day');
    document.getElementById('dialog-weekday').textContent = "работает";
  }

  if (isMichailFree(tomorrow)) {
    document.getElementById('tommorow-free').classList.remove('working-day');
    document.getElementById('tommorow-free').textContent = "отдыхает";
  } else {
    document.getElementById('tommorow-free').classList.add('working-day');
    document.getElementById('tommorow-free').textContent = "работает";
  }

  document.getElementById('mihail-img').src = "images/" + getMihail();

  document.getElementById('day-of-week').textContent = getDayOfWeek(today.getDay());

  const dialog = document.getElementById('dateDialog');
  dialog.showModal();

  const closeButton = document.getElementById('closeDialog');
  closeButton.addEventListener('click', () => {
    dialog.close();
  });
}
