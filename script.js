// Abstract toggle
  document.querySelectorAll('.abstract-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const abstract = btn.nextElementSibling;
      const isOpen = abstract.classList.toggle('open');
      btn.textContent = isOpen ? 'Abstract ↑' : 'Abstract ↓';
    });
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.paper').forEach(paper => {
        const show = filter === 'all' || paper.dataset.type === filter;
        paper.style.display = show ? 'block' : 'none';
      });
    });
  });
