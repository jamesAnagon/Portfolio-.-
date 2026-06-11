(function () {
  const wrapper = document.querySelector('.marquee-wrapper');
  const track = document.getElementById('marquee-track');
  if (!wrapper || !track) return;

  const template = track.innerHTML.trim();

  function buildLoop() {
    track.innerHTML = template;
    track.style.animation = 'none';

    while (track.scrollWidth < wrapper.clientWidth * 2) {
      track.insertAdjacentHTML('beforeend', template);
    }

    const half = track.innerHTML;
    track.insertAdjacentHTML('beforeend', half);

    const loopWidth = track.scrollWidth / 2;
    const speed = 60;
    const duration = loopWidth / speed;

    track.style.setProperty('--marquee-loop-width', loopWidth + 'px');
    track.style.animation = `marquee-scroll ${duration}s linear infinite`;
  }

  buildLoop();

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildLoop, 150);
  });
})();
