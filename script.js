const fadeElements = document.querySelectorAll('.fadeleftover');

const fadeLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      fadeLeftObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.9
});

fadeElements.forEach((el) => {
  fadeLeftObserver.observe(el);
});

const fadeUps = document.querySelectorAll('.fade-up');

const fadeUpObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      const delay = [...fadeUps].indexOf(entry.target) * 100;

      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);

      fadeUpObserver.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.9
});

fadeUps.forEach((el) => {
  fadeUpObserver.observe(el);
});