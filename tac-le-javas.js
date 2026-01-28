document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const span = document.querySelector('.close');

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // premier bouton ouvre directement la modale
  if (openBtn) openBtn.addEventListener('click', openModal);

  // la croix redirige vers la page d'accueil
  if (span) {
    span.addEventListener('click', () => {
      window.location.href = 'jspjetest.html';
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});