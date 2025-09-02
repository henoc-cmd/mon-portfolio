document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Filter projects
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('bg-gray-600', 'text-gray-200');
        btn.classList.remove('bg-blue-700', 'text-white');
      });
      // Add active class to clicked button
      button.classList.add('active', 'bg-blue-700', 'text-white');
      button.classList.remove('bg-gray-600', 'text-gray-200');

      const filterType = button.getAttribute('data-type');
      projectCards.forEach(card => {
        if (filterType === 'all' || card.getAttribute('data-type') === filterType) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});