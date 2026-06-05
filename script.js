<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Николай Дудник — автор сайта Монеточка today</title>
  <meta name="description" content="Об авторе сайта monetochka.today — Николай Дудник, ежедневно проверяет промокоды для игры Монеточка."/>
  <link rel="canonical" href="https://monetochka.today/author.html"/>

  <meta property="og:url" content="https://monetochka.today/author.html"/>
  <meta property="og:type" content="profile"/>
  <meta property="og:title" content="Николай Дудник — автор Монеточка today"/>
  <meta property="og:description" content="Ежедневно проверяю промокоды для игры Монеточка и публикую только рабочие."/>
  <meta property="og:image" content="https://monetochka.today/image/au.webp"/>
  <meta property="og:locale" content="ru_RU"/>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Николай Дудник",
    "url": "https://monetochka.today/author.html",
    "sameAs": ["https://www.facebook.com/profile.php?id=100064073311598"],
    "worksFor": {
      "@type": "WebSite",
      "name": "Монеточка today",
      "url": "https://monetochka.today"
    }
  }
  </script>

  <style>
    @font-face {
      font-family: 'Golos Text';
      src: url('fonts/GolosTextVF-Regular.woff2') format('woff2');
      font-weight: 100 900;
      font-style: normal;
      font-display: swap;
    }

    :root {
      --bg: #090d16;
      --card: #131c2e;
      --card-blur: rgba(19, 28, 46, 0.75);
      --accent: #fbbf24;
      --accent-glow: rgba(251, 191, 36, 0.25);
      --accent-green: #10b981;
      --accent-blue: #38bdf8;
      --text: #ffffff;
      --text-dim: #94a3b8;
      --border-main: #22314d;
      --transition-base: 0.2s ease;
      --transition-slow: 0.3s ease;
    }

    @media (prefers-reduced-motion: reduce) {
      * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }

    *, *::before, *::after { box-sizing: border-box; }

    html {
      font-size: 16px;
      scroll-behavior: smooth;
      -webkit-text-size-adjust: 100%;
    }

    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Golos Text', system-ui, sans-serif;
      font-size: 15px;
      font-weight: 400;
      color: var(--text);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      background:
        radial-gradient(circle at 15% 20%, rgba(251,191,36,0.08), transparent 25%),
        radial-gradient(circle at 85% 15%, rgba(59,130,246,0.08), transparent 30%),
        linear-gradient(180deg, #03050a 0%, #090d16 50%, #050811 100%);
      background-attachment: fixed;
      background-color: #090d16;
      min-height: 100vh;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at 20% 30%, rgba(251,191,36,0.1), transparent 25%),
        radial-gradient(circle at 80% 20%, rgba(59,130,246,0.08), transparent 28%),
        radial-gradient(circle at 50% 70%, rgba(16,185,129,0.06), transparent 35%);
      filter: blur(40px);
      z-index: -1;
    }

    body::after {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
      background-size: 50px 50px;
      mask-image: radial-gradient(circle at center, black 15%, transparent 85%);
      z-index: -1;
    }

    /* HEADER */
    .hero-header {
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, #081120 0%, #0b1730 100%);
      padding: 55px 20px 40px;
      text-align: center;
      border-bottom: 1px solid var(--border-main);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .hero-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 20% 30%, rgba(251,191,36,0.08), transparent 25%),
        radial-gradient(circle at 80% 20%, rgba(59,130,246,0.08), transparent 35%);
      filter: blur(30px);
      opacity: 0.6;
      pointer-events: none;
    }

    .floating-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.08;
      z-index: 0;
    }
    .orb-1 { width: 200px; height: 200px; background: var(--accent); top: -50px; left: -50px; animation: floatOrb1 15s ease-in-out infinite; }
    .orb-2 { width: 150px; height: 150px; background: #3b82f6; bottom: -30px; right: -30px; animation: floatOrb2 18s ease-in-out infinite; }

    @keyframes floatOrb1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(15px,-15px)} }
    @keyframes floatOrb2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-10px,10px)} }

    .hero-inner {
      position: relative;
      z-index: 1;
      max-width: 680px;
      margin: 0 auto;
    }

    .hero-brand {
      display: block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #94a3b8;
      margin-bottom: 20px;
      animation: slideInDown 0.6s ease-out;
    }

    .hero-brand a {
      color: #94a3b8;
      text-decoration: none;
      transition: color var(--transition-base);
    }
    .hero-brand a:hover { color: var(--accent); }

    .hero-brand::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, #94a3b8, transparent);
      opacity: 0.4;
      margin-top: 8px;
    }

    .hero-title {
      font-size: 38px;
      font-weight: 900;
      line-height: 1;
      letter-spacing: -0.03em;
      color: #fff;
      margin: 0 0 8px 0;
      animation: slideInUp 0.6s ease-out 0.1s both;
    }

    .hero-title span { color: var(--accent); }

    .hero-sub {
      font-size: 13px;
      color: var(--text-dim);
      margin: 0 0 0 0;
      animation: fadeIn 0.6s ease-out 0.2s both;
    }

    @keyframes slideInDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
    @keyframes slideInUp   { from{opacity:0;transform:translateY(10px)}  to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn      { from{opacity:0} to{opacity:1} }

    /* CONTAINER */
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 28px 20px;
    }
    /* AUTHOR CARD */
    .author-card {
      background: var(--card-blur);
      border: 1px solid var(--border-main);
      border-radius: 28px;
      padding: 32px;
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      margin-bottom: 20px;
      position: relative;
      overflow: hidden;
      animation: fadeIn 0.6s ease-out 0.2s both;
    }

    .author-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba(251,191,36,0.07), transparent 50%),
                  radial-gradient(circle at bottom right, rgba(59,130,246,0.05), transparent 50%);
      pointer-events: none;
    }

    /* Photo area */
    .author-top {
      display: flex;
      align-items: center;
      gap: 24px;
      position: relative;
      z-index: 1;
    }

    .author-photo-wrap {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }





    .author-photo-ring {
      width: 100px;
      height: 100px;
      border-radius: 24px;
      padding: 2px;
      background: linear-gradient(135deg, rgba(251,191,36,0.6), rgba(56,189,248,0.4));
      box-shadow: 0 0 30px rgba(251,191,36,0.2), 0 0 60px rgba(56,189,248,0.1);
      animation: photoFloat 4s ease-in-out infinite;
    }

    @keyframes photoFloat {
      0%,100% { transform: translateY(0px) rotate(-0.5deg); }
      50%      { transform: translateY(-6px) rotate(0.5deg); }
    }

    .author-photo-ring:hover {
      animation: none;
      transform: scale(1.05) rotate(0deg);
      box-shadow: 0 0 40px rgba(251,191,36,0.35), 0 0 80px rgba(56,189,248,0.2);
    }

    .author-photo-inner {
      width: 100%;
      height: 100%;
      border-radius: 22px;
      overflow: hidden;
      background: #1e293b;
    }

    .author-photo-inner img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Online badge */
    .online-badge {
      background: #0b1730;
      border: 1px solid rgba(16,185,129,0.25);
      border-radius: 999px;
      padding: 3px 9px 3px 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.03em;
      color: #10b981;
      width: fit-content;
      margin: 0 auto;
    }

    .online-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 8px rgba(16,185,129,0.8);
      animation: pulseDot 2s infinite;
      flex-shrink: 0;
    }

    @keyframes pulseDot {
      0%,100% { box-shadow: 0 0 8px rgba(16,185,129,0.6); }
      50%      { box-shadow: 0 0 16px rgba(16,185,129,1); }
    }

    /* Author info */
    .author-info {
      flex: 1;
      min-width: 0;
    }

    .author-role {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 6px;
      opacity: 0.85;
    }

    .author-name {
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -0.03em;
      color: #fff;
      line-height: 1.1;
      margin-bottom: 12px;
      word-break: break-word;
    }

    .author-fb-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #1877f2;
      color: #fff;
      padding: 8px 16px;
      border-radius: 40px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all var(--transition-base);
      min-height: 36px;
      white-space: nowrap;
      position: relative;
      overflow: hidden;
    }

    .author-fb-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255,255,255,0.15);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition-base);
    }

    .author-fb-btn:hover::before { transform: scaleX(1); }
    .author-fb-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(24,119,242,0.4); color: #fff; }
    .author-fb-btn:active { transform: translateY(0); }

    .author-fb-btn svg {
      width: 13px; height: 13px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }

    .author-fb-btn span { position: relative; z-index: 1; }

    /* Divider */
    .author-divider {
      position: relative;
      z-index: 1;
      margin: 24px 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(56,189,248,0.2), transparent);
    }

    .author-divider::after {
      content: '';
      position: absolute;
      top: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 5px;
      height: 5px;
      background: rgba(56,189,248,0.5);
      border-radius: 50%;
    }

    /* Bio */
    .author-bio {
      position: relative;
      z-index: 1;
    }

    .bio-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--text-dim);
      margin-bottom: 12px;
      opacity: 0.7;
    }

    .bio-text {
      font-size: 14px;
      line-height: 1.75;
      color: var(--text-dim);
      margin: 0 0 14px 0;
      word-break: break-word;
    }

    .bio-text:last-child { margin-bottom: 0; }

    .bio-text strong { color: #fff; font-weight: 700; }

    /* Stats row */
    .author-stats {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-top: 24px;
    }

    .stat-box {
      background: #0b111e;
      border: 1px solid var(--border-main);
      border-radius: 16px;
      padding: 14px 12px;
      text-align: center;
      transition: all var(--transition-base);
    }

    .stat-box:hover {
      transform: translateY(-3px);
      border-color: rgba(251,191,36,0.3);
      box-shadow: 0 6px 20px rgba(251,191,36,0.1);
    }

    .stat-value {
      font-size: 22px;
      font-weight: 900;
      letter-spacing: -0.03em;
      color: var(--accent);
      line-height: 1;
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--text-dim);
      line-height: 1.3;
    }

    /* Back link */
    .back-link-wrap {
      text-align: center;
      margin-top: 8px;
      animation: fadeIn 0.6s ease-out 0.4s both;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(180deg, #ffd54a 0%, #f4b400 100%);
      box-shadow: 0 8px 24px rgba(255,193,7,0.3), inset 0 1px 0 rgba(255,255,255,0.3);
      color: #000;
      padding: 13px 28px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 800;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      transition: all var(--transition-base);
      animation: pulse 2.5s infinite 0.6s;
      position: relative;
      overflow: hidden;
    }

    .back-link::before {
      content: '';
      position: absolute;
      top: 0; left: -100%;
      width: 100%; height: 100%;
      background: rgba(255,255,255,0.2);
      transition: left 0.15s ease;
    }

    .back-link:hover::before { left: 100%; }
    .back-link:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(255,193,7,0.4); color: #000; }
    .back-link:active { transform: translateY(-1px); }

    .back-link svg {
      width: 15px; height: 15px;
      flex-shrink: 0;
      transition: transform var(--transition-base);
    }

    .back-link:hover svg { transform: translateX(-2px); }

    @keyframes pulse {
      0%,100% { box-shadow: 0 8px 24px rgba(255,193,7,0.3), inset 0 1px 0 rgba(255,255,255,0.3); }
      50%      { box-shadow: 0 8px 36px rgba(255,193,7,0.5), inset 0 1px 0 rgba(255,255,255,0.3); }
    }

    /* FOOTER */
    .custom-site-footer {
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, #050811 0%, #070d18 100%);
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 40px 20px 28px;
      text-align: center;
      margin-top: 40px;
    }

    .custom-site-footer::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top center, rgba(251,191,36,0.06), transparent 45%);
      pointer-events: none;
    }

    .footer-logo {
      position: relative;
      z-index: 1;
      font-size: 17px;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #94a3b8;
      margin-bottom: 8px;
    }

    .footer-logo span { color: var(--accent); }

    .footer-copyright {
      position: relative;
      z-index: 1;
      font-size: 11px;
      letter-spacing: 0.03em;
      color: rgba(255,255,255,0.3);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      html, body { background-attachment: scroll !important; }
      body::before, body::after { display: none; }

      .hero-title { font-size: 26px; }
      .author-card { padding: 20px; border-radius: 20px; }
      .author-top { gap: 16px; }
      .author-photo-ring { width: 80px; height: 80px; border-radius: 18px; }
      .author-photo-inner { border-radius: 16px; }
      .author-name { font-size: 19px; }
      .author-stats { grid-template-columns: repeat(3,1fr); }
    }

    @media (max-width: 550px) {
      .hero-header { padding: 40px 14px 28px; }
      .hero-title { font-size: 22px; }
      .container { padding: 16px 12px; }
      .author-card { padding: 16px; border-radius: 16px; }
      .author-top { gap: 14px; }
      .author-photo-ring { width: 72px; height: 72px; border-radius: 16px; }
      .author-photo-inner { border-radius: 14px; }
      .author-name { font-size: 17px; margin-bottom: 10px; }
      .author-fb-btn { font-size: 11px; padding: 7px 12px; }
      .stat-value { font-size: 18px; }
      .stat-label { font-size: 9px; }
      .bio-text { font-size: 13px; }
    }
  </style>
</head>
<body>

<header class="hero-header">
  <div class="floating-orb orb-1"></div>
  <div class="floating-orb orb-2"></div>
  <div class="hero-inner">
    <div class="hero-brand">
      <a href="/">Монеточка today</a>
    </div>
    <h1 class="hero-title">Страница <span>автора</span></h1>
    <p class="hero-sub">Кто стоит за сайтом</p>
  </div>
</header>

<div class="container">
  <div class="author-card">

    <!-- TOP: фото + имя -->
    <div class="author-top">
      <div class="author-photo-wrap">
        <div class="author-photo-ring">
          <div class="author-photo-inner">
            <img src="image/au.webp" alt="Николай Дудник" width="100" height="100"/>
          </div>
        </div>
        <div class="online-badge" id="author-status-badge">
          <span class="online-dot" id="author-status-dot"></span>
          <span id="author-status-text">Онлайн</span>
        </div>
      </div>

      <div class="author-info">
        <div class="author-role">Автор сайта</div>
        <div class="author-name">Николай Дудник</div>
        <a class="author-fb-btn" href="https://www.facebook.com/profile.php?id=100064073311598" rel="nofollow noopener" target="_blank">
          <svg viewBox="0 0 24 24"><path d="M18 2H15C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.11 14.73 6 15 6H18V2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
          <span>Facebook</span>
        </a>
      </div>
    </div>

    <!-- Статистика -->
    <div class="author-stats">
      <div class="stat-box">
        <div class="stat-value">365+</div>
        <div class="stat-label">Дней на сайте</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">ежедн.</div>
        <div class="stat-label">Проверка кодов</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">100%</div>
        <div class="stat-label">Рабочие коды</div>
      </div>
    </div>

    <div class="author-divider"></div>

    <!-- Bio -->
    <div class="author-bio">
      <div class="bio-label">О себе</div>
      <p class="bio-text">Каждый день проверяю промокоды для игры <strong>Монеточка</strong> на своём телефоне — все нерабочие сразу удаляю, новые добавляю на сайт сразу после выхода.</p>
      <p class="bio-text">Веду этот сайт, чтобы игроки всегда могли найти актуальные коды в одном месте, не тратя время на поиски по соцсетям и форумам.</p>
    </div>

  </div>

  <div class="back-link-wrap">
    <a class="back-link" href="/">
      <svg fill="none" viewBox="0 0 24 24"><path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/></svg>
      На главную — к кодам
    </a>
  </div>

</div>

<footer class="custom-site-footer">
  <div class="footer-logo">Монеточка <span>today</span></div>
  <div class="footer-copyright">© 2026 Все права защищены.</div>
</footer>


<script src="script.js" defer></script>
</body>
</html>
