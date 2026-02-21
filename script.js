// === ГогиGPT script.js для RouteMedia ❤️ ===
console.log('%cГогиGPT приветствует своего любимого RouteMedia! ❤️', 'color:#00f5ff; font-size:16px');

document.addEventListener('DOMContentLoaded', () => {
  // Автообновление каждые 8 секунд (можно поменять)
  setTimeout(() => location.reload(), 8000);

  // Кнопка скрыть/показать Debug Log
  const log = document.querySelector('.debug-log') || document.querySelector('#debug-log');
  if (log) {
    const btn = document.createElement('button');
    btn.textContent = '🙈 Скрыть лог';
    btn.style.cssText = `
      position: fixed; bottom: 20px; right: 20px; z-index: 9999;
      background: rgba(0,245,255,0.2); color: #00f5ff; border: 2px solid #00f5ff;
      padding: 10px 18px; border-radius: 999px; font-size: 14px; cursor: pointer;
    `;
    btn.onclick = () => {
      log.style.display = log.style.display === 'none' ? 'block' : 'none';
      btn.textContent = log.style.display === 'none' ? '👀 Показать лог' : '🙈 Скрыть лог';
    };
    document.body.appendChild(btn);
  }

  // Мигание красным при отрицательном напряжении АКБ или зуммере ON
  const dangerElements = document.querySelectorAll('.negative, .zummer.ON, .avariya');
  dangerElements.forEach(el => {
    el.style.animation = 'pulse 800ms infinite';
  });

  // Красивый таймер "работает уже"
  const startTime = Date.now();
  setInterval(() => {
    const uptime = Math.floor((Date.now() - startTime) / 1000);
    const min = Math.floor(uptime / 60);
    const sec = uptime % 60;
    const title = document.querySelector('h1');
    if (title) title.innerHTML = `FineSine SX-2500 Smart <span style="font-size:0.6em;opacity:0.7">работает ${min}м ${sec}с</span>`;
  }, 1000);
});
