// Функция копирования промокода
function copy(code) {
  navigator.clipboard.writeText(code).then(function() {
    var toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
    }, 2000);
  });
}

// Переключение комментариев Giscus
document.getElementById('toggleComments').addEventListener('click', function() {
  var btn = this;
  var container = document.getElementById('giscusContainer');
  var expanded = btn.getAttribute('aria-expanded') === 'true';
  if (expanded) {
    btn.setAttribute('aria-expanded', 'false');
    container.classList.remove('visible');
  } else {
    btn.setAttribute('aria-expanded', 'true');
    container.classList.add('visible');
  }
});

// Загрузка видео в модальное окно
function loadVideo() {
  var modal = document.getElementById('video-modal');
  var iframe = document.getElementById('video-frame');
  iframe.src = 'https://www.youtube.com/embed/ваш_идентификатор_видео'; // замените на реальный ID
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Открытие скриншота в модальном окне
function openScreenshot() {
  var modal = document.getElementById('screenshot-modal');
  var img = document.getElementById('screenshot-full');
  img.src = 'image/Скриншот.webp';
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Закрытие видео-модалки
function closeVideo(event) {
  if (event.target === this || event.target.classList.contains('video-close')) {
    var modal = document.getElementById('video-modal');
    var iframe = document.getElementById('video-frame');
    iframe.src = '';
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Закрытие скриншот-модалки
function closeScreenshot(event) {
  if (event.target === this || event.target.classList.contains('video-close')) {
    var modal = document.getElementById('screenshot-modal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Аккордеон
document.querySelectorAll('.accordion-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var targetId = this.getAttribute('data-target');
    var body = document.getElementById(targetId);
    var isOpen = this.getAttribute('aria-expanded') === 'true';

    // Закрываем все остальные
    document.querySelectorAll('.accordion-btn').forEach(function(b) {
      b.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.accordion-body').forEach(function(b) {
      b.classList.remove('open');
    });

    // Открываем текущий если был закрыт
    if (!isOpen) {
      this.setAttribute('aria-expanded', 'true');
      body.classList.add('open');
    }
  });
});

// Обновление года в футере
document.getElementById('footer-year').textContent = new Date().getFullYear();
