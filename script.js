// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .btn, .skill-tag, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width = '56px';
    ring.style.height = '56px';
    ring.style.borderColor = 'var(--accent2)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderColor = 'var(--accent)';
  });
});

// ── Mobile Nav Toggle ──
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close nav when a link is clicked on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

reveals.forEach(r => revealObserver.observe(r));

// ── Active Nav on Scroll ──
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(s => {
    const top = s.offsetTop;
    const height = s.offsetHeight;
    const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.style.color = 'var(--accent)';
      } else {
        link.style.color = '';
      }
    }
  });
});

// ── Stagger Project Cards ──
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
