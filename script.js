<!-- ==================== НАЧАЛО JAVASCRIPT ==================== -->
<script>
    // Функция копирования текста в буфер обмена
    function copy(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(showToast).catch(function() { fallbackCopy(text); });
        } else { fallbackCopy(text); }
    }
    // Резервный метод копирования для старых браузеров
    function fallbackCopy(text) {
        var t = document.createElement('textarea');
        t.value = text; document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); showToast(); } catch(e) { alert('Код: ' + text); }
        document.body.removeChild(t);
    }
    // Показать уведомление о копировании
    function showToast() {
        var t = document.getElementById('toast');
        t.style.opacity = '1'; t.style.visibility = 'visible';
        setTimeout(function() { t.style.opacity = '0'; t.style.visibility = 'hidden'; }, 2000);
    }

    // Обновить счетчик промокодов
    function updatePromoCount() {
        var el = document.getElementById('promo-count');
        if (el) el.textContent = document.querySelectorAll('.promo-card:not(.skeleton)').length;
    }
    // Отрисовать список промокодов из массива
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
    // Загрузить промокоды из Google Apps Script
    function loadPromocodes() {
        fetch('https://script.google.com/macros/s/AKfycbxu_zefZP7nxFfGR1aLN5QtiFTGk4qFhMR6EGh3Of330wlkszzRkjAd_dig7Ww22bdb/exec')
            .then(function(r) { return r.json(); })
            .then(function(data) {
                try { localStorage.setItem('promo_cache', JSON.stringify(data)); } catch(e) {}
                renderPromocodes(data);
            }).catch(function(e) { console.error('Ошибка:', e); });
    }

    // Инициализация после загрузки DOM
    document.addEventListener('DOMContentLoaded', function() {
        var cached = localStorage.getItem('promo_cache');
        if (cached) { try { renderPromocodes(JSON.parse(cached)); } catch(e) {} }
        loadPromocodes();
        setInterval(loadPromocodes, 300000); // Обновление каждые 5 минут
    });

    // Действия после полной загрузки страницы
    window.addEventListener('load', function() {
        var el = document.getElementById('stats-update-date');
        if (el) {
            var today = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
            el.innerHTML = '<svg fill="none" viewBox="0 0 24 24" style="width:16px;height:16px;stroke:#ffffff;opacity:0.5;"><circle cx="12" cy="12" r="10" stroke-width="2"/><path d="M12 6V12L16 14" stroke-linecap="round" stroke-width="2"/></svg> <span>Обновлено:</span> ' + today;
        }
        var yr = document.getElementById('footer-year');
        if (yr) yr.textContent = new Date().getFullYear();

        // Симуляция статуса автора
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

    // Открыть модальное окно с видео
    function loadVideo() {
        var modal = document.getElementById('video-modal');
        document.getElementById('video-frame').src = "https://www.youtube.com/embed/_2Lyzaz9eOw?autoplay=1&mute=1&rel=0&playsinline=1";
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    // Закрыть модальное окно с видео
    function closeVideo(e) {
        if (e.target.id === 'video-modal' || e.target.classList.contains('video-close')) {
            document.getElementById('video-modal').classList.remove('show');
            document.getElementById('video-frame').src = '';
            document.body.style.overflow = '';
        }
    }
    // Открыть скриншот в модальном окне
    function openScreenshot() {
        var modal = document.getElementById('screenshot-modal');
        var img = document.getElementById('screenshot-full');
        var thumb = document.querySelector('.screenshot-cover img');
        if (thumb && img) img.src = thumb.src;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    // Закрыть модальное окно со скриншотом
    function closeScreenshot(e) {
        if (e.target.id === 'screenshot-modal' || e.target.classList.contains('video-close')) {
            document.getElementById('screenshot-modal').classList.remove('show');
            document.body.style.overflow = '';
        }
    }
</script>
<!-- ==================== КОНЕЦ JAVASCRIPT ==================== -->
