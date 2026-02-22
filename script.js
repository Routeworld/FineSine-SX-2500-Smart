// Простой переключатель dark/light для v3
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.createElement('button');
  toggle.innerHTML = '🌙 / ☀️';
  toggle.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:9999; padding:12px; border-radius:50%; background:rgba(0,212,255,0.3); color:white; border:none; font-size:1.4em; cursor:pointer;';
  
  toggle.onclick = () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  };

  // Восстановить выбор
  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');

  document.body.appendChild(toggle);
});
