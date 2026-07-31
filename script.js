// Highlight nav link for section in view
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
const sections = ['about-skills', 'projects', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const match =
            link.getAttribute('href') === `#${id}` ||
            (id === 'about-skills' && link.getAttribute('href') === '#about');
          link.style.color = match ? '#1B1B23' : '';
        });
      }
    });
  },
  { rootMargin: '-45% 0px -45% 0px' }
);

sections.forEach(section => observer.observe(section));
