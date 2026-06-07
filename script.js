function copy(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showToast).catch(function() { fallbackCopy(text); });
    } else { fallbackCopy(text); }
}

function fallbackCopy(text) {
    var t = document.createElement('textarea');
    t.value = text; document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); showToast(); } catch(e) { alert('Код: ' + text); }
    document.body.removeChild(t);
}

function showToast() {
    var t = document.getElementById('toast');
    t.style.opacity = '1'; t.style.visibility = 'visible';
    setTimeout(function() { t.style.opacity = '0'; t.style.visibility = 'hidden'; }, 2000);
}

function updatePromoCount() {
    var el = document.getElementById('promo-count');
    if (el) el.textContent = document.querySelectorAll('.promo-card').length;
}

function renderPromocodes(codes) {
    var c = document.getElementById('promo-list');
    if (!c) return;
    var total = codes.length;
    c.innerHTML = codes.map(function(item, i) {
        var badge = (i >= total - 2) ? '<span class="new-badge">Новое</span>' : '';
        return '<div class="promo-card" onclick="copy(\'' + item.code.replace(/'/g,"\\'") + '\')" role="button" tabindex="0">' +
            '<div class="promo-info"><div class="code-header"><span class="code-text">' + item.code + '</span>' + badge + '</div>' +
            '<span class="reward-text">' + item.reward + '</span></div>' +
            '<div class="copy-btn"><svg fill="none" viewBox="0 0 24 24"><rect height="16" rx="2" stroke="#000" stroke-width="2" width="12" x="8" y="2"/><path d="M4 6V20H16" stroke="#000" stroke-linecap="round" stroke-width="2"/></svg>Копировать</div></div>';
    }).join('');
    updatePromoCount();
}

function loadFreshCodes() {
    fetch('https://script.google.com/macros/s/AKfycbxu_zefZP7nxFfGR1aLN5QtiFTGk4qFhMR6EGh3Of330wlkszzRkjAd_dig7Ww22bdb/exec')
        .then(function(r) { return r.json(); })
        .then(function(data) {
            renderPromocodes(data);
        }).catch(function() {
            console.log('Не удалось загрузить свежие коды, используются из HTML');
        });
}

document.addEventListener('DOMContentLoaded', function() {
    updatePromoCount();
    loadFreshCodes();
});

window.addEventListener('load', function() {
    var el = document.getElementById('stats-update-date');
    if (el) {
        var today = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
        el.innerHTML = '<svg fill="none" viewBox="0 0 24 24" style="width:16px;height:16px;stroke:#ffffff;opacity:0.5;"><circle cx="12" cy="12" r="10" stroke-width="2"/><path d="M12 6V12L16 14" stroke-linecap="round" stroke-width="2"/></svg> <span>Обновлено:</span> ' + today;
    }
    var yr = document.getElementById('footer-year');
    if (yr) yr.textContent = new Date().getFullYear();

    var states = [
        { text: "Онлайн", color: "#10b981", shadow: "rgba(16,185,129,0.6)" },
        { text: "Был недавно", color: "#fbbf24", shadow: "rgba(251,191,36,0.6)" },
        { text: "Оффлайн", color: "#ef4444", shadow: "rgba(239,68,68,0.6)" }
    ];
    var state = states[Math.floor(Date.now() / (1000*60*60)) % states.length];
    var dot = document.getElementById('status-dot'), txt = document.getElementById('status-text');
    if (dot) { dot.style.background = state.color; dot.style.boxShadow = '0 0 10px ' + state.shadow; }
    if (txt) txt.textContent = state.text;
});

function loadVideo() {
    var modal = document.getElementById('video-modal');
    document.getElementById('video-frame').src = "https://www.youtube.com/embed/_2Lyzaz9eOw?autoplay=1&mute=1&rel=0&playsinline=1";
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeVideo(e) {
    if (e.target.id === 'video-modal' || e.target.classList.contains('video-close')) {
        document.getElementById('video-modal').classList.remove('show');
        document.getElementById('video-frame').src = '';
        document.body.style.overflow = '';
    }
}

function openScreenshot() {
    var modal = document.getElementById('screenshot-modal');
    var img = document.getElementById('screenshot-full');
    var thumb = document.querySelector('.screenshot-cover img');
    if (thumb && img) img.src = thumb.src;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeScreenshot(e) {
    if (e.target.id === 'screenshot-modal' || e.target.classList.contains('video-close')) {
        document.getElementById('screenshot-modal').classList.remove('show');
        document.body.style.overflow = '';
    }
}


// ================================================
// АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ
// ================================================
(function() {
  // Добавляем классы для анимации ко всем секциям и unified-block
  const sections = document.querySelectorAll('.section, .unified-block');
  
  sections.forEach(function(el) {
    el.classList.add('animate-on-scroll');
  });

  // Используем Intersection Observer
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // После появления можно отключить наблюдение
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,     // 10% элемента должно быть видно
    rootMargin: '0px 0px -30px 0px'  // Небольшой отступ снизу для раннего срабатывания
  });

  // Начинаем наблюдение
  sections.forEach(function(el) {
    observer.observe(el);
  });
})();

// ================================================
// КОПИРОВАНИЕ ПРОМОКОДА
// ================================================
function copy(code) {
  navigator.clipboard.writeText(code).then(function() {
    var toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
    }, 2000);
  }).catch(function(err) {
    console.error('Ошибка копирования:', err);
  });
}

// ================================================
// ВИДЕО МОДАЛКА
// ================================================
function loadVideo() {
  var modal = document.getElementById('video-modal');
  var iframe = document.getElementById('video-frame');
  
  // Замените на реальный URL видео
  iframe.src = 'https://www.youtube.com/embed/ВАШ_ID_ВИДЕО?autoplay=1&rel=0';
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeVideo(event) {
  if (event.target === event.currentTarget || event.target.classList.contains('video-close')) {
    var modal = document.getElementById('video-modal');
    var iframe = document.getElementById('video-frame');
    
    iframe.src = '';
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// ================================================
// СКРИНШОТ МОДАЛКА
// ================================================
function openScreenshot() {
  var modal = document.getElementById('screenshot-modal');
  var img = document.getElementById('screenshot-full');
  
  img.src = 'image/Скриншот.webp';
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeScreenshot(event) {
  if (event.target === event.currentTarget || event.target.classList.contains('video-close')) {
    var modal = document.getElementById('screenshot-modal');
    var img = document.getElementById('screenshot-full');
    
    img.src = '';
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// ================================================
// ЗАКРЫТИЕ МОДАЛОК ПО ESC
// ================================================
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeVideo({ target: document.getElementById('video-modal') });
    closeScreenshot({ target: document.getElementById('screenshot-modal') });
  }
});

// ================================================
// ОБНОВЛЕНИЕ ГОДА В ФУТЕРЕ
// ================================================
(function() {
  var yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();

// ================================================
// ОБНОВЛЕНИЕ ДАТЫ ПРОВЕРКИ
// ================================================
(function() {
  var dateSpan = document.querySelector('#stats-update-date span:last-child');
  if (dateSpan) {
    var today = new Date();
    var options = { day: 'numeric', month: 'long' };
    dateSpan.textContent = 'сегодня';
  }
})();

// ================================================
// СЧЁТЧИК АКТИВНЫХ КОДОВ
// ================================================
(function() {
  var promoCount = document.getElementById('promo-count');
  var promoList = document.getElementById('promo-list');
  
  if (promoCount && promoList) {
    var activeCodes = promoList.querySelectorAll('.promo-card:not(.skeleton)');
    promoCount.textContent = activeCodes.length;
  }
})();
