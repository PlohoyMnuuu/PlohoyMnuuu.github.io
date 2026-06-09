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
        { text: "Недавно", color: "#fbbf24", shadow: "rgba(251,191,36,0.6)" },
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

<!-- Скрипт переключения комментариев -->

  (function() {
    const btn = document.getElementById('toggleComments');
    const container = document.getElementById('giscusContainer');

    if (!btn || !container) return;

    btn.addEventListener('click', function() {
      const isVisible = container.classList.toggle('visible');
      btn.setAttribute('aria-expanded', isVisible);
      btn.innerHTML = isVisible
        ? '✕ Закрыть обсуждение'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b730" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Начать обсуждение';
    });
  })();
