// docs/assets/v2.js — tanıtım sayfası: maskot SVG'leri, menü, işletim sistemine göre indirme, kaydırınca belirme.
(() => {
  const kok = document.documentElement;
  kok.classList.add('js');

  // Maskotlar (assets/maskotlar.js → window.MASKOTLAR; uygulamanın app/maskotlar.js kopyası)
  const M = window.MASKOTLAR || {};
  document.querySelectorAll('[data-maskot]').forEach((el) => {
    const m = M[el.dataset.maskot];
    if (!m) return;
    el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${m.viewBox}" role="img" aria-label="${el.closest('li')?.querySelector('b')?.textContent || 'Foxpit mascot'}">${m.svg}</svg>`;
  });

  // Yapışkan menü: kaydırınca arka plan
  const nav = document.getElementById('nav');
  const dolu = () => nav.classList.toggle('dolu', window.scrollY > 8);
  dolu();
  window.addEventListener('scroll', dolu, { passive: true });

  // Mobil menü
  const dugme = nav.querySelector('.nav-menu');
  const sayfa = document.getElementById('nav-sheet');
  const kapat = () => { sayfa.hidden = true; dugme.setAttribute('aria-expanded', 'false'); };
  dugme.addEventListener('click', () => {
    const ac = sayfa.hidden;
    sayfa.hidden = !ac;
    dugme.setAttribute('aria-expanded', String(ac));
    if (ac) nav.classList.add('dolu');
  });
  sayfa.querySelectorAll('a').forEach((a) => a.addEventListener('click', kapat));

  // İşletim sistemine göre indirme düğmesini öne çıkar
  const ua = (navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || '').toLowerCase();
  const os = /win/.test(ua) ? 'windows' : /mac|iphone|ipad/.test(ua) ? 'mac' : /linux|x11/.test(ua) && !/android/.test(ua) ? 'linux' : null;
  if (os) {
    document.querySelector(`.os[data-os="${os}"]`)?.classList.add('senin');
    const ad = { windows: 'Windows', mac: 'macOS', linux: 'Linux' }[os];
    document.querySelectorAll('[data-dl-label]').forEach((s) => { s.textContent = `Download for ${ad}`; });
  }

  // Kaydırınca belirme
  const ogeler = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    ogeler.forEach((o) => o.classList.add('gorundu'));
  } else {
    const io = new IntersectionObserver((girdiler) => {
      girdiler.forEach((g) => { if (g.isIntersecting) { g.target.classList.add('gorundu'); io.unobserve(g.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    ogeler.forEach((o) => io.observe(o));
  }

  // Video: ekranda değilken durdur, hareket azaltma tercihinde oynatma
  const video = document.querySelector('.shot-media');
  if (video) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { video.removeAttribute('autoplay'); video.pause(); }
    else if ('IntersectionObserver' in window) {
      new IntersectionObserver(([g]) => { if (g.isIntersecting) video.play().catch(() => {}); else video.pause(); }).observe(video);
    }
  }
})();
